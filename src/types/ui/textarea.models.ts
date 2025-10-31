import { ComponentProps, TextareaHTMLAttributes } from 'react'
import { TypographyProps } from './typography.models'

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string
  containerClassName?: ComponentProps<'div'>['className']
  inputVariant?: TypographyProps['variants']
  label?: string
  isRequired?: boolean
  maxLength?: number
  labelVariant?: TypographyProps['variants']
  id: string
}
