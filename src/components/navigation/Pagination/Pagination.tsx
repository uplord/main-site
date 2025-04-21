import React, { useEffect, useState } from 'react'

import { useMediaQuery } from 'react-responsive'
import { ButtonGroup, Button } from '@/components/ui/Button'
import { Size, Variant } from '@/types/system'

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
            size={Size.Small}
            variant={Variant.Outline}
            onClick={handlePrev}
            isDisabled={currentPage === 1}
          />
          {pageNumbers.map((page) => (
            <Button
              key={page}
              label={String(page)}
              size={Size.Small}
              variant={
                page === currentPage ? Variant.Primary : Variant.Text
              }
              onClick={() => setCurrentPage(page)}
              isIcon
            />
          ))}
          <Button
            leadingIcon="ChevronRight"
            size={Size.Small}
            variant={Variant.Outline}
            onClick={handleNext}
            isDisabled={currentPage === totalPages}
          />
        </ButtonGroup>
      ) : (
        <ButtonGroup justify="center">
          <Button
            leadingIcon="ChevronLeft"
            size={Size.Small}
            variant={Variant.Outline}
            onClick={handlePrev}
            isDisabled={currentPage === 1}
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
            size={Size.Small}
            variant={Variant.Outline}
            onClick={handleNext}
            isDisabled={currentPage === totalPages}
          />
        </ButtonGroup>
      )}
    </>
  )
}
