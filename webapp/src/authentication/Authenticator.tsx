import { useState } from "react";
import LoginForm from "./LoginForm"
import ProfileViewer from "./ProfileViewer"
import { SessionProvider, useSession } from "@inrupt/solid-ui-react";
import { ProductCart, Order } from '../shared/shareddtypes';



//function Authenticator(props: any): JSX.Element
type ReviewType = {
    setPrecio: (precio: number)=> void;
    pedido: Order;
  }
  
  const Authenticator: React.FC<ReviewType>= ({setPrecio, pedido}) =>

 {
    //We use this state variable
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    //With this we can control the login status for solid
    const { session } = useSession();

    //We have logged in
    session.onLogin(() => {
        setIsLoggedIn(true)
    })

    //We have logged out
    session.onLogout(() => {
        setIsLoggedIn(false)
    })

    return (
        <>
            <SessionProvider sessionId="log-in-example">
                {(!isLoggedIn) ? <LoginForm /> : <ProfileViewer setPrecio={setPrecio} pedido={pedido}/>}
            </SessionProvider>
        </>
    );
}

export default Authenticator;
