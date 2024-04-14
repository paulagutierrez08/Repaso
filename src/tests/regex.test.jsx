import React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Regex from "../organisms/regex";

test ('The Email is correct', ()=>{
    render (<Regex/>);

    const regexElement = screen.getByText('Regex')
    expect (regexElement).toBeInTheDocument();
});

test('Renders with initial state', () => {
    render(<Regex />);
    expect(screen.getByText('Regex')).toBeInTheDocument();
    expect(screen.getByLabelText('Correo electrónico')).toBeInTheDocument();
    expect(screen.getByText('Enviar')).toBeInTheDocument();
    });

    test('shows error when submitting invalid email', async () => {
        render(<Regex/>)
        const buttonSend=screen.getByText('Enviar');
        await userEvent.click(buttonSend);
        const emailError=screen.getByText('Dirección de correo electrónico no válida');
        expect (emailError).toBeInTheDocument();
    })