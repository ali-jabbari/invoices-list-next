import React from "react";

import Modal from "@/ui/modal/modal";
import { BaseModalProps } from "@/types/ui/modal.models";
import Typography from "@/ui/typography/typography";
import { IoMdClose } from "react-icons/io";
import Textarea from "@/ui/inputs/textarea";
import Button from "@/ui/buttons/button";

interface Props extends BaseModalProps {
  className?: string;
}

const RejectFactorModal: React.FC<Props> = ({
  isModalOpen,
  setIsModalOpen,
  className,
}) => {
  return (
    <Modal
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      className={className}
    >
      <div className="flex flex-col gap-[16px]">
        <div className="flex items-center justify-between w-full border-b border-border p-4">
          <Typography variants="title-md-medium" color="title">
            رد فاکتور
          </Typography>
          <IoMdClose
            size={24}
            className="cursor-pointer"
            onClick={() => setIsModalOpen(false)}
          />
        </div>
        <div className="flex flex-col items-end gap-[16px] p-4 w-full">
          <Textarea
            id={`reject_description`}
            placeholder="لطفا دلیل رد شدن فاکتور را به طور کامل شرح دهید"
            label="دلیل رد فاکتور"
            className="w-full"
            containerClassName="w-full"
            rows={4}
          />
          <div className="flex items-end gap-4">
            <Button
              className="transition-all duration-300"
              variants="outline-gray"
              onClick={() => setIsModalOpen(false)}
            >
              انصراف
            </Button>

            <Button
              className={`transition-all duration-300`}
              variants="error"
              onClick={() => setIsModalOpen(false)}
            >
              ثبت رد فاکتور
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default RejectFactorModal;
