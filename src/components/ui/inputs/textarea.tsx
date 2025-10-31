'use client'

import { ComponentProps, forwardRef, useState } from 'react'
import Typography from '../typography/typography'
import { TextareaProps } from '@/types/ui/textarea.models'

const Textarea = (
  {
    error,
    containerClassName,
    inputVariant = 'body-md-regular',
    labelVariant = 'label-lg-medium',
    label,
    maxLength,
    id,
    ...textareaProps
  }: TextareaProps,
  ref?: ComponentProps<'textarea'>['ref'],
) => {
  const [charCount, setCharCount] = useState(0)

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCharCount(event.target.value.length)
    textareaProps.onChange?.(event)
  }

  return (
    <div className={containerClassName}>
      {label && (
        <label htmlFor={id} className="mb-[8px] flex items-center gap-[5px]">
          <Typography variants={labelVariant} tag="span" color="title">
            {label}
          </Typography>
        </label>
      )}
      <div className="relative rounded-[6px] bg-white">
        <textarea
          {...(ref && { ref })}
          {...textareaProps}
          maxLength={maxLength}
          onChange={handleInputChange}
          className={`${textareaProps.className} ${inputVariant} thin-scroll-bar w-full rounded-[6px] py-[8px] pr-[16px] align-top text-key-txt-title outline outline-1 outline-neutral-200 placeholder:text-neutral-500 ${error ? 'focus:outline-feedback-error-500' : 'focus:outline-primary-500'} max-h-[350px] min-h-[132px] pl-[16px] text-start`}
        />
        {maxLength && (
          <div className="absolute bottom-[8px] right-[16px] mt-[5px] text-right">
            <Typography tag="span" variants="label-sm-regular" color="subtitle">
              {charCount}/{maxLength}
            </Typography>
          </div>
        )}
      </div>
    </div>
  )
}

export default forwardRef(Textarea)