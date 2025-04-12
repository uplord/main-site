'use client'

import React from 'react'
import { NiceModalHandler } from '@ebay/nice-modal-react'
import styles from '../modal.module.scss'

import { Header, HeaderProps } from './Header'
import { Footer, FooterProps } from './Footer'

export type ContentProps = {
  children: React.ReactNode
  headerProps?: HeaderProps
  footerProps?: FooterProps
  modal: NiceModalHandler
}

export const Content = ({
  children,
  headerProps,
  footerProps,
  modal,
}: ContentProps) => {

  return (
    <div className={styles.main}>
			{headerProps && (
				<Header {...headerProps} modal={modal} />
			)}
			<div className={styles.scroll}>
				<div className={styles.content}>{children}</div>
			</div>
			{footerProps && (
				<Footer {...footerProps} />
			)}
		</div>
  )
}