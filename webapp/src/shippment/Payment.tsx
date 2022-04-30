import * as React from 'react';
import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import toast from 'react-hot-toast';
import { ProductCart, Order } from '../shared/shareddtypes';
import { Button } from '@mui/material';

type ReviewType = {
  precioEnvio: number;
  precioCarrito: number;
  errores: (errores:boolean) => void;
  pedido: Order;
}

interface State {
  nombre: string;
  apellidos: string;
  numeroTarjeta: number;
  fechaExpiracion: string;
}

const PaymentForm: React.FC<ReviewType>= ({precioEnvio, precioCarrito, errores, pedido}) => {
  const [nombreError, setNombreError] = useState(true)
  const [apellidosError, setApellidosError] = useState(true)
  const [tarjetaError, setTarjetaError] = useState(true)
  const [fechaError, setFechaError] = useState(true)

  const [values, setValues] = React.useState<State>({
      nombre: '',
      apellidos: '',
      numeroTarjeta: 0,
      fechaExpiracion: ''
  });

  let start = true;

  useEffect(() => {
    const nombrePersistente = localStorage.getItem("nombre");
    const apellidosPersistente = localStorage.getItem("apellidos");
    if (nombrePersistente) {
        let nombre: string = nombrePersistente;
        values.nombre = nombre;
        setNombreError(false);
    }

    if (apellidosPersistente) {
        let apellidos: string = apellidosPersistente;
        values.nombre += ' '+apellidos;
        setApellidosError(false);
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
      setNombreError(true)
    } else {
      setNombreError(false)
    }

    if (values.apellidos === '') {
      setApellidosError(true)
    } else {
      setApellidosError(false)
    }

    if(nombreError || apellidosError){
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
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            onChange={handleChange('nombre')}
            value={values.nombre}
            id="outlined-error-helper-text"
            required
            error={nombreError || (!start)}
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            onChange={handleChange('nombre')}
            value={values.nombre}
            id="outlined-error-helper-text"
            error={apellidosError || (!start)}
            required
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            onChange={handleChange('nombre')}
            value={values.nombre}
            id="outlined-error-helper-text"
            error={tarjetaError || (!start)}
            required
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            onChange={handleChange('nombre')}
            value={values.nombre}
            id="outlined-error-helper-text"
            error={fechaError || (!start)}
            required
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          />
        </Grid>
        
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>

        <Grid item xs={12}>
          <Button onClick={(e) => handleSubmit(e)}
                type="submit"
                variant='contained'>
                Validar
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default PaymentForm;