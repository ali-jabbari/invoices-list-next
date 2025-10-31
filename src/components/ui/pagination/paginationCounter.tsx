import { PaginationCounterProps } from '@/types/ui/pagination.models'
import Typography from '../typography/typography'

const PaginationCounter = ({ page_size, count, currentPage }: PaginationCounterProps) => {
  return (
    <Typography variants="label-lg-semibold" color="title" className="max-lg:title-sm-medium whitespace-nowrap max-lg:hidden">
      <span>
        {Number(page_size) * currentPage - Number(page_size) + 1}-
        {count < Number(page_size) * currentPage ? count : Number(page_size) * currentPage}
      </span>{' '}
      <span>از</span> <span>{count}</span>
    </Typography>
  )
}

export default PaginationCounter
