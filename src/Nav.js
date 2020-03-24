import React, {useContext} from 'react';
import {MovieContext} from './MovieContext';

const Nav = () => {
    const [movies] = useContext(MovieContext);
    return (
        <div className="nav-header">
            <h3>Box Office</h3>
            <p>Total Movies: {movies.length}</p>
        </div>
    );
}

export default Nav;