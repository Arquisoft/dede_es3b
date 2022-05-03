/* istanbul ignore file */
import Box from '@mui/material/Box';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import toast from 'react-hot-toast';
import { findByEmail } from '../api/api';
import { ProductCart, Order } from '../shared/shareddtypes';

interface State {
    nombre: string;
    apellidos: string;
}

type ReviewType = {
    errores: (error: boolean) => void;
    pedido: Order;
}

const TextFieldCheckoutValidator: React.FC<ReviewType> = ({ errores, pedido }) =>  {
    const [emailError, setEmailError] = useState(true)
    const [passwordError, setPasswordError] = useState(true)
    const [values, setValues] = React.useState<State>({
        nombre: '',
        apellidos: ''
    });

    let isAdmin = false;
    let start = true;

    useEffect(() => {
        const nombrePersistente = localStorage.getItem("nombre");
        const apellidosPersistente = localStorage.getItem("apellidos");
        if (nombrePersistente) {
            let nombre: string = nombrePersistente;
            values.nombre = nombre;
            setEmailError(false);
            pedido.name = nombre;
        }

        if (apellidosPersistente) {
            let apellidos: string = apellidosPersistente;
            values.apellidos = apellidos;
            setPasswordError(false);
            pedido.surname = apellidos;
        }
        
        
    }, []);

    const handleChange =
        (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
            setValues({ ...values, [prop]: event.target.value });
        };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()

        if (start) {
            start = false;
        }
        if (values.nombre === '') {
            setEmailError(true)
        } else {
            setEmailError(false)
            pedido.name = values.nombre;
        }

        if (values.apellidos === '') {
            setPasswordError(true)
        } else {
            setPasswordError(false)
            pedido.surname = values.apellidos;
        }

        if(emailError || passwordError){
            toast.error("Introduce los campos obligatorios");
            errores(true);
        }else{
            toast.success("Campos obligatorios introducidos");
            errores(false);

            localStorage.setItem("nombre", values.nombre);
            localStorage.setItem("apellidos", values.apellidos);
        }
    }

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    onChange={handleChange('nombre')}
                    value={values.nombre}
                    id="outlined-error-helper-text"
                    label="Nombre"
                    required
                    error={emailError || (!start && !isAdmin)}
                />
                <TextField
                    value={values.apellidos}
                    onChange={handleChange('apellidos')}
                    label="Apellidos"
                    id="outlined-error-helper-text"
                    required
                    error={passwordError || (!start && !isAdmin)}
                />
            </div>
            <Button onClick={(e) => handleSubmit(e)}
                type="submit"
                variant='contained'>
                Validar
            </Button>
        </Box>
    );
}

export default TextFieldCheckoutValidator