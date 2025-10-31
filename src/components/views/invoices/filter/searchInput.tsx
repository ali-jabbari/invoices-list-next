"use client";

import Input from "@/ui/inputs/input";
import React from "react";
import { IconType } from "react-icons";
import { HiMiniXMark } from "react-icons/hi2";


interface Props {
  label: string;
  value: string;
  placeholder: string;
  icon: IconType;
  onChange: (value: string) => void;
  onEnter: (value: string) => void;
  onEmpty: () => void
}

const SearchInput: React.FC<Props> = ({
  label,
  value,
  placeholder,
  onChange,
  onEnter,
  onEmpty,
  icon: Icon,
  ...rest
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onEnter(value);
    }
  };

  return (
    <div className={`flex items-center w-full`}>
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        id="search"
        label={label}
        startIcon={
          <Icon width={16} height={16} className="text-16 text-txt-subtitle" />
        }
        endIcon={
          value && (
            <HiMiniXMark
              width={22}
              height={22}
              className="text-22 text-txt-subtitle cursor-pointer hover:text-error transition-colors"
              onClick={onEmpty}
            />
          )
        }
        containerClassName="w-full"
        onKeyDown={handleKeyDown}
        {...rest}
      />
    </div>
  );
};

export default SearchInput;
