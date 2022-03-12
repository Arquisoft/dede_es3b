import * as React from "react";

export class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <p>© Dedeportes {new Date().getFullYear()}</p>
                <p>Consulta los métodos, plazos y gastos de envío disponibles</p>
            </footer>
        )
    }
}