import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import type { AlertColor } from '@mui/material/Alert';

import {
    getSolidDataset,
    getThing,
    setThing,
    getStringNoLocale,
    setStringNoLocale,
    saveSolidDatasetAt
} from "@inrupt/solid-client";
import { Session } from "@inrupt/solid-client-authn-browser";







function Authenticator(): JSX.Element {
    // If your Pod is *not* on `solidcommunity.net`, change this to your identity provider.
    const SOLID_IDENTITY_PROVIDER = "https://solidcommunity.net";
    const session = new Session();
    const buttonLogin = document.getElementById("btnLogin");


    // 1a. Start Login Process. Call session.login() function.
    async function login() {
        if (!session.info.isLoggedIn) {
            await session.login({
                oidcIssuer: SOLID_IDENTITY_PROVIDER,
                redirectUrl: window.location.href
            });
        }else{
            console.log('someone connected!');
        }
    }
 // 1b. Login Redirect. Call session.handleIncomingRedirect() function.
 // When redirected after login, finish the process by retrieving session information.
 async function handleRedirectAfterLogin() {
    await session.handleIncomingRedirect(window.location.href);
    if (session.info.isLoggedIn) {
      // Update the page with the status.
      console.log( session.info);
    }
  }
 
  // The example has the login redirect back to the index.html.
  // This calls the function to process login information.
  // If the function is called when not part of the login redirect, the function is a no-op.
  handleRedirectAfterLogin();

    if(buttonLogin!= null){
        buttonLogin.onclick = function () {
            login();
        };
    }

    return (
        <>
            <section id="login" className="panel">
                <div className="row">
                    <label id="labelLogin" htmlFor="btnLogin"
                    >1. Click the button to log into
                        <span id="solid_identity_provider"
                        >...provided by the JavaScript code...</span>:
                    </label>
                    <button name="btnLogin" id="btnLogin">Login</button>
                    <p id="labelStatus" className="labelStatus"></p>
                </div>
            </section>
        </>
    );
}

export default Authenticator;
