import { fireEvent, render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import { Product, ProductCart } from "../shared/shareddtypes";
import ProductCartList from "../components/carrito/ProductCartList";
import { useState } from "react";
import ProductList from "../components/products/ProductList";
import { assert } from "console";
import { Grid } from "@mui/material";

test("A list of products on the cart is rendered", async () => {

    //console.log('Aquí empieza el primero')
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
        <ProductCartList productos={products} remove={() => { }} precio={() => 0} aumentar={(clicked: ProductCart) => { }} reducir={(id: string) => { }}></ProductCartList>
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
    //console.log('Aquí acaba el primero')
});

test("A product is added to the cart", async () => {

    //console.log('Aquí empieza el segundo')
    const product: Product[] = [
        {
            id: '1',
            category: 'Ropa',
            name: 'Chaqueta',
            description: 'Para abrigarse',
            price: 90,
            img: ""
        }]

    const carrito: ProductCart[] = [];
    const addToCart = (p: Product) => { carrito.push({ ...p, quantity: 1 }) };

    const components = render(
        <Grid>
            <ProductList props={product} add={addToCart}></ProductList>
            <ProductCartList
                productos={carrito}
                remove={() => { }}
                precio={() => 0}
                aumentar={(clicked: ProductCart) => { }}
                reducir={(id: string) => { }}>
            </ProductCartList>
        </Grid>
    );

    expect(components.container).toHaveTextContent('No hay productos en el carrito');
    const button = components.container.querySelector('button') as HTMLElement;
    fireEvent.click(button);

    components.rerender(
        <Grid>
            <ProductList props={product} add={addToCart}></ProductList>
            <ProductCartList
                productos={carrito}
                remove={() => { }}
                precio={() => 0}
                aumentar={(clicked: ProductCart) => { }}
                reducir={(id: string) => { }}>
            </ProductCartList>
        </Grid>
    );

    expect(components.container).toHaveTextContent('1');
    expect(components.container).toHaveTextContent('Remove');
    //console.log('Aquí acaba el segundo')
});

test("A product is removed to the cart", async () => {

    //console.log('Aquí empieza el tercero')
    const product: Product[] = [
        {
            id: '1',
            category: 'Ropa',
            name: 'Chaqueta',
            description: 'Para abrigarse',
            price: 90,
            img: ""
        }]

    const carrito: ProductCart[] = [];
    const addToCart = (p: Product) => { carrito.push({ ...p, quantity: 1 }) };
    const remove = (id: string) => { carrito.pop() };

    const components = render(
        <Grid>
            <ProductList props={product} add={addToCart}></ProductList>
            <ProductCartList
                productos={carrito}
                remove={remove}
                precio={() => 0}
                aumentar={(clicked: ProductCart) => { }}
                reducir={remove}>
            </ProductCartList>
        </Grid>
    );

    expect(components.container).toHaveTextContent('No hay productos en el carrito');
    const button = components.getByTestId('add') as HTMLElement;
    fireEvent.click(button);

    components.rerender(
        <Grid>
            <ProductList props={product} add={addToCart}></ProductList>
            <ProductCartList
                productos={carrito}
                remove={remove}
                precio={() => 0}
                aumentar={(clicked: ProductCart) => { }}
                reducir={remove}>
            </ProductCartList>
        </Grid>
    );

    expect(components.container).toHaveTextContent('1');
    expect(components.container).toHaveTextContent('Remove');

    const button2 = components.getByTestId('remove') as HTMLElement;
    fireEvent.click(button2);

    components.rerender(
        <Grid>
            <ProductList props={product} add={addToCart}></ProductList>
            <ProductCartList
                productos={carrito}
                remove={remove}
                precio={() => 0}
                aumentar={(clicked: ProductCart) => { }}
                reducir={remove}>
            </ProductCartList>
        </Grid>
    );

    expect(components.container).toHaveTextContent('No hay productos en el carrito');
    //console.log('Aquí acaba el tercero')
});


test("A product on the cart has aumented its quantity", async () => {

    const product: Product[] = [
        {
            id: '1',
            category: 'Ropa',
            name: 'Chaqueta',
            description: 'Para abrigarse',
            price: 90,
            img: ""
        }]

    var carrito: ProductCart[] = [];
    const addToCart = (p: Product) => { carrito.push({ ...p, quantity: 1 }) };
    const remove = (id: string) => { carrito.pop() };
    const aumentar = (clickedItem: Product) => 
    { 
        carrito = carrito.reduce(
            (coleccion, p) => {
                if (p.id === clickedItem.id) {
                    p.quantity++;
                    return [...coleccion, p];
                }
                return [...coleccion, p];
                }
                , [] as ProductCart[]
        );
    };
    const reducir = (id: string) => 
    {
        carrito = carrito.reduce(
            (coleccion, p) => {
                if (p.id === id) {
                    if (p.quantity > 1) {
                    p.quantity--;
                    return [...coleccion, p];
                    }
                    else
                    return coleccion;
                }
                return [...coleccion, p];
                }
                , [] as ProductCart[]
            )
    }

    const components = render(
        <Grid>
            <ProductList props={product} add={addToCart}></ProductList>
            <ProductCartList
                productos={carrito}
                remove={remove}
                precio={() => 0}
                aumentar={aumentar}
                reducir={reducir}>
            </ProductCartList>
        </Grid>
    );

    expect(components.container).toHaveTextContent('No hay productos en el carrito');
    const button = components.getByTestId('add') as HTMLElement;
    fireEvent.click(button);

    components.rerender(
        <Grid>
            <ProductList props={product} add={addToCart}></ProductList>
            <ProductCartList
                productos={carrito}
                remove={remove}
                precio={() => 0}
                aumentar={aumentar}
                reducir={reducir}>
            </ProductCartList>
        </Grid>
    );

    expect(components.container).toHaveTextContent('1');
    expect(components.container).toHaveTextContent('Remove');

    const button2 = components.getByTestId('aumentar') as HTMLElement;
    fireEvent.click(button2);

    components.rerender(
        <Grid>
            <ProductList props={product} add={addToCart}></ProductList>
            <ProductCartList
                productos={carrito}
                remove={remove}
                precio={() => 0}
                aumentar={aumentar}
                reducir={reducir}>
            </ProductCartList>
        </Grid>
    );

    expect(components.container).toHaveTextContent('2');
});

test("A product on the cart has reduce its quantity", async () => {

    const product: Product[] = [
        {
            id: '1',
            category: 'Ropa',
            name: 'Chaqueta',
            description: 'Para abrigarse',
            price: 90,
            img: ""
        }]

    var carrito: ProductCart[] = [];
    const addToCart = (p: Product) => { carrito.push({ ...p, quantity: 1 }) };
    const remove = (id: string) => { carrito.pop() };
    const aumentar = (clickedItem: Product) => 
    { 
        carrito = carrito.reduce(
            (coleccion, p) => {
                if (p.id === clickedItem.id) {
                    p.quantity++;
                    return [...coleccion, p];
                }
                return [...coleccion, p];
                }
                , [] as ProductCart[]
        );
    };
    const reducir = (id: string) => 
    {
        carrito = carrito.reduce(
            (coleccion, p) => {
                if (p.id === id) {
                    if (p.quantity > 1) {
                    p.quantity--;
                    return [...coleccion, p];
                    }
                    else
                    return coleccion;
                }
                return [...coleccion, p];
                }
                , [] as ProductCart[]
            )
    }

    const components = render(
        <Grid>
            <ProductList props={product} add={addToCart}></ProductList>
            <ProductCartList
                productos={carrito}
                remove={remove}
                precio={() => 0}
                aumentar={aumentar}
                reducir={reducir}>
            </ProductCartList>
        </Grid>
    );

    expect(components.container).toHaveTextContent('No hay productos en el carrito');
    const button = components.getByTestId('add') as HTMLElement;
    fireEvent.click(button);

    components.rerender(
        <Grid>
            <ProductList props={product} add={addToCart}></ProductList>
            <ProductCartList
                productos={carrito}
                remove={remove}
                precio={() => 0}
                aumentar={aumentar}
                reducir={reducir}>
            </ProductCartList>
        </Grid>
    );

    expect(components.container).toHaveTextContent('1');
    expect(components.container).toHaveTextContent('Remove');

    const button2 = components.getByTestId('aumentar') as HTMLElement;
    fireEvent.click(button2);

    components.rerender(
        <Grid>
            <ProductList props={product} add={addToCart}></ProductList>
            <ProductCartList
                productos={carrito}
                remove={remove}
                precio={() => 0}
                aumentar={aumentar}
                reducir={reducir}>
            </ProductCartList>
        </Grid>
    );

    expect(components.container).toHaveTextContent('2');

    const button3 = components.getByTestId('reducir') as HTMLElement;
    fireEvent.click(button3);

    components.rerender(
        <Grid>
            <ProductList props={product} add={addToCart}></ProductList>
            <ProductCartList
                productos={carrito}
                remove={remove}
                precio={() => 0}
                aumentar={aumentar}
                reducir={reducir}>
            </ProductCartList>
        </Grid>
    );

    expect(components.container).toHaveTextContent('1');
    expect(components.container).toHaveTextContent('Pagar');
});