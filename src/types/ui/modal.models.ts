import { ReactNode } from 'react'

export interface BaseModalProps {
  isModalOpen: boolean
  setIsModalOpen: (isModalOpen: boolean) => void
}

export interface ModalProps extends BaseModalProps {
  className?: React.ComponentProps<'div'>['className']
  children?: ReactNode
}
