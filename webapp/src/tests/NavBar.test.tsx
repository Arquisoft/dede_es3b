import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import NavBar from "../components/generalComponents/NavBar";

test("The navBar is rendered", async () => {

    const navBar = render(
        <NavBar props={[]} remove={() => { }} precio={() => { return 0; }} aumentar={() => { }} reducir={() => { }}></NavBar>
    );

    expect(screen.getByAltText('dedeportes')).toBeInTheDocument();
    expect(screen.getByAltText('Ver carrito')).toBeInTheDocument();

    expect(navBar.container).toHaveTextContent('Productos');
    expect(navBar.container).toHaveTextContent('Mi perfil');

    var button = navBar.getByTestId('carrito') as HTMLElement;
    fireEvent.click(button);

    expect(screen.getByText('No hay productos en el carrito')).toBeInTheDocument();

    button = navBar.getByText('Productos') as HTMLElement;
    fireEvent.click(button);

    expect(navBar.getByText('Todos los productos')).toBeInTheDocument()
    expect(navBar.getByText('Raquetas')).toBeInTheDocument()
    expect(navBar.getByText('Pelotas')).toBeInTheDocument()

    button = navBar.getByText('Mi perfil') as HTMLElement;
    fireEvent.click(button);

    expect(navBar.getByText('Iniciar sesión')).toBeInTheDocument()
    expect(navBar.getByText('Ver pedidos')).toBeInTheDocument()
});