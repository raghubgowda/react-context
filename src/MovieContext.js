import React, {useState, createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name: 'Titanic',
            price: 20,
            id: 1
        },
        {
            name: 'Godzilla',
            price: 10,
            id: 2
        },
        {
            name: 'Hangover',
            price: 25,
            id: 3
        }
    ]);
    
    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}
