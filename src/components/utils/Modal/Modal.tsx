'use client'

import { NiceModalHandler } from '@ebay/nice-modal-react'
import { motion, AnimatePresence, useDragControls } from 'framer-motion'
import React, { useRef, useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'

import { Footer, FooterProps } from './_components/Footer'
import { Header, HeaderProps } from './_components/Header'
import styles from './modal.module.scss'

export type ModalProps = {
  children: React.ReactNode
  modal: NiceModalHandler
  headerProps?: HeaderProps
  footerProps?: FooterProps
  sheet?: boolean
  mobileDraggable?: boolean
  backdropClose?: boolean
  bottomSheet?: boolean
}

export const Modal = ({
  children,
  modal,
  headerProps,
  footerProps,
  sheet = false,
  mobileDraggable = false,
  backdropClose = true,
  bottomSheet = false,
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

  const getInitialStyle = () => {
    const base = { opacity: 0 }
    if (sheet && !isMobile) {
      return { ...base, translateX: 'calc(100% + 0.5rem)' }
    }
    return base
  }

  const getAnimateStyle = () => {
    const base = { opacity: 1 }
    if (sheet && !isMobile) {
      return { ...base, translateX: 0 }
    }
    return base
  }

  return (
    <AnimatePresence onExitComplete={() => modal.remove()}>
      {modal.visible && (
        <motion.div
          className={`${styles.backdrop} ${bottomSheet && styles['bottom-sheet']} ${sheet && !isMobile && styles.sheet}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}>
          <motion.div
            onClick={() => backdropClose && modal.hide()}
            className={styles['backdrop--close-button']}
          />
          {showMobile && mobileDraggable && bottomSheet ? (
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
              transition={{ duration: 0.4, ease: 'easeInOut' }}>
              <div
                className={styles.drag}
                onPointerDown={(event) => controls.start(event)}
                style={{ touchAction: 'none' }}>
                {headerProps && <Header {...headerProps} />}
                <div className={styles.scroll}>
                  <div className={styles.content}>{children}</div>
                </div>
                {footerProps && <Footer {...footerProps} />}
              </div>
            </motion.div>
          ) : (
            <motion.div
              className={`${styles.main}`}
              onDragEnd={handleDragEnd}
              initial={getInitialStyle()}
              animate={getAnimateStyle()}
              exit={getInitialStyle()}
              transition={{ duration: 0.4, ease: 'easeInOut' }}>
              {headerProps && <Header {...headerProps} />}
              <div className={styles.scroll}>
                <div className={styles.content}>{children}</div>
              </div>
              {footerProps && <Footer {...footerProps} />}
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
