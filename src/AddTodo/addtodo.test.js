import {screen, render } from '@testing-library/react';
import AddTodo from '../AddTodo/AddTodo.js';



test ('should render outer AddTodo div', () => {
    render(<AddTodo />); 
    const AppElement = screen.getByTestId('addtodo-div-1');
    expect(AppElement).toBeInTheDocument(); 
})



// ⚠️ Rolled back!
