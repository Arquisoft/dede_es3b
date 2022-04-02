import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import { ProductCart } from "../shared/shareddtypes";
import ProductCartList from "../components/carrito/ProductCartList";

test("A list of products on the cart is rendered", async () => {

    const products: ProductCart[] = [
        {
            id: '2',
            category: 'Material',
            name: 'Pelota',
            description: 'Para jugar',
            price: 2,
            img: "",
            quantity: 5
        },
        {
            id: '3',
            category: 'Material',
            name: 'Pala de pádel',
            description: 'Para jugar al pádel',
            price: 265,
            img: "",
            quantity: 10
        },
        {
            id: '4',
            category: 'Ropa',
            name: 'Pantalón',
            description: 'Para vestirse',
            price: 45,
            img: "",
            quantity: 2
        },
        {
            id: '6',
            category: 'Material',
            name: 'Guantes',
            description: 'Para parar golitos',
            price: 34,
            img: "",
            quantity: 1
        }
    ]

    const components = render(
        <ProductCartList productos={products} remove={() => { }} precio={() => 0} aumentar={ (clicked:ProductCart) => {}} reducir={(id:string)=>{}}></ProductCartList>
    );

    expect(components.container).toHaveTextContent('Pelota');
    expect(components.container).toHaveTextContent('Para jugar');
    expect(components.container).toHaveTextContent('2');
    expect(components.container).toHaveTextContent('5');

    expect(components.container).toHaveTextContent('Pala de pádel');
    expect(components.container).toHaveTextContent('Para jugar al pádel');
    expect(components.container).toHaveTextContent('265');
    
    expect(components.container).toHaveTextContent('Pantalón');
    expect(components.container).toHaveTextContent('Para vestirse');
    expect(components.container).toHaveTextContent('45');
   
    
    expect(components.container).toHaveTextContent('Guantes');
    expect(components.container).toHaveTextContent('Para parar golitos');
    expect(components.container).toHaveTextContent('34');
    
});