'use client'

import React, { useRef, useState, useEffect } from 'react'
import { motion, useDragControls, useMotionValue, useTransform } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'
import { NiceModalHandler } from '@ebay/nice-modal-react'
import { CSSTransition } from 'react-transition-group'
import styles from './modal.module.scss'

import { Header, HeaderProps } from './inc/Header'
import { Footer, FooterProps } from './inc/Footer'
import { Content } from './inc/Content'

export type ModalProps = {
  children: React.ReactNode
  headerProps?: HeaderProps
  footerProps?: FooterProps
  mobileDraggable?: boolean
  modal: NiceModalHandler
}

export const Modal = ({
  children,
  headerProps,
  footerProps,
  mobileDraggable = false,
  modal,
}: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const controls = useDragControls()
  const isMobile = useMediaQuery({ maxWidth: 743 })
  const [showMobile, setShowMobile] = useState(true)
  const [windowHeight, setWindowHeight] = useState(0)
  const [modalSize, setModalSize] = useState('small')

  const dragY = useMotionValue(0)

  const minHeight = windowHeight * 0.6
  const maxHeight = windowHeight

  const height = useTransform(dragY, [0, -maxHeight], [minHeight, maxHeight], { clamp: false })

  useEffect(() => {
    setShowMobile(isMobile)
  }, [isMobile, setShowMobile])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowHeight(window.innerHeight)
    }
  }, [])

  const handleDragEnd = (_, info) => {
    if (info.offset.y < -150 && modalSize === 'small') {
      setModalSize('full'); // Change modal size to 'full'
      dragY.jump(-windowHeight);
    } else if (info.offset.y > 150 && modalSize === 'small') {
      setModalSize('small');
      modal.hide()
    } else if (info.offset.y <= 100 && modalSize === 'small') {
      dragY.jump(0);
    } else if (info.offset.y > 150 && modalSize === 'full') {
      setModalSize('small'); // Change modal size to 'small'
      dragY.jump(0);
    }
  }

  return (
    <CSSTransition
      in={modal.visible}
      onExited={() => modal.remove()}
      classNames={{
        enter: `${styles.enter} ${styles.modal}`,
        enterActive: styles['enter--active'],
        enterDone: `${styles['enter--done']}`,
        exit: `${styles.exit} ${styles.modal}`,
        exitActive: styles['exit--active'],
        exitDone: `${styles['exit--done']}`,
      }}
      nodeRef={ref}
      unmountOnExit
      timeout={600}>
      <div className={styles.backdrop} ref={ref}>
        <button
          onClick={() => {
            modal.hide()
          }}
          className={styles['backdrop--close-button']}
        />
        {showMobile && mobileDraggable ? (
          <motion.div
            className={`${styles.main}`}
            drag="y"
            dragConstraints={{ top: -windowHeight, bottom: 150 }}
            dragElastic={{ top: 0.5, bottom: 0.5 }}
            dragListener={false}
            dragControls={controls}
            style={{
              height,
              y: dragY
            }}
            onDragEnd={handleDragEnd}
          >
            <div className={styles.drag} onPointerDown={event => controls.start(event)} style={{ touchAction: 'none' }}>
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
          </motion.div>
        ) : (
          <Content
            headerProps={headerProps}
            footerProps={footerProps}
            modal={modal}
          >
            {children}
          </Content>
        )}
      </div>
    </CSSTransition>
  )
}