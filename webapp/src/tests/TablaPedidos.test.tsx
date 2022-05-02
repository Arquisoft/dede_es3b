import { fireEvent, render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import { Order, OrderProduct, Product } from "../shared/shareddtypes";
import ProductList from "../components/products/ProductList";
import ProductItem from "../components/products/ProductItem";
import VistaPedidoYProductos from "../components/pedidos/VistaPedidoYProductos";
import VistaPedidos from "../components/pedidos/VistaPedidos";

test("The order table is rendered", async () => {

    const order1: Order =
    {
        id: '1',
        dni: '12a',
        name: 'Pedro',
        surname: 'Díaz',
        email: 'pedro@email.com',
        creditcard_number: '1234567812345678',
        expiration_date: '24/04/2023',
        price: 180,
        pod_direction: 'Avenida Constitución, 2, 4º A, Gijón, Asturias'
    }
    const order2: Order =
    {
        id: '2',
        dni: '34b',
        name: 'Nacho',
        surname: 'Méndez',
        email: 'nacho@email.com',
        creditcard_number: '3456789034567890',
        expiration_date: '25/05/2023',
        price: 40,
        pod_direction: 'Calle Magnus Blickstad, 4, 7º C, Gijón, Asturias'
    }

    let orders: Order[] = [order1, order2];

    const components = render(
        <VistaPedidos orders={orders}></VistaPedidos>
    );

    expect(components.container).toHaveTextContent('Pedro');
    expect(components.container).toHaveTextContent('Díaz');
    expect(components.container).toHaveTextContent('Avenida Constitución, 2, 4º A, Gijón, Asturias');
    expect(components.container).toHaveTextContent('180');
    expect(components.container).toHaveTextContent('Nacho');
    expect(components.container).toHaveTextContent('Méndez');
    expect(components.container).toHaveTextContent('Calle Magnus Blickstad, 4, 7º C, Gijón, Asturias');
    expect(components.container).toHaveTextContent('40');

    const button = components.getByTestId('expand1') as HTMLElement;
    fireEvent.click(button);

    expect(components.container).toHaveTextContent('Productos');
    expect(components.container).toHaveTextContent('Nombre');
    expect(components.container).toHaveTextContent('Cantidad');
    expect(components.container).toHaveTextContent('Precio ud.');
});