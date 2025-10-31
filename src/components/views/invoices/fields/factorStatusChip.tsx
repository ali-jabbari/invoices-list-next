import Typography from "@/ui/typography/typography";
import { FactorStatusModel } from "@/types/views/factorStatus.models";
import React from "react";

interface Props {
  status: FactorStatusModel;
  className?: string;
}

const titleText: Record<string, string> = {
  normal: "عادی",
  exception: "مستثنی",
};

const FactorStatusChip: React.FC<Props> = ({ status, className }) => {
  const classNames = {
    base: "rounded-full flex items-center gap-2 py-[4px] px-2 w-fit",
    variants: {
      normal: "bg-neutral-500 text-white shadow-tagOrange",
      exception: "bg-tags-yellow text-tags-purple-text shadow-tagPurple",
    },
  };
  
  return (
    <div
      className={`${classNames.base} ${classNames.variants[status]} ${className}`}
    >
      <Typography variants="label-md-medium" color="custom" weight="semibold">
        {titleText[status]}
      </Typography>
    </div>
  );
};

export default FactorStatusChip;
