import React, { useState, ReactNode } from 'react'
import { Checkbox } from 'uplord-ui'

import styles from './table.module.scss'

export type Column<T extends { id: string | number }> = {
  key: keyof T
  label: string
  render?: (value: ReactNode, row: T) => ReactNode
}

type TableProps<T extends { id: string | number }> = {
  columns: Column<T>[]
  data: T[]
  withCheckbox?: boolean
}

export function DataTable<T extends { id: string | number }>({
  columns,
  data,
  withCheckbox = false,
}: TableProps<T>) {
  const [checkedRows, setCheckedRows] = useState<boolean[]>(Array(data.length).fill(false))

  const toggleRow = (index: number) => {
    setCheckedRows((prev) => prev.map((val, i) => (i === index ? !val : val)))
  }

  return (
    <div className={styles.table}>
      <table>
        <thead>
          <tr>
            {withCheckbox && <th></th>}
            {columns.map((col) => (
              <th key={String(col.key)}>{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr
              key={row.id}
              onClick={() => withCheckbox && toggleRow(i)}
              style={{ cursor: withCheckbox ? 'pointer' : 'default' }}>
              {withCheckbox && (
                <td
                  width="40"
                  scope="checkbox">
                  <Checkbox
                    name="checkbox"
                    id={`checkbox-${row.id}`}
                    checked={checkedRows[i]}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      event.stopPropagation()
                      setCheckedRows((prev) =>
                        prev.map((val, j) => (j === i ? event.target.checked : val)),
                      )
                    }}
                  />
                </td>
              )}
              {columns.map((col) => {
                const value = row[col.key] as ReactNode
                return (
                  <td
                    key={String(col.key)}
                    data-title={col.label}>
                    <span>{col.render ? col.render(value, row) : value}</span>
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
