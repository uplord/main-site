'use client'

import { clsx } from 'clsx'
import Link from 'next/link'
import React, { useState } from 'react'
import { Button, Card, Input, Select, Pagination } from 'uplord-ui'

import { Header } from '@/app/admin/_components/Header'
import { Sidebar } from '@/app/admin/_components/Sidebar'
import { DataTable, Column } from '@/app/admin/_components/Table'
import styles from '@/app/admin/page.module.scss'

type PageRow = {
  id: number
  title: string
  author: string
  template: string
  date: string
}

export default function AdminPage() {
  const [isOpen, setIsOpen] = useState(false)

  const [totalPages] = useState(4)
  const [currentPage, setCurrentPage] = useState(1)

  const columns: Column<PageRow>[] = [
    {
      key: 'title',
      label: 'Title',
      render: (value) => (
        <Link
          href=""
          onClick={(event) => event.stopPropagation()}>
          {value}
        </Link>
      ),
    },
    { key: 'author', label: 'Author' },
    { key: 'template', label: 'Template' },
    { key: 'date', label: 'Date' },
  ]

  const pagesData: PageRow[] = [
    {
      id: 1,
      title: 'Home',
      author: 'Admin',
      template: 'Default',
      date: '23 Aug',
    },
    {
      id: 2,
      title: 'About',
      author: 'Michael',
      template: 'Info',
      date: '22 Aug',
    },
  ]

  return (
    <div className={clsx(styles.app, styles.bar, isOpen && styles.open)}>
      <Sidebar
        left={
          <Button
            href="/admin"
            leadingIcon="ArrowLeft"
            size="sm"
            variant="default"
          />
        }
        center={<>Pages</>}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <main className={styles.main}>
        <Header
          left={
            <>
              <Button
                href="/admin"
                leadingIcon="ArrowLeft"
                size="sm"
                variant="outline"
                className={styles.back}
              />
              <span>Pages</span>
            </>
          }
        />
        <div className={styles.container}>
          <div className={styles.content}>
            <Card className={styles.card}>
              <div className={styles.row}>
                <Button
                  label="Add new page"
                  size="md"
                  variant="primary"
                  className={styles.button}
                />
              </div>
            </Card>
            <Card className={styles.card}>
              <div className={styles.row}>
                <div className={styles.row}>
                  <Select
                    name="bulk"
                    id="bulk"
                    size="sm"
                    placeholder="Bulk actions"
                    options={[{ label: 'Delete', value: 'delete' }]}
                  />
                  <Button
                    label="Apply"
                    size="md"
                    variant="outline"
                    className={styles.button}
                  />
                </div>
                <div className={styles.row}>
                  <Input
                    type="search"
                    name="search"
                    id="search"
                    size="sm"
                    placeholder="Search page"
                    autoComplete="off"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      console.log('Search', event.target.value)
                    }
                  />
                  <Button
                    label="Search"
                    size="md"
                    variant="outline"
                    className={styles.button}
                  />
                </div>
              </div>

              <DataTable<PageRow>
                columns={columns}
                data={pagesData}
                withCheckbox
              />

              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
