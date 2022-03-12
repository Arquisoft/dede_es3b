
import Container from '@mui/material/Container';

import './App.css';
import Checkout from './shippment/CheckOut';

function App(): JSX.Element {


  return (
    <>
      <Container maxWidth="sm">
        <Checkout></Checkout>
      </Container>
    </>
  );
}

export default App;
