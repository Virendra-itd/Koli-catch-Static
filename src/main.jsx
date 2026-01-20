import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import './App.css';

// Hide loading indicator once React is mounted
const hideLoadingIndicator = () => {
  const loadingIndicator = document.getElementById('loading-indicator');
  if (loadingIndicator) {
    loadingIndicator.classList.add('hidden');
  }
};

// Error handler for React rendering errors
const showError = (error) => {
  const loadingIndicator = document.getElementById('loading-indicator');
  const root = document.getElementById('root');
  
  if (loadingIndicator && root) {
    loadingIndicator.innerHTML = `
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; padding: 20px; text-align: center; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;">
        <div>
          <h1 style="color: #e74c3c; margin-bottom: 1rem; font-size: 2rem;">Error Loading Application</h1>
          <p style="color: rgba(255, 255, 255, 0.9); margin-bottom: 1.5rem; font-size: 1.1rem; max-width: 600px;">
            ${error}
          </p>
          <button 
            onclick="window.location.reload()" 
            style="padding: 12px 24px; background: white; color: #667eea; border: none; border-radius: 5px; cursor: pointer; font-size: 1rem; font-weight: 600; transition: transform 0.2s;"
            onmouseover="this.style.transform='scale(1.05)'" 
            onmouseout="this.style.transform='scale(1)'"
          >
            Refresh Page
          </button>
        </div>
      </div>
    `;
    loadingIndicator.classList.remove('hidden');
  }
  
  console.error('React application error:', error);
};

try {
  const container = document.getElementById('root');
  if (!container) {
    throw new Error('Root element not found');
  }

  const root = createRoot(container);
  
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  // Hide loading indicator after React mounts
  setTimeout(hideLoadingIndicator, 100);
} catch (error) {
  const errorMessage = error instanceof Error ? error.message : String(error);
  showError(`Failed to initialize application: ${errorMessage}`);
}

