// src/components/CandidatoCard.jsx
import React from 'react';

const CandidatoCard = ({ candidato }) => {
    return (
        <div>
            <h3>{candidato.nombre}</h3>
            <img src={candidato.foto} alt={candidato.nombre} />
            <p>{candidato.descripcion}</p>
        </div>
    );
};

export default CandidatoCard;
