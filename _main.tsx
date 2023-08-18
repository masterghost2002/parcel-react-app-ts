import {createRoot} from 'react-dom/client';
import React from 'react';
import App from './src/App';
const app = document.getElementById('app');
const root = createRoot(app);
root.render(<App/>)