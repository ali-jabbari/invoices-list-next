import React from 'react'

export interface TypographyProps {
  className?: string
  dir?: 'ltr' | 'rtl' | 'auto'
  children: React.ReactNode
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'pre' | 'th' | 'td'
  variants:
    | 'display-lg-bold'
    | 'display-md-regular'
    | 'display-sm-regular'
    | 'display-sm-numberal-regular'
    | 'headline-lg-medium'
    | 'headline-md-regular'
    | 'headline-sm-semibold'
    | 'headline-lg-number-semibold'
    | 'headline-sm-number'
    | 'title-lg-bold'
    | 'title-lg1-bold'
    | 'title-md-medium'
    | 'title-sm-medium'
    | 'title-lg-number-bold'
    | 'label-xl-regular'
    | 'label-lg-medium'
    | 'label-md-medium'
    | 'label-sm-regular'
    | 'label-lg-semibold'
    | 'label-number-xlg-regular'
    | 'label-number-lg-medium'
    | 'body-lg-regular'
    | 'body-md-regular'
    | 'body-sm-regular'
    | 'body-number-body-sm-regular'
    | 'body-md-number-regular'
    | 'link-min'
    | 'link-lg'
    | 'status-small-D-bold'
    | 'large-d-bold'

  color?:
    | 'title'
    | 'placeholder'
    | 'body'
    | 'subtitle'
    | 'label'
    | 'custom'
  weight?: 'normal' | 'medium' | 'semibold'
  style?: any
}
