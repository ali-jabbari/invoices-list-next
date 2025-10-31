"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import { useOnClickOutside } from "usehooks-ts";
import { IoMdEye } from "react-icons/io";
import { IoMdRemoveCircle } from "react-icons/io";
import { MdEditDocument } from "react-icons/md";
import { IconType } from "react-icons";
import Typography from "@/components/ui/typography/typography";
import RejectFactorModal from "@/components/views/invoices/modals/rejectFactorModal";

export interface MenuItemModel {
  id: number;
  title: string;
  icon: IconType;
  className?: string;
  onClick: () => void;
}

const ActionMenu: React.FC = () => {
  const ref = useRef<any>(null);
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openHandlle = () => setOpen(true);

  const handleClickOutside = () => {
    setOpen(false);
  };

  const handleRejectFactor = () => {
    setIsModalOpen(true);
    setOpen(false);
  };

  const menuItems: MenuItemModel[] = [
    {
      id: 1,
      title: "مشاهده",
      icon: IoMdEye,
      className: "text-txt-title",
      onClick: () => setOpen(false),
    },
    {
      id: 2,
      title: "ویرایش",
      icon: MdEditDocument,
      className: "text-txt-title",
      onClick: () => setOpen(false),
    },
    {
      id: 3,
      title: "رد فاکتور",
      icon: IoMdRemoveCircle,
      className: "text-error",
      onClick: handleRejectFactor,
    },
  ];

  useOnClickOutside(ref, handleClickOutside);
  return (
    <>
      <RejectFactorModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        className="max-w-[700px] pb-4"
      />

      <div className="relative">
        <button
          onClick={openHandlle}
          className="bg-white shadow-boxShadow hover:bg-primary/20 rounded-full p-3 max-lg:p-2 flex items-center justify-center"
        >
          <FiMoreVertical
            size={20}
            width={20}
            height={20}
            className="text-black text-20"
          />
        </button>
        <AnimatePresence mode="wait">
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute z-50 left-0 mt-4"
              ref={ref}
            >
              <div className="w-[200px] bg-white shadow-modal rounded-lg">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={item.onClick}
                    className={`flex items-center gap-2 p-4 hover:bg-background w-full ${item.className}`}
                  >
                    <item.icon size={22} />
                    <Typography variants="label-lg-medium">
                      {item.title}
                    </Typography>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default ActionMenu;
