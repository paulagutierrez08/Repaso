import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '../organisms/counter';


test('renders with initial count and buttons', () => {
    render(<Counter title='Counter' counter={0} increment='Increment' decrement='Decrement'/>);
    const countElement = screen.getByText('Counter');
    expect(countElement).toBeInTheDocument();
});


test('increments count when button is clicked', async() => {
    render(<Counter title='Counter' counter={0} increment='Increment' decrement='Decrement'/>);
    const increment = screen.getByText('Increment');
    await userEvent.click(increment);
    expect(screen.getByText('1')).toBeInTheDocument();
});


test('decrements count when button is clicked', async() => {
    render(<Counter title='Counter' counter={0} increment='Increment' decrement='Decrement'/>);
    const increment = screen.getByText('Increment');
    const decrement = screen.getByText('Decrement');
    await userEvent.click(increment);
    await userEvent.click(decrement);
    expect(screen.getByText('0')).toBeInTheDocument();
});

