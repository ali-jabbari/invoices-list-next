'use client'

import { ComponentProps, forwardRef } from 'react'
import { InputProps } from '@/types/ui/input.models'
import { formatNumberWithCommas } from '@/utils/helpers/format'
import Typography from '@/ui/typography/typography'

const Input = (
  {
    id,
    error,
    startIcon,
    endIcon,
    type,
    containerClassName,
    inputVariant = 'label-lg-medium',
    labelVariant = 'label-lg-medium',
    label,
    disabled,
    isPrice,
    ...inputProps
  }: InputProps,
  ref?: ComponentProps<'input'>['ref'],
) => {
  return (
    <div className={containerClassName}>
      {label && (
        <label htmlFor={id} className={`mb-[8px] flex items-center gap-[5px]`}>
          <Typography variants={labelVariant} tag="span" color={disabled ? 'label' : 'title'}>
            {label}
          </Typography>
        </label>
      )}
      <div className="relative rounded-[6px] bg-white">
        {startIcon && (
          <span
            className={`${disabled ? 'text-key-border' : 'text-key-icon-light'} absolute inset-y-0 right-[16px] flex items-center`}
          >
            {startIcon}
          </span>
        )}
        {endIcon && (
          <span
            className={`${disabled ? 'text-key-border' : 'text-key-icon-light'} absolute inset-y-0 left-[16px] flex items-center`}
          >
            {endIcon}
          </span>
        )}
        <input
          id={id}
          {...(ref && { ref: ref })}
          {...inputProps}
          autoComplete={inputProps.autoComplete || 'off'}
          value={
            isPrice
              ? inputProps.value && inputProps.value !== '0.00'
                ? formatNumberWithCommas(String(inputProps.value))
                : ''
              : inputProps.value
          }
          onChange={
            isPrice
              ? (e) => {
                  const value = e.target.value
                  const formattedValue = value.replaceAll(',', '')
                  if (
                    (!isNaN(Number(formattedValue)) || formattedValue.toString().includes(',')) &&
                    !(formattedValue.includes('.') && (formattedValue.split('.')[1]?.length || 0) > 2)
                  ) {
                    inputProps.onChange?.({
                      ...e,
                      target: {
                        ...e.target,
                        value: formattedValue,
                      },
                    })
                  }
                }
              : inputProps.onChange
          }
          disabled={disabled}
          type={type}
          className={`${inputProps.className} ${inputVariant} ${startIcon ? 'pr-[44px]' : 'pr-[16px]'} h-[50px] max-md:h-[42px] w-full rounded-[6px] py-[8px] text-black outline outline-1 ${error ? 'outline-feedback-error-500' : 'outline-neutral-200 focus:outline-primary-500'} pl-[16px] text-start ${disabled ? 'outline-key-divider placeholder:text-key-border' : 'placeholder:text-neutral-500'} disabled:bg-white`}
        />
      </div>
    </div>
  )
}

export default forwardRef(Input)
