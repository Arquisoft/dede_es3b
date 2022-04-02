import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import { ProductCart } from "../shared/shareddtypes";
import ProductCartItem from "../components/carrito/ProductCartItem";

test("A product on the cart is rendered", async () => {

    const product: ProductCart =
    {
        id: '1',
        category: 'Ropa',
        name: 'Chaqueta',
        description: 'Para abrigarse',
        price: 90,
        img: "",
        quantity: 5
    }

    const components = render(
        <ProductCartItem props={product} remove={() => { }} aumentar={ (clicked:ProductCart) => {}} reducir={(id:string)=>{}}></ProductCartItem>
    );

    expect(components.container).toHaveTextContent('Chaqueta');
    expect(components.container).toHaveTextContent('Para abrigarse');
    expect(components.container).toHaveTextContent('90');
    expect(components.container).toHaveTextContent('5');
});