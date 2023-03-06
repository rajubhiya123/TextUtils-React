import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#"> {props.title} </a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home </a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="/"> {props.AboutText}About</a>
                        </li> */}
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}

                    <div className={`form-check form-switch text-${props.mode === 'dark'?'light':'dark'}`}>
                        <input className="form-check-input " onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlfor="flexSwitchCheckDefault">Disable {props.mode}</label>
                    </div>

                </div>
            </div>
        </nav>
    )
}


Navbar.protoTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}


// Navbar.defaultProps = {
//     title: 'Set title here',
//     AboutText: 'About Text Here'

//   };
