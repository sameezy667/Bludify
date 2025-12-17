/**
 * index.tsx
 * 
 * Application entry point that renders the root React component.
 * Initializes the React application and mounts it to the DOM.
 * 
 * Responsibilities:
 * - Find and validate the root DOM element
 * - Create React root with createRoot API (React 18+)
 * - Render the App component with StrictMode for development checks
 * 
 * Dependencies:
 * - React 19.2.3: Core React library
 * - ReactDOM: DOM rendering for React
 * - App: Root application component
 * 
 * NOTE: StrictMode is enabled for development to catch potential issues
 * FIXME: Consider adding error boundary at this level
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/**
 * Find the root DOM element where React will mount.
 * Throws an error if element is not found to prevent silent failures.
 */
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);