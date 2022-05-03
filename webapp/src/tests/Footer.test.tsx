import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import { Footer } from "../components/generalComponents/Footer";

test("The footer is rendered", async () => {

    const footer = render(
        <Footer></Footer>
    );

    expect(footer.container).toHaveTextContent('© Dedeportes 2022');
    expect(footer.container).toHaveTextContent('Consulta los métodos, plazos y gastos de envío disponibles');
});