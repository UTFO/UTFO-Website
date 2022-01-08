import logo from './logo.png';
import Navbar from './Navbar.js';
import './Header.css';

function Header() {
    return (
        <div className='header'>
            <div className='logo-wrapper'>
                <div className='logo'>
                    <img src={logo} alt='UTFO logo' />
                </div>
            </div>
            <div className='nav-wrapper'>
                <Navbar />
            </div>
        </div>
    );
}

export default Header;