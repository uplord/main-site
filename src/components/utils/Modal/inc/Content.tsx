'use client'

import { NiceModalHandler } from '@ebay/nice-modal-react'
import React from 'react'

import styles from '../modal.module.scss'
import { Footer, FooterProps } from './Footer'
import { Header, HeaderProps } from './Header'

export type ContentProps = {
  children: React.ReactNode
  headerProps?: HeaderProps
  footerProps?: FooterProps
  modal: NiceModalHandler
}

export const Content = ({ children, headerProps, footerProps, modal }: ContentProps) => {
  return (
    <div className={styles.main}>
      {headerProps && (
        <Header
          {...headerProps}
          modal={modal}
        />
      )}
      <div className={styles.scroll}>
        <div className={styles.content}>{children}</div>
      </div>
      {footerProps && <Footer {...footerProps} />}
    </div>
  )
}
