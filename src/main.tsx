import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { NhostProvider } from '@nhost/react';
import { nhost } from './lib/nhost';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NhostProvider nhost={nhost}>
      <App />
    </NhostProvider>
  </StrictMode>
);