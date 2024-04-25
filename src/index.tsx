import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';

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
      <App />
    </HelmetProvider>
  </React.StrictMode>,
);
