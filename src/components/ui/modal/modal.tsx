"use client";

import { useEscapeKey } from "@/hooks/custom-hooks/useEscapeKey";
import { ModalProps } from "@/types/ui/modal.models";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useScrollLock } from "usehooks-ts";

const Modal: React.FC<ModalProps> = ({
  isModalOpen,
  setIsModalOpen,
  children,
  className,
}) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);
  const { lock, unlock } = useScrollLock({
    autoLock: false,
  });

  useEffect(() => {
    isModalOpen ? lock() : unlock(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalOpen]);
  
  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#portal");
    setMounted(true);
  }, []);

  useEscapeKey(() => setIsModalOpen(false), isModalOpen);

  return mounted && ref.current
    ? createPortal(
        <AnimatePresence mode="wait">
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className={`fixed bottom-0 left-0 right-0 top-0 z-[9999] m-auto flex h-full w-full items-end justify-center overflow-hidden rounded-[3px] bg-neutral-600 bg-opacity-20 md:items-center`}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ opacity: { duration: 0.2 } }}
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className={`flex w-full flex-col rounded-[16px] bg-white shadow-modal ${className}`}
              >
                {children}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        ref.current
      )
    : null;
};

export default Modal;
