import React from 'react';
import { NavLink } from 'react-router-dom';

const Headers = () => {
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/users'>User</NavLink>
            <NavLink to='/signup'>Sign Up</NavLink>
        </div>
    );
};

export default Headers;