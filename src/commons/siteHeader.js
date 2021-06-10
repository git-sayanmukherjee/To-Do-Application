import React from 'react';
import './commons.css'

export default class SiteHeader extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-shadow">
                <a className="navbar-brand m-l-20" href="#">Your To-Do endpoint</a>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Help</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                        <a className="nav-link text-warning" href="#">Login/Register</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}