'use client';

import { useState } from 'react';
import ShareModal from './ShareModal';

export default function SharePage() {
  const [open, setOpen] = useState(false);

  return (
    <main style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <button onClick={() => setOpen(true)}>Open Share Modal</button>
      <ShareModal open={open} onClose={() => setOpen(false)} />
    </main>
  );
}
