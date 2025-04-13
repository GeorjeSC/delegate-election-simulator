// src/pages/DocentePanel.jsx
import React, { useState } from 'react';

const DocentePanel = () => {
    const [candidatos, setCandidatos] = useState([]);
    const [resultado, setResultado] = useState([]);

    const agregarCandidato = (nombre) => {
        setCandidatos([...candidatos, { nombre, votos: 0 }]);
    };

    const verResultados = () => {
        setResultado(candidatos);
    };

    return (
        <div>
            <h2>Panel del Docente</h2>
            <button onClick={() => agregarCandidato('Candidato 1')}>Agregar Candidato</button>
            <button onClick={verResultados}>Ver Resultados</button>
            <div>
                {candidatos.map((candidato, index) => (
                    <div key={index}>
                        <h3>{candidato.nombre}</h3>
                        <p>Votos: {candidato.votos}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DocentePanel;
