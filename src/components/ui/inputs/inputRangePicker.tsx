"use client";

import Typography from "@/ui/typography/typography";
import React, { useEffect, useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import "@/styles/date-picker.css";
import persian from "react-date-object/calendars/persian";
import persianFa from "react-date-object/locales/persian_fa";
import Chip from "@/ui/chip/chip";
import { FaCalendarDay } from "react-icons/fa";

interface DatePickerProps {
  id: string;
  label: string;
  className?: string;
  inputClassName?: string;
  dateValue?: Date[] | undefined;
  onChange?: (date: Date[] | undefined) => void;
}

const InputRangePicker: React.FC<DatePickerProps> = ({
  className,
  id,
  label,
  inputClassName,
  onChange,
  dateValue,
}) => {
  const [value, setValue] = useState<Date[] | undefined>(dateValue);
  
  useEffect(() => {
    setValue(dateValue);
  }, [dateValue]);

  const handleChange = (date: DateObject[] | undefined) => {
    if (date) {
      const newDates = date.map((d) => d.toDate());
      setValue(newDates);
      onChange?.(newDates);
    } else {
      setValue(undefined);
      onChange?.(undefined);
    }
  };

  const handleRemoveDate = () => {
    if (!value) return;
    const updatedValue = [...value];

    updatedValue.shift();
    updatedValue.pop();

    setValue(updatedValue.length ? updatedValue : undefined);
    onChange?.(updatedValue.length ? updatedValue : undefined);
  };

  function CustomRangeInput({
    onFocus,
    value,
    separator = "~",
    onRemove,
  }: {
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    value?: string;
    separator?: string;
    onRemove: (type: "from" | "to") => void;
  }) {
    if (value === undefined) return null;
    const values = value.split(separator);
    const from = values[0] ? `از ${values[0]}` : null;
    const to = values[1] ? `تا ${values[1]}` : null;

    return (
      <label htmlFor={id} className="relative h-full">
        <input
          id={id}
          onFocus={onFocus}
          readOnly
          placeholder="__ / __ / ____"
          className={`${inputClassName} ${
            from ? "absolute w-0" : "z-20 h-full w-full"
          } outline-none placeholder:text-neutral-500`}
        />
        <div className="flex items-center gap-[4px]">
          {from && <Chip label={from} onClick={() => onRemove("from")} />}
          {to && <Chip label={to} onClick={() => onRemove("to")} />}
        </div>
      </label>
    );
  }

  return (
    <div className={`${className}`}>
      <label
        htmlFor={id}
        className="mb-[8px] flex w-full items-center gap-[5px]"
      >
        <Typography variants="label-lg-medium" tag="span" color="title">
          {label}
        </Typography>
      </label>
      <div className="flex h-[50px] max-md:h-[42px] w-full items-center justify-between rounded-[6px] bg-white outline outline-1 outline-neutral-200">
        <DatePicker
          range
          rangeHover
          id={id}
          render={<CustomRangeInput onRemove={handleRemoveDate} />}
          value={value}
          onChange={handleChange}
          inputClass={`${inputClassName} h-[50px] !max-md:h-[42px] w-full text-black placeholder:text-neutral-500 outline-none px-[16px] text-start text-14 font-medium`}
          containerClassName="w-full h-[44px] px-[12px]"
          className="green !shadow-dropDown"
          placeholder="__ / __ / ____"
          arrowClassName="!opacity-0"
          calendar={persian}
          locale={persianFa}
        ></DatePicker>
      </div>
    </div>
  );
};

export default InputRangePicker;
