import Typography from '@/components/ui/typography/typography'
import { TypographyProps } from '@/types/ui/typography.models'
import React, { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
  variants: 'error' | 'outline-gray'
  size?: 'small' | 'medium' | 'large' | 'custom'
  children: React.ReactNode
  disabled?: boolean
  startIcon?: any
  isLoading?: boolean
  type?: 'button' | 'submit' | 'reset'
  typographyVariant?: TypographyProps['variants']
}

const Button: React.FC<Props> = ({
  className,
  onClick,
  variants,
  children,
  size = 'large',
  disabled,
  startIcon,
  isLoading,
  type = 'button',
  typographyVariant = 'label-number-lg-medium',
  ...rest
}) => {
  const classNames = {
    base: 'flex items-center justify-center select-none transition-all duration-300',
    variants: {
      'outline-gray': 'rounded-[50px] border border-neutral-200 text-black hover:bg-neutral-100',
      error:
        'hover:shadow-primaryButton rounded-[360px] bg-error text-white hover:bg-error/90',
    },
    size: {
      small: 'h-[32px] py-[8px] px-[16px]',
      medium: 'h-[40px] py-[8px] px-[24px]',
      large: 'h-[44px] py-[12px] px-[24px]',
      custom: '',
    },
    sizeStartIcon: {
      small: 'ps-[12px] pe-[16px] py-[8px] h-[32px]',
      medium: 'ps-[24px] pe-[32px] py-[10px] h-[40px]',
      large: 'ps-[24px] pe-[32px] py-[10px] h-[44px]',
      custom: '',
    },
    disabled: {
      primary: 'flex items-center justify-center rounded-[360px] bg-primary-500/30 text-white',
      outline: '',
      text: '',
      'outline-green': '',
      'outline-gray': '',
      'text-bg': '',
      'text-bg-rounded': '',
      error: 'flex items-center justify-center rounded-[360px] bg-feedback-error-500/30 text-white',
    },
  }

  return (
    <button
      {...rest}
      type={type}
      className={`${className} ${classNames.base} ${disabled ? classNames.disabled[variants] : classNames.variants[variants]} ${startIcon ? classNames.sizeStartIcon[size] : classNames.size[size]}`}
      onClick={onClick}
    >
      <div className="flex items-center justify-center gap-x-[8px]">
        {isLoading && <div dir="ltr" className={`loader h-[16px] w-[16px] border-2`}></div>}
        {startIcon && !isLoading && startIcon}
        <Typography
          tag="span"
          variants={
            size === 'small'
              ? 'label-md-medium'
              : size === 'medium'
                ? 'label-lg-medium'
                : size === 'large'
                  ? 'label-number-lg-medium'
                  : typographyVariant
          }
          color="custom"
          className="!leading-none text-center -tracking-[0.32px]"
        >
          {children}
        </Typography>
      </div>
    </button>
  )
}

export default Button
