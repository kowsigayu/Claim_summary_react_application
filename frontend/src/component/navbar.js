import React from 'react';
import {Link} from 'react-router-dom';
import { MdHome } from "react-icons/md";

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-primary">
            <div className="container-fluid">
                <div className="navbar-header">
                    <label className="navbar-brand">Omega Insurance</label>
                    <Link className="navbar-brand" id="home" exact to="/"><MdHome/> Home</Link>
                </div>
                <Link className="btn btn-outline-light" exact to="/">Sign Out</Link>
            </div>
        </nav>
    );
};

export default Navbar;
