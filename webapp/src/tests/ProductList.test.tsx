import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import { Product } from "../shared/shareddtypes";
import ProductList from "../components/products/ProductList";

test("A list of products is rendered", async () => {

    const products: Product[] = [
        {
            id: '1',
            category: 'Ropa',
            name: 'Chaqueta',
            description: 'Para abrigarse',
            price: 90,
            img: ""
        },
        {
            id: '2',
            category: 'Material',
            name: 'Pelota',
            description: 'Para jugar',
            price: 2,
            img: ""
        },
        {
            id: '3',
            category: 'Material',
            name: 'Pala de pádel',
            description: 'Para jugar al pádel',
            price: 265,
            img: ""
        },
        {
            id: '4',
            category: 'Ropa',
            name: 'Pantalón',
            description: 'Para vestirse',
            price: 45,
            img: ""
        },
        {
            id: '5',
            category: 'Material',
            name: 'Balón',
            description: 'Para jugar al fútbol',
            price: 25,
            img: ""
        },
        {
            id: '6',
            category: 'Material',
            name: 'Guantes',
            description: 'Para parar golitos',
            price: 34,
            img: ""
        }
    ]

    const components = render(
        <ProductList props={products} add={() => { }}></ProductList>
    );

    expect(components.container).toHaveTextContent('Chaqueta');
    expect(components.container).toHaveTextContent('Para abrigarse');
    expect(components.container).toHaveTextContent('90');

    expect(components.container).toHaveTextContent('Pelota');
    expect(components.container).toHaveTextContent('Para jugar');
    expect(components.container).toHaveTextContent('2');

    expect(components.container).toHaveTextContent('Pala de pádel');
    expect(components.container).toHaveTextContent('Para jugar al pádel');
    expect(components.container).toHaveTextContent('265');

    expect(components.container).toHaveTextContent('Pantalón');
    expect(components.container).toHaveTextContent('Para vestirse');
    expect(components.container).toHaveTextContent('45');

    expect(components.container).toHaveTextContent('Balón');
    expect(components.container).toHaveTextContent('Para jugar al fútbol');
    expect(components.container).toHaveTextContent('25');

    expect(components.container).toHaveTextContent('Guantes');
    expect(components.container).toHaveTextContent('Para parar golitos');
    expect(components.container).toHaveTextContent('34');
});