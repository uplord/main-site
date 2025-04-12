'use client';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence, useMotionValue, useTransform, useMotionValueEvent } from 'framer-motion';
import styles from './ShareModal.module.scss';

export default function ShareModal() {
  const [windowHeight, setWindowHeight] = useState(0);
  const [modalSize, setModalSize] = useState('small');
  const dragY = useMotionValue(0);

  const minHeight = windowHeight * 0.6; // Set the minimum height to 20% of the window height
  const maxHeight = windowHeight - 32; // Max height can be a percentage of the window height
  console.log('windowHeight', windowHeight)
  console.log('maxHeight', maxHeight)

  const height = useTransform(dragY, [0, -maxHeight], [minHeight, maxHeight], { clamp: false });

  const handleDragEnd = (_, info) => {
    // When dragging ends, update modal size and set the height accordingly
    if (info.offset.y < -150 && modalSize === 'small') {
      setModalSize('full'); // Change modal size to 'full'
      dragY.jump(-windowHeight);
    } else if (info.offset.y > 150 && modalSize === 'small') {
      setModalSize('small');
      console.log('CLOSE')
    } else if (info.offset.y <= 100 && modalSize === 'small') {
      dragY.jump(0);
    } else if (info.offset.y > 150 && modalSize === 'full') {
      setModalSize('small'); // Change modal size to 'small'
      dragY.jump(0);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowHeight(window.innerHeight);
    }
  }, []);

  if (typeof window === 'undefined' || !windowHeight) return null;

  return createPortal(
    <AnimatePresence>
      <div className={styles.wrap}>
        <motion.div
          className={styles.modal}
          drag="y"
          dragConstraints={{ top: -windowHeight, bottom: 150 }} // Set the top constraint to the remaining space above the modal
          dragElastic={0.2}
          style={{ height, y: dragY }}
          onDragEnd={handleDragEnd} // Add drag end handler
        >
          Modal
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
}
