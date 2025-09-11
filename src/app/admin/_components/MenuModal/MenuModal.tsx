'use client'

import NiceModal, { NiceModalHocProps, useModal } from '@ebay/nice-modal-react'
import { clsx } from 'clsx'
import { useRouter } from 'next/navigation'
import React, { FC, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Button, Modal, Icon } from 'uplord-ui'

import styles from './menu-modal.module.scss'

export const MenuModal: FC<NiceModalHocProps> = NiceModal.create(() => {
  const router = useRouter()
  const modal = useModal()
  const isMobile = useMediaQuery({ maxWidth: 743 })

  useEffect(() => {
    document.body.classList.add('stop-scroll')
    document.documentElement.classList.add('stop-scroll')

    return () => {
      document.body.classList.remove('stop-scroll')
      document.documentElement.classList.remove('stop-scroll')
    }
  }, [])

  useEffect(() => {
    if (!isMobile) {
      modal.hide()
    }
  }, [isMobile, modal])

  return (
    <Modal
      modal={modal}
      headerProps={{
        title: 'Menu',
        trailing: (
          <Button
            leadingIcon="X"
            size="sm"
            variant="default"
            onClick={() => modal.hide()}
          />
        ),
        fullscreen: isMobile ? true : '',
      }}
      fullscreen={isMobile ? true : ''}>
      <div className={styles.container}>
        <div className={clsx(styles.menu)}>
          <Button
            size="md"
            variant="anchor"
            hasPadding={false}
            className={styles.button}
            onClick={() => {
              router.push('/admin')
              modal.hide()
            }}>
            <Icon
              name="LayoutDashboard"
              size="md"
            />
            Dashboard
            <Icon
              name="ChevronRight"
              size="md"
              className={styles.icon}
            />
          </Button>
          <Button
            size="md"
            variant="anchor"
            hasPadding={false}
            className={styles.button}
            onClick={() => {
              router.push('/admin/pages')
              modal.hide()
            }}>
            <Icon
              name="StickyNote"
              size="md"
            />
            Pages
            <Icon
              name="ChevronRight"
              size="md"
              className={styles.icon}
            />
          </Button>
        </div>
        <div className={clsx(styles.menu, styles.bottom)}>
          <Button
            size="md"
            variant="anchor"
            hasPadding={false}
            className={styles.button}
            onClick={() => {
              router.push('/admin/profile')
              modal.hide()
            }}>
            <Icon
              name="User"
              size="md"
            />
            Profile
            <Icon
              name="ChevronRight"
              size="md"
              className={styles.icon}
            />
          </Button>
          <Button
            size="md"
            variant="anchor"
            hasPadding={false}
            className={styles.button}
            onClick={() => {
              router.push('/admin/settings')
              modal.hide()
            }}>
            <Icon
              name="Settings"
              size="md"
            />
            Settings
            <Icon
              name="ChevronRight"
              size="md"
              className={styles.icon}
            />
          </Button>
          <Button
            size="md"
            variant="anchor"
            hasPadding={false}
            className={styles.button}
            onClick={() => {
              router.push('/admin/login')
              modal.hide()
            }}>
            <Icon
              name="LogOut"
              size="md"
            />
            Logout
            <Icon
              name="ChevronRight"
              size="md"
              className={styles.icon}
            />
          </Button>
        </div>
      </div>
    </Modal>
  )
})
