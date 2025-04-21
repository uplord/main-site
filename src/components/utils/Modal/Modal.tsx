'use client'

import React, { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence, useDragControls } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'
import { NiceModalHandler } from '@ebay/nice-modal-react'

import styles from './modal.module.scss'

import { Header, HeaderProps } from './inc/Header'
import { Footer, FooterProps } from './inc/Footer'
import { Content } from './inc/Content'

export type ModalProps = {
  children: React.ReactNode
  modal: NiceModalHandler
  headerProps?: HeaderProps
  footerProps?: FooterProps
  mobileDraggable?: boolean
  backdropClose?: boolean
}

export const Modal = ({
  children,
  modal,
  headerProps,
  footerProps,
  mobileDraggable = false,
  backdropClose = true,
}: ModalProps) => {
  const refMain = useRef<HTMLDivElement>(null)
  const controls = useDragControls()
  const isMobile = useMediaQuery({ maxWidth: 743 })
  const [showMobile, setShowMobile] = useState(true)

  useEffect(() => {
    setShowMobile(isMobile)
  }, [isMobile])

  const handleDragEnd = (_: unknown, info: { offset: { y: number } }) => {
    if (info.offset.y > 150) {
      modal.hide()
    }
  }

  return (
    <AnimatePresence onExitComplete={() => modal.remove()}>
      {modal.visible && (
        <motion.div
          className={styles.backdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            onClick={() => backdropClose && modal.hide()}
            className={styles['backdrop--close-button']}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          />
          {showMobile && mobileDraggable ? (
            <motion.div
              ref={refMain}
              className={`${styles.main}`}
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={{ top: 0, bottom: 0.5 }}
              dragListener={false}
              dragControls={controls}
              onDragEnd={handleDragEnd}
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <div
                className={styles.drag}
                onPointerDown={(event) => controls.start(event)}
                style={{ touchAction: 'none' }}
              >
                {headerProps && <Header {...headerProps} modal={modal} />}
                <div className={styles.scroll}>
                  <div className={styles.content}>{children}</div>
                </div>
                {footerProps && <Footer {...footerProps} />}
              </div>
            </motion.div>
          ) : (
            <motion.div
              className={styles.main}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <Content
                headerProps={headerProps}
                footerProps={footerProps}
                modal={modal}
              >
                {children}
              </Content>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
