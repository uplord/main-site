'use client'

import { useState } from 'react'

import styles from '../page.module.scss'
import { Checkbox } from '@/components/ui/Checkbox'
import { Input } from '@/components/ui/Input'
import { Radio } from '@/components/ui/Radio'
import { Select } from '@/components/ui/Select'
import { Textarea } from '@/components/ui/Textarea'

export default function TestPage() {
  const [input, setInput] = useState('')
  const [textarea, setTextarea] = useState('')
  const [select, setSelect] = useState('')
  const [checkbox, setCheckbox] = useState(true)
  const [radio, setRadio] = useState('car')

  return (
    <main className={styles.main}>
      <div className={styles.section}>
        <div className={styles.container}>
          <Input
            type="text"
            name="input"
            value={input}
            placeholder="Input"
            onChange={(e) => setInput(e.target.value)}
          />

          <Textarea
            name="textarea"
            value={textarea}
            placeholder="Textarea"
            onChange={(e) => setTextarea(e.target.value)}
          />

          <Select
            options={[
              {
                value: '1',
                label: 'Option 1',
              },
              {
                value: '2',
                label: 'Option 2',
              },
            ]}
            name="select"
            value={select}
            placeholder="Select as option"
            onChange={(e) => setSelect(e.target.value)}
          />

          <Checkbox
            name="checkbox"
            value="Car"
            label="label"
            checked={checkbox}
            onChange={(e) => setCheckbox(e.target.checked)}
          />

          <Radio
            name="radio"
            id="radio1"
            value="car"
            label="Car"
            checked={radio === 'car'}
            onChange={(e) => setRadio(e.target.value)}
          />

          <Radio
            name="radio"
            id="radio2"
            value="bus"
            label="Bus"
            checked={radio === 'bus'}
            onChange={(e) => setRadio(e.target.value)}
          />
        </div>
      </div>
    </main>
  )
}
