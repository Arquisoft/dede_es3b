import { fireEvent, render } from "@testing-library/react";
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


test("A product on the cart has aumented its quantity", async () => {

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
        <ProductCartItem props={product} remove={() => { }} aumentar={ (clicked:ProductCart) => { product.quantity+=1;}} reducir={(id:string)=>{product.quantity-=1;}}></ProductCartItem>
    );

    expect(components.container).toHaveTextContent('Chaqueta');
    expect(components.container).toHaveTextContent('Para abrigarse');
    expect(components.container).toHaveTextContent('90');
    expect(components.container).toHaveTextContent('5');

    const button = components.container.querySelector('button:nth-child(1)') as HTMLElement;
    fireEvent.click(button);

    components.rerender(
        <ProductCartItem props={product} remove={() => { }} aumentar={ (clicked:ProductCart) => {}} reducir={(id:string)=>{}}></ProductCartItem>
    );

    expect(components.container).toHaveTextContent('6');
});

test("A product on the cart has decreased its quantity", async () => {

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
        <ProductCartItem props={product} remove={() => { }} aumentar={ (clicked:ProductCart) => { product.quantity+=1;}} reducir={(id:string)=>{product.quantity-=1;}}></ProductCartItem>
    );

    expect(components.container).toHaveTextContent('Chaqueta');
    expect(components.container).toHaveTextContent('Para abrigarse');
    expect(components.container).toHaveTextContent('90');
    expect(components.container).toHaveTextContent('5');

    const button = components.container.querySelector('button:nth-child(3)') as HTMLElement;
    fireEvent.click(button);

    components.rerender(
        <ProductCartItem props={product} remove={() => { }} aumentar={ (clicked:ProductCart) => {}} reducir={(id:string)=>{}}></ProductCartItem>
    );

    expect(components.container).toHaveTextContent('4');
});