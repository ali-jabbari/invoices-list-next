import Typography from "@/ui/typography/typography";
import { HeaderTitleModels } from "@/types/layout/headerTitle.models";
import React from "react";

const HeaderTitle: React.FC<HeaderTitleModels> = ({
  title,
  description,
  icon: Icon,
}) => {
  return (
    <div className="mb-10 max-lg:mb-5 flex gap-3">
      <div className="bg-white h-fit p-4 max-lg:p-3 rounded-full shadow-boxShadow hover:bg-primary/10 transition-colors">
        <Icon size={28} className="text-primary max-lg:w-[22px] max-lg:h-[22px]" />
      </div>
      <div>
        <Typography variants="headline-sm-semibold" className="max-lg:title-lg1-bold max-sm:title-md-medium">{title}</Typography>
        <Typography variants="title-sm-medium" color="label" className="mt-1.5 max-lg:label-md-medium">
          {description}
        </Typography>
      </div>
    </div>
  );
};

export default HeaderTitle;
