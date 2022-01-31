import {screen, render } from '@testing-library/react';
import App from '../App/';




test ('should render app', () => {
    render(<App />); 
    const AppElement = screen.getByTestId('app-div-1');
    expect(AppElement).toBeInTheDocument(); 
})

test ('should show title', () => {
    render(<App />); 
    const AppElement = screen.getByTestId('app-h1-1');
    expect(AppElement).toHaveTextContent('To-Do List');  
})
