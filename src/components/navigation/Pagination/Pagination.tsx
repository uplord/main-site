import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import { ButtonGroup, Button } from '@/components/ui/Button'
import { Select } from '@/components/ui/Select'

export type PaginationProps = {
  totalPages: number
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

export const Pagination = ({
  totalPages = 4,
  currentPage = 1,
  setCurrentPage,
}: PaginationProps) => {
  const isMobile = useMediaQuery({ maxWidth: 743 })
  const [showMobile, setShowMobile] = useState(true)
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)

  useEffect(() => {
    setShowMobile(isMobile)
  }, [isMobile])

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <>
      {totalPages < 5 && !showMobile ? (
        <ButtonGroup justify="center">
          <Button
            leadingIcon="ChevronLeft"
            size="sm"
            variant="outline"
            onClick={handlePrev}
            isDisabled={currentPage === 1}
            aria-label="Previous page"
          />
          {pageNumbers.map((page) => (
            <Button
              key={page}
              label={String(page)}
              size="sm"
              variant={page === currentPage ? 'primary' : 'text'}
              onClick={() => setCurrentPage(page)}
              isIcon
            />
          ))}
          <Button
            leadingIcon="ChevronRight"
            size="sm"
            variant="outline"
            onClick={handleNext}
            isDisabled={currentPage === totalPages}
            aria-label="Next page"
          />
        </ButtonGroup>
      ) : (
        <ButtonGroup justify="center">
          <Button
            leadingIcon="ChevronLeft"
            size="sm"
            variant="outline"
            onClick={handlePrev}
            isDisabled={currentPage === 1}
            aria-label="Previous page"
          />
          <Select
            name="pageSize"
            value={String(currentPage)}
            options={pageNumbers.map((page) => ({
              value: String(page),
              label: String(page),
            }))}
            onChange={(e) => setCurrentPage(Number(e.target.value))}
          />
          <Button
            leadingIcon="ChevronRight"
            size="sm"
            variant="outline"
            onClick={handleNext}
            isDisabled={currentPage === totalPages}
            aria-label="Next page"
          />
        </ButtonGroup>
      )}
    </>
  )
}
