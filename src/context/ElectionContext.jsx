// src/context/ElectionContext.jsx
import React, { createContext, useState, useContext } from 'react';

const ElectionContext = createContext();

export const useElection = () => useContext(ElectionContext);

export const ElectionProvider = ({ children }) => {
    const [candidatos, setCandidatos] = useState([]);
    const [resultados, setResultados] = useState([]);

    const agregarCandidato = (nombre) => {
        setCandidatos([...candidatos, { nombre, votos: 0 }]);
    };

    const registrarVoto = (nombre) => {
        const updatedCandidatos = candidatos.map(candidato =>
            candidato.nombre === nombre ? { ...candidato, votos: candidato.votos + 1 } : candidato
        );
        setCandidatos(updatedCandidatos);
    };

    return (
        <ElectionContext.Provider value={{ candidatos, resultados, agregarCandidato, registrarVoto }}>
            {children}
        </ElectionContext.Provider>
    );
};
