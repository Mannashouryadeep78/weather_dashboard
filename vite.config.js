// vite.config.js

import react from 'react';
import reactDom from 'react-dom';

export default {
  build: {
    rollupOptions: {
      external: [react, reactDom]
    }
  }
}