import React from 'react'
import { NavLink } from 'react-router-dom'
import { GrAchievement } from "react-icons/gr";
const Navbar = () => {
    return (
        <>
    <div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-10 mx-auto">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <GrAchievement className="s-i"/>
        <NavLink activeClassName="menu-active" className="navbar-brand" to="/">Happy Yoga</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <NavLink activeClassName="menu-active" className="nav-link active" aria-current="page" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link active" activeClassName="menu-active" aria-current="page" to="/services">Services</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link active" activeClassName="menu-active" aria-current="page" to="/contact">Contact</NavLink>
                </li>
            </ul>
            <form class="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
        </nav>
        </div>
      </div>
    </div>
    </>
    )
}

export default Navbar
