import React from 'react';
import { Alert } from 'react-bootstrap';

const Estado = ({ estado }) => {
    return (
        <div>
            {estado ? <Alert variant="info">
                Datos enviados
            </Alert> : <Alert variant="danger">
                Completar todos los datos
            </Alert>}
        </div>
    );
};

export default Estado;
