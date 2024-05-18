import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');


describe('Pruebas en GifGrid', () => {
    
    const category = 'One punch'
    
    test('debe de mostrar el loggin inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images:[],
            isLoading: true,
        });

        render(<GifGrid category={category}/>);
        // screen.debug();
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
        
    });

    test('debe de mostrar items cuando se cargan ', () => {
        
        const gifs = [
            {
                id: 'AVS',
                title: 'saitama',
                url: 'https://adasdasdas'
            },   
            {
                id: 'AVS12',
                title: 'sgoku',
                url: 'https://adasdasdas'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });

        render(<GifGrid category={category}/>);
        expect(screen.getAllByRole('img').length).toBe(2);

    });
});