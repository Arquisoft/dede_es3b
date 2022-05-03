import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import TextFiedldValidator  from "../components/login/TextFieldValidator";

test("The login view is rendered ans shows admin login after pushing the button", async () => {

    const admin = (precio: boolean) => {};


    const footer = render(
        <TextFiedldValidator setLoggedAdmin={admin}></TextFiedldValidator>
    );

    expect(footer.container).toHaveTextContent('Email');
    expect(footer.container).toHaveTextContent('Password');

    const button = footer.getByText('Login') as HTMLElement;
    fireEvent.click(button);
    
});