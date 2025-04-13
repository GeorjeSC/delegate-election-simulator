// src/pages/EstudiantePanel.jsx
import React, { useState } from 'react';

const EstudiantePanel = ({ candidatos }) => {
    const [voto, setVoto] = useState(null);

    const votar = (candidato) => {
        setVoto(candidato);
        candidato.votos += 1;  // Incrementa los votos
    };

    return (
        <div>
            <h2>Panel del Estudiante</h2>
            {candidatos.map((candidato, index) => (
                <div key={index}>
                    <button onClick={() => votar(candidato)}>{candidato.nombre}</button>
                </div>
            ))}
            {voto && <p>Has votado por: {voto.nombre}</p>}
        </div>
    );
};

export default EstudiantePanel;
