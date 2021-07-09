import React, { useContext } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
// import AuthOptions from '../../auth/authOptions'
import UserContext from '../../../context/UserContext';
import Logo from '../../../images/logo.png'

const Header = () => {
    const { userData } = useContext(UserContext);

    const toggleMenu = () => {
        document.getElementById('navbar').classList.toggle('toggle');
    };

    return (
        <header>
            <div className="inner-header">
                <Link to="/">
                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div>
                </Link>

                <nav>
                    <i
                        onClick={toggleMenu}
                        id="toggle-button"
                        className="fas fa-bars"
                    ></i>
                    <ul id="navbar">
                        <li>
                            <Link className="active" to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/category">Category</Link>
                        </li>
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>

                        {userData.user ? (
                            userData.user.role === 'admin' ? (
                                <li>
                                    <Link to="/admin">Admin</Link>
                                </li>
                            ) : null
                        ) : null}

                        {/* <AuthOptions /> */}

                        <li>
                            <Link to="/s">
                                <i className="fas fa-search"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/login">
                                <button>Login</button>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
