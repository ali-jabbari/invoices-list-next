import Typography from '@/ui/typography/typography'
import { ChipProps } from '@/types/ui/chip.models'
import React from 'react'
import { FaRegCircleXmark } from "react-icons/fa6";


const Chip: React.FC<ChipProps> = ({ label, onClick }) => {
  return (
    <div className="ss02 flex items-center gap-[4px] rounded-[20px] bg-background py-[4px] pe-[6px] ps-[8px]">
      <Typography className="min-w-[88px]" variants="label-number-lg-medium" color="title" tag="span">
        {label}
      </Typography>
      <FaRegCircleXmark onClick={onClick} width={15} height={15} className='cursor-pointer text-[15px] text-neutral-600'/>
    </div>
  )
}

export default Chip
