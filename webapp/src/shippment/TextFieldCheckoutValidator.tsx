import Box from '@mui/material/Box';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import toast from 'react-hot-toast';
import { findByEmail } from '../api/api';

interface State {
    nombre: string;
    apellidos: string;
}

type ReviewType = {
    errores: (error: boolean) => void;
}

const TextFieldCheckoutValidator: React.FC<ReviewType> = ({ errores }) =>  {
    const [emailError, setEmailError] = useState(true)
    const [passwordError, setPasswordError] = useState(true)
    const [values, setValues] = React.useState<State>({
        nombre: '',
        apellidos: ''
    });

    let isAdmin = false;
    let start = true;

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
        }

        if (values.apellidos === '') {
            setPasswordError(true)
        } else {
            setPasswordError(false)
        }

        if(emailError || passwordError){
            toast.error("Introduce los campos obligatorios");
            errores(true);
        }else
            errores(false);
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