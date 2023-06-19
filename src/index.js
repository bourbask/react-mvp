import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import Hello from "./components/Hello";


var destination = document.querySelector('#container');

const root = createRoot(destination);

root.render(
    <Hello name='Kévin' />
);
