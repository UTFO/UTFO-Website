import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import './Navbar.css';
import Logo from '../../assets/logo_transparent.png';
import { Link } from 'react-router-dom';

class Navbar extends Component {
state = { clicked: false }

handleClick = () => {
    this.setState({ clicked: !this.state.clicked})
}

    render() {
        return(
            <nav className="NavbarItems">
                <div className="inner">
                    <h1 className="navbar-logo">
                        <Link to="/"><img src={Logo} className='logo' alt="UTFO" /></Link>
                    </h1>
                    <h1 className="navbar-logo utfo">
                        <Link to="/">UTFO</Link>
                    </h1>
                    <div className="menu-icon" onClick={this.handleClick}>
                        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        {MenuItems.map((item, index) => {
                            return(
                                <li key={index}>
                                    <Link className={item.cName} to={item.url}>
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar