import React, { useContext } from 'react';
import './header.css';
import { Link, useHistory } from 'react-router-dom';
import UserContext from '../../../context/UserContext';
import Logo from '../../../images/logo.png';
import swal from 'sweetalert';
import { toast } from 'react-toastify';

const Header = () => {
    const { userData, setUserData } = useContext(UserContext);
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
                            <Link className="active" to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/category">Category</Link>
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
                                <li>
                                    <Link to="/profile">
                                    <i className="far fa-user"></i>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link
                                        class="nav-link"
                                        onClick={() => {
                                            logout();
                                        }}
                                    >
                                        Logout
                                    </Link>
                                </li>
                            </>
                        ) : null}
                        <li>
                            <Link to="/s">
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
