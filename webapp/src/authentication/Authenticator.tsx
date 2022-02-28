import { useState } from "react";
import LoginForm from "./LoginForm"
import ProfileViewer from "./ProfileViewer"
import { SessionProvider, useSession } from "@inrupt/solid-ui-react";





function Authenticator(): JSX.Element {
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
                {(!isLoggedIn) ? <LoginForm /> : <ProfileViewer />}
            </SessionProvider>
        </>
    );
}

export default Authenticator;
