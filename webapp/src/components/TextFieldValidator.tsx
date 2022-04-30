import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { findAdmin } from '../api/api';
import toast from 'react-hot-toast';

interface State {
    email: string;
    password: string;
}

export default function TextFiedldValidator() {
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [values, setValues] = React.useState<State>({
        email: '',
        password: ''
    });
    let isAdmin = false;
    let start = true;

    const checkIfIsAdmin = async () => {
        isAdmin = await findAdmin(values.email, values.password);
        if (isAdmin) {
            toast('Se cambió', {
                icon: '👏',
            });
        }
    }

    const handleChange =
        (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
            setValues({ ...values, [prop]: event.target.value });
        };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()

        if (start) {
            start = false;
        }
        if (values.email === '') {
            setEmailError(true)
        } else {
            setEmailError(false)
        }
        if (values.password === '') {
            setPasswordError(true)
        } else {
            setPasswordError(false)
        }
        if (!(values.email === 'admin@admin.com') || !(values.password === 'admin')) {
            isAdmin = false;
            toast.error("No eres admin")
        }
        checkIfIsAdmin();
        if (values.email === 'admin@admin.com' && values.password === 'admin') {
            isAdmin = true;
            toast.success("Eres admin");
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
                    onChange={handleChange('email')}
                    value={values.email}
                    id="outlined-error-helper-text"
                    label="Email"
                    required
                    error={emailError || (!start && !isAdmin)}
                />
                <TextField
                    type='password'
                    value={values.password}
                    onChange={handleChange('password')}
                    label="Password"
                    id="outlined-error-helper-text"
                    required
                    error={passwordError || (!start && !isAdmin)}
                />
            </div>
            <Button onClick={(e) => handleSubmit(e)}
                type="submit">
                Login
            </Button>
        </Box>
    );
}