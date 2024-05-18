import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../../src/GifExpertApp";

describe('Pruebas en GifExpertApp', () => {

    test('should first', () => {
        render(<GifExpertApp/>);
        const input = screen.getByRole('textbox');
        
        fireEvent.input(input, { target: {value: 'saitama'} });
        const form = screen.getByRole('form');
        // fireEvent.input(input, { target: {value: inputValue} });
        fireEvent.submit(form);
        //expect(input.value).toBe('saitama');
        screen.debug();
    });

});