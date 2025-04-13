// src/components/RoleSelection.jsx
import React from 'react';
import { useHistory } from 'react-router-dom';

const RoleSelection = () => {
    const history = useHistory();

    const handleRoleSelect = (role) => {
        // Redirigir al panel correspondiente
        if (role === 'docente') {
            history.push('/docente');
        } else {
            history.push('/estudiante');
        }
    };

    return (
        <div>
            <h2>¿Quién eres?</h2>
            <button onClick={() => handleRoleSelect('docente')}>Docente</button>
            <button onClick={() => handleRoleSelect('estudiante')}>Estudiante</button>
        </div>
    );
};

export default RoleSelection;
