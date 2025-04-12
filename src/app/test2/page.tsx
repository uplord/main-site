'use client';

import { useState } from 'react';
import ShareModal from './ShareModal';

export default function SharePage() {

  return (
    <main style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <ShareModal />
    </main>
  );
}
