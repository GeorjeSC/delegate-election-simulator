// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Si tienes algún archivo CSS global, sino puedes eliminar esta línea
import App from './App'; // Componente principal de tu aplicación
import { ElectionProvider } from './context/ElectionContext'; // Si estás usando contexto para el estado global

ReactDOM.render(
    <ElectionProvider>
        <App />
    </ElectionProvider>,
    document.getElementById('root') // Este es el contenedor donde React renderiza la app
);
