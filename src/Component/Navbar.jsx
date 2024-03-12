import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Navbar() {
    const state = useSelector((state)=>state.handleCart)
    return (
        <div>
             <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white py-3 shadow-sm">
                <div className='container'>
            <NavLink className="navbar-brand fw-bold fs-4" to="/">
                Online Mart
                </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/">
                            Home
                         <span className="sr-only">(current)</span>
                         </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/products">
                            Product
                            </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                    {/* <li classNamename="nav-item dropdown">
                        <NavLink classNamename="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </NavLink>
                        <div classNamename="dropdown-menu" aria-labelledby="navbarDropdown">
                            <NavLink classNamename="dropdown-item" to="#">Action</NavLink>
                            <NavLink classNamename="dropdown-item" to="#">Another action</NavLink>
                            <div classNamename="dropdown-divider"></div>
                            <NavLink classNamename="dropdown-item" to="#">Something else here</NavLink>
                        </div>
                    </li> */}
                    {/* <li classNamename="nav-item">
                        <NavLink classNamename="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</NavLink>
                    </li> */}
                </ul>
                {/* <form classNamename="d-flex">
                    <input classNamename="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button classNamename="btn btn-outline-success" type="submit">
                        Search
                        </button>
                </form> */}
                <div className='button'>
                    <NavLink to="/login" className="btn btn-outline-dark">
                        <i className='fa fa-sign-in me-1'></i>
                        Login
                    </NavLink>
                    <NavLink to="/register" className="btn btn-outline-dark ms-2">
                        <i className='fa fa-user-plus  me-1'></i>
                        Register
                    </NavLink>
                    <NavLink to="cart" className="btn btn-outline-dark ms-3 ">
                        <i className='fa fa-shopping-cart me-1'></i>
                        Cart({state.length})
                    </NavLink>
                </div>
            </div>
            </div>
        </nav>
         </div>
    )
}
