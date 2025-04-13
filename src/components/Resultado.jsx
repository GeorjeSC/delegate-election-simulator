// src/components/Resultado.jsx
import React from 'react';

const Resultado = ({ resultado }) => {
    return (
        <div>
            <h2>Resultados de la Elección</h2>
            {resultado.map((candidato, index) => (
                <div key={index}>
                    <h3>{candidato.nombre}</h3>
                    <p>Votos: {candidato.votos}</p>
                </div>
            ))}
        </div>
    );
};

export default Resultado;
