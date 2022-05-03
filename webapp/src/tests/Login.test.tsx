import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import Login  from "../components/login/Login";

test("The login view is rendered ans shows admin login after pushing the button", async () => {

    const precio = (precio: number) => {};
    const admin = (precio: boolean) => {};
    const adminLogged = false;


    const footer = render(
        <Login setPrecio={precio} setLoggedAdmin={admin} adminLogged={adminLogged}></Login>
    );

    const button = footer.getByText('Login Admin') as HTMLElement;
    fireEvent.click(button);

    expect(footer.container).toHaveTextContent('Email');
    expect(footer.container).toHaveTextContent('Password');
});

test("The login view is rendered ans shows user/pod login after pushing the button", async () => {

    const precio = (precio: number) => {};
    const admin = (precio: boolean) => {};
    const adminLogged = false;


    const footer = render(
        <Login setPrecio={precio} setLoggedAdmin={admin} adminLogged={adminLogged}></Login>
    );

    const button = footer.getByText('Login POD') as HTMLElement;
    fireEvent.click(button);

    expect(footer.container).toHaveTextContent('Shipping address');
});