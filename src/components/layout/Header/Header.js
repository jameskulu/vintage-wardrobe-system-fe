import React, { useContext } from 'react';
import './header.css';
import { Link, useHistory } from 'react-router-dom';
import UserContext from '../../../context/UserContext';
import Logo from '../../../images/logo.png';
import swal from 'sweetalert';
import { toast } from 'react-toastify';

const Header = () => {
    const { userData, setUserData } = useContext(UserContext);
    console.log(userData);
    const history = useHistory();
    const toggleMenu = () => {
        document.getElementById('navbar').classList.toggle('toggle');
    };

    const logout = () => {
        swal({
            title: 'Are you sure want to logout?',
            icon: 'warning',
            buttons: true,
            dangerMode: true,
        }).then(async (willDelete) => {
            if (willDelete) {
                setUserData({
                    token: undefined,
                    user: undefined,
                });
                localStorage.setItem('auth-token', '');
                history.push('/');
                toast.success('You are logged out successfully.');
            }
        });
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
                            <Link className="nav-item-link active" to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/category" className="nav-item-link">Category</Link>
                        </li>
                        {/* {userData.user ? (
                            userData.user.role === 'admin' ? (
                                <li>
                                    <Link to="/admin">Admin</Link>
                                </li>
                            ) : null
                        ) : null} */}

                        {userData.user ? (
                            <>
                                <li className="nav-item dropdown">
                                    <Link
                                        className="nav-item-link nav-link dropdown-toggle"
                                        to="#"
                                        id="navbarDropdown"
                                        role="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        Renter
                                    </Link>
                                    <div
                                        className="dropdown-menu"
                                        aria-labelledby="navbarDropdown"
                                    >
                                        <Link className="dropdown-item" to="#">
                                            Add an item
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                            My items
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                            My orders
                                        </Link>
                                    </div>
                                </li>

                                <li className="nav-item dropdown">
                                    <Link
                                        className="nav-item-link nav-link dropdown-toggle"
                                        to="#"
                                        id="navbarDropdown"
                                        role="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        Hi, {userData.user.firstName}
                                    </Link>
                                    <div
                                        className="dropdown-menu"
                                        aria-labelledby="navbarDropdown"
                                    >
                                        <Link className="dropdown-item" to="#">
                                            Manage Profile
                                        </Link>
                                        <Link className="dropdown-item" to="#">
                                            Change Password
                                        </Link>
                                        <div className="dropdown-divider"></div>
                                        <Link
                                            onClick={() => {
                                                logout();
                                            }}
                                            className="dropdown-item"
                                        >
                                            Logout
                                        </Link>
                                    </div>
                                </li>
                            </>
                        ) : null}
                        <li>
                            <Link to="/cart" className="nav-item-link">
                                <i className="fas fa-shopping-cart"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/s" className="nav-item-link">
                                <i className="fas fa-search"></i>
                            </Link>
                        </li>

                        {userData.user ? null : (
                            <li>
                                <Link to="/login">
                                    <button>Login</button>
                                </Link>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
