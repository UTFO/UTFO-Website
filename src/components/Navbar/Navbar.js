import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import './Navbar.css';
import Logo from '../../assets/logo_transparent.png';

class Navbar extends Component {
state = { clicked: false }

handleClick = () => {
    this.setState({ clicked: !this.state.clicked})
}

    render() {
        return(
            <nav className="NavbarItems">
                <div className="inner">
                    <h1 className="navbar-logo"><img src={Logo} className='logo' alt="UTFO" /></h1>
                    <h1 className="navbar-logo utfo">UTFO</h1>
                    <div className="menu-icon" onClick={this.handleClick}>
                        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        {MenuItems.map((item, index) => {
                            return(
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                        {item.title}
                                    </a>
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