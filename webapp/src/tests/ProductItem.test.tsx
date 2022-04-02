import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import { Product } from "../shared/shareddtypes";
import ProductList from "../components/products/ProductList";
import ProductItem from "../components/products/ProductItem";

test("A product is rendered", async () => {

    const product: Product =
    {
        id: '1',
        category: 'Ropa',
        name: 'Chaqueta',
        description: 'Para abrigarse',
        price: 90,
        img: ""
    }

    const components = render(
        <ProductItem props={product} add={() => { }}></ProductItem>
    );

    expect(components.container).toHaveTextContent('Chaqueta');
    expect(components.container).toHaveTextContent('Para abrigarse');
    expect(components.container).toHaveTextContent('90');
});