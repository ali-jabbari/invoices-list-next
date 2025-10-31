'use client'

import { Route } from 'next'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function useHandleSearchParam() {
  const { replace } = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams.toString())

  const handleSearchParam = (query: string, value?: string | string[]) => {
    if (value) {
      if (Array.isArray(value)) {
        params.delete(query) // Clear existing values
        value.forEach((val) => params.append(query, val)) // Add new array values
      } else {
        params.set(query, value)
      }
    } else {
      params.delete(query)
    }
    replace(`${pathname}?${params.toString()}` as Route)
  }
  return handleSearchParam
}
