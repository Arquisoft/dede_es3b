import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import toast from 'react-hot-toast';
import { findByEmail } from '../../api/api';

type ReviewType = {
    setLoggedAdmin: (admin: boolean) => void;
}

interface State {
    email: string;
    password: string;
}
const crypto = require("crypto");

const TextFiedldValidator: React.FC<ReviewType> = ({ setLoggedAdmin }) => {
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [values, setValues] = React.useState<State>({
        email: '',
        password: ''
    });
    let isAdmin = false;
    let start = true;

    const checkIfIsAdmin = async () => {
        let admin = findByEmail("admin@admin.com");
        const pass = values.password//crypto.createHmac('sha256', values.password).digest('hex');

        if (pass === (await admin).password) {
            isAdmin = true;
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
        if (values.email === 'admin@admin.com' && values.password === 'admin') {
            isAdmin = true;
            //toast.success("Eres admin");
        }

        //checkIfIsAdmin();
        if (isAdmin) {
            toast.success("Eres admin");
            localStorage.setItem("loggedAsAdmin", 'true');
        }
        setLoggedAdmin(isAdmin);
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
                    id="email"
                    onChange={handleChange('email')}
                    value={values.email}
                    label="Email"
                    required
                    error={emailError || (!start && !isAdmin)}
                />
                <TextField
                    id="password"
                    type='password'
                    value={values.password}
                    onChange={handleChange('password')}
                    label="Password"

                    required
                    error={passwordError || (!start && !isAdmin)}
                />
            </div>
            <Button onClick={(e) => handleSubmit(e)}
                type="submit"
                variant='contained'>
                Login
            </Button>
        </Box>
    );
}

export default TextFiedldValidator;