import React, { useState, useContext } from 'react';
import { MovieContext } from './MovieContext';

export const AddMovie = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [movies, setMovies] = useContext(MovieContext);

    const updateName = e => {
        setName(e.target.value);
    }

    const updatePrice = e => {
        setPrice(e.target.value);
    }

    const addMovie = e => {
        e.preventDefault();
        setMovies(prevMovies => [...prevMovies, {id: prevMovies.length+1, name: name, price: price}]);
        setName('');
        setPrice('');
    }

    return (
        <form onSubmit={addMovie} className="from">
            <input type="text" name="name" value={name} onChange={updateName}/>
            <input type="text" name="price" value={price} onChange={updatePrice}/>
            <button>Submit</button>
        </form>
    );
}