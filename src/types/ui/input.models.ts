import { ComponentProps, InputHTMLAttributes, ReactNode } from 'react'
import { TypographyProps } from './typography.models'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  startIcon?: ReactNode
  endIcon?: ReactNode
  error?: string
  type?: string
  containerClassName?: ComponentProps<'div'>['className']
  inputVariant?: TypographyProps['variants']
  label?: string
  labelVariant?: TypographyProps['variants']
  isRequired?: boolean
  id: string
  disabled?: boolean
  isPrice?: boolean
}
