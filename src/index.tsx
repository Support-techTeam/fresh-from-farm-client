import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { StoreProvider } from './context/StoreContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const canonicalUrl = document.querySelector(
  'link[rel="canonical"]',
) as HTMLLinkElement;
if (canonicalUrl) {
  canonicalUrl.href = window.location.href;
}

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <StoreProvider>
        <App />
      </StoreProvider>
    </HelmetProvider>
  </React.StrictMode>,
);
