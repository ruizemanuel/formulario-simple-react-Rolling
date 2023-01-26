import React, { useRef, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../styles.css'
import { validarGeneral } from "../helpers/validaciones.js";
import Estado from '../components/Estado';

const Formulario = () => {

    const refNombre = useRef(null);
    const refApellido = useRef(null);
    const refDNI = useRef(null);
    const refEmail = useRef(null);

    const [habilitada, setHabilitada] = useState(true);
    const [mostrar, setMostrar] = useState(false);

    const handleSubmit = (e) => {
        setMostrar(true)
        e.preventDefault();
        if (
            validarGeneral(
                refNombre.current,
                refApellido.current,
                refDNI.current,
                refEmail.current,
            )
        ) {
            setHabilitada(true)
        } else {
            setHabilitada(false)
        }

    }

    return (
        <div className='color mt-5'>
            <p className='text-center text-light h4'>Formulario</p>

            <Form className='ms-5' onSubmit={handleSubmit}>

                <Form.Group className="mb-3">
                    <Form.Label className='text-light fw-bold'>Nombre</Form.Label>
                    <Form.Control ref={refNombre} className='formWidth' type="text" placeholder="Ingresar nombre" maxLength={20} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className='text-light fw-bold' >Apellido</Form.Label>
                    <Form.Control ref={refApellido} className='formWidth' type="text" placeholder="Ingresar apellido" maxLength={20} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className='text-light fw-bold' >DNI</Form.Label>
                    <Form.Control ref={refDNI} className='formWidth' type="number" placeholder="Ingresar DNI" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className='text-light fw-bold' >Email</Form.Label>
                    <Form.Control ref={refEmail} className='formWidth' type="email" placeholder="Ingresar email" />
                </Form.Group>

                <Button className='mb-3' variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            {mostrar ? <Estado estado={habilitada}></Estado> : null}
        </div>
    );
};

export default Formulario;