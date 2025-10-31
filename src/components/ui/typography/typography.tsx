import { TypographyProps } from '@/types/ui/typography.models'
import React from 'react'

const Typography: React.FC<TypographyProps> = ({
  children,
  tag = 'p',
  variants,
  color,
  className,
  dir,
  style,
  weight,
}) => {
  const Component = tag
  const classNames = {
    color: {
      title: 'text-txt-title',
      placeholder: 'text-txt-placeholder',
      body: 'text-txt-body',
      subtitle: 'text-txt-subtitle',
      label: 'text-txt-lable',
      custom: '',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
    },
  }

  return (
    <Component
      dir={dir}
      className={`${className} ${variants} ${color && classNames.color[color]} ${weight && classNames.weight[weight]}`}
      style={style}
    >
      {children}
    </Component>
  )
}
export default Typography
