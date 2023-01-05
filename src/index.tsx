import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <div>Hello Eslint HTML sample</div>
  </React.StrictMode>
);
