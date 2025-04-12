'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import styles from './ShareModal.module.scss';

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function ShareModal({ open, onClose }: Props) {
  const dragY = useMotionValue(0);
  const [windowHeight, setWindowHeight] = useState(0);

  // 60% = initial height, drag up to -40% (full screen)
  const height = useTransform(
    dragY,
    [-windowHeight * 0.4, 0],
    ['100vh', '60vh']
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log('window.innerHeight', window.innerHeight)
      setWindowHeight(window.innerHeight);
    }
  }, []);

  useEffect(() => {
    console.log('windowHeight', windowHeight)
  }, [windowHeight]);

  useEffect(() => {
    const unsubscribe = height.onChange((latestHeight) => {
      console.log('height1', latestHeight);
    });

    return () => unsubscribe();
  }, [height]);

  useEffect(() => {
    console.log(123)
    const unsub = dragY.on('change', (latest) => {
      console.log('latest', latest)
      if (latest > 100) onClose(); // close if dragged down too far
    });
    return () => unsub();
  }, [dragY, onClose]);

  if (typeof window === 'undefined' || !windowHeight) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className={styles.modalWrapper}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <motion.div
              className={styles.modal}
              drag="y"
              dragConstraints={{ top: -windowHeight * 0.4, bottom: 0 }}
              dragElastic={0.2}
              style={{ height, y: dragY }}
            >
              <div className={styles.handle} />
              <div className={styles.icons}>
              </div>
              <button className={styles.cancelButton} onClick={onClose}>
                Cancel
              </button>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
