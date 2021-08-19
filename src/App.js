import { useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import axios from 'axios';

import UserContext from './context/UserContext';

// Components
import Home from './components/pages/Home/Home';
import Header from './components/layout/Header/Header';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import VerifyEmail from './components/auth/VerifyEmail';
import ForgotPassword from './components/auth/ForgotPassword';
import ResetPassword from './components/auth/ResetPassword';
import Footer from './components/layout/Footer/Footer';
import ItemDetail from './components/pages/ItemDetail/ItemDetail';
import SearchPage from './components/pages/Search/Search';

import AddItem from './components/pages/Renter/AddItem/AddItem';
import EditItem from './components/pages/Renter/EditItem/EditItem';
import ViewItem from './components/pages/Renter/ViewItem/ViewItem';
import RentOrder from './components/pages/Renter/RentOrder/RentOrder';
import Cart from './components/pages/Customer/Cart/Cart';
import Order from './components/pages/Customer/Order/Order';
import Checkout from './components/pages/Customer/Checkout/Checkout';
import CheckoutComplete from './components/pages/Customer/Checkout/CheckoutComplete';
import About from './components/pages/AboutUs/About';
import Wishlist from './components/pages/Customer/Wishlist/Wishlist';
import Category from './components/pages/Category/Category';
import ChangePassword from './components/pages/ChangePassword/ChangePassword';
import EditProfile from './components/pages/EditProfile/EditProfile';
import Profile from './components/pages/Profile/Profile';

import Admin from './components/admin/Admin';

import ProtectedAdminRoute from './middleware/ProtectedAdminRoute'
import UserAdmin from './components/admin/User/User';
import AddUser from './components/admin/User/AddUser';
import EditUser from './components/admin/User/EditUser';

toast.configure();
function App() {
    const [userData, setUserData] = useState({
        token: undefined,
        user: undefined,
    });

    useEffect(() => {
        const checkLoggedIn = async () => {
            let token = localStorage.getItem('auth-token');
            if (token === null) {
                localStorage.setItem('auth-token', '');
                token = '';
            }

            const tokenResponse = await axios.post(
                `${process.env.REACT_APP_API_URL}/api/users/tokenIsValid`,
                null,
                { headers: { Authorization: 'Bearer ' + token } }
            );

            if (tokenResponse.data) {
                const userResponse = await axios.get(
                    `${process.env.REACT_APP_API_URL}/api/users`,
                    { headers: { Authorization: 'Bearer ' + token } }
                );

                setUserData({
                    token,
                    user: userResponse.data,
                });
            }
        };
        checkLoggedIn();
    }, []);

    // const isAdmin = () => {
    //     if (userData.user) {
    //       if (userData.user.role === 'admin') {
    //         return true
    //       }
    //       else {
    //         return false
    //       }
    //     }
    //     else {
    //       return false
    //     }
    //   }

    const isAdmin = () => {
        return true
      }

    return (
        <BrowserRouter>
            <UserContext.Provider value={{ userData, setUserData }}>
                <div className="App">

                    <Route exact path={['/',
                        '/login',
                        '/signup',
                        '/forgot-password',
                        '/reset-password/:token',
                        '/verify-email/:token',
                        '/items/:itemId',
                        '/renter/items/add',
                        '/renter/items',
                        '/cart',
                        '/orders',
                        '/checkout',
                        '/renter/items/edit/:itemId',
                        '/checkout',
                        '/checkout/complete',
                        '/renter/order',
                        '/category/:categoryName',
                        '/about-us',
                        '/wishlist',
                        '/edit-profile',
                        '/profile',
                        '/change-password',
                        '/s',
                    ]}
                        component={Header} />

                    <Route exact path="/" component={Home} />
                    
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                    <Route
                        exact
                        path="/forgot-password"
                        component={ForgotPassword}
                    />
                    <Route
                        exact
                        path="/reset-password/:token"
                        component={ResetPassword}
                    />
                    <Route
                        exact
                        path="/verify-email/:token"
                        component={VerifyEmail}
                    />

                    <Route exact path="/items/:itemId" component={ItemDetail} />

                    <Route exact path="/renter/items/add" component={AddItem} />

                    <Route exact path="/renter/items" component={ViewItem} />

                    <Route exact path="/cart" component={Cart} />
                    <Route exact path="/orders" component={Order} />

                    <Route exact path="/checkout" component={Checkout} />
                    <Route
                        exact
                        path="/checkout/complete"
                        component={CheckoutComplete}
                    />

                    <Route
                        exact
                        path="/renter/items/edit/:itemId"
                        component={EditItem}
                    />

                    <Route exact path="/renter/order" component={RentOrder} />
                    <Route exact path="/about-us" component={About} />
                    <Route exact path="/wishlist" component={Wishlist} />
                    <Route
                        exact
                        path="/category/:categoryName"
                        component={Category}
                    />

                    <Route
                        exact
                        path="/change-password"
                        component={ChangePassword}
                    />
                    <Route exact path="/edit-profile" component={EditProfile} />

                    <Route exact path="/profile" component={Profile} />

                    <Route exact path="/s" component={SearchPage} />


                    {/* Admin */}
                    <ProtectedAdminRoute exact path='/admin' component={Admin} isAdmin={isAdmin()} />
                    <ProtectedAdminRoute exact path='/admin/users' component={UserAdmin} isAdmin={isAdmin()} />
                    <ProtectedAdminRoute exact path='/admin/users/add' component={AddUser} isAdmin={isAdmin()} />
                    <ProtectedAdminRoute exact path='/admin/users/edit/:userId' component={EditUser} isAdmin={isAdmin()} />

                    <Route exact path={['/',
                        '/login',
                        '/signup',
                        '/forgot-password',
                        '/reset-password/:token',
                        '/verify-email/:token',
                        '/items/:itemId',
                        '/renter/items/add',
                        '/renter/items',
                        '/cart',
                        '/orders',
                        '/checkout',
                        '/renter/items/edit/:itemId',
                        '/checkout',
                        '/checkout/complete',
                        '/renter/order',
                        '/category/:categoryName',
                        '/about-us',
                        '/wishlist',
                        '/edit-profile',
                        '/profile',
                        '/change-password',
                        '/s',
                    ]}
                        component={Footer} />
                </div>
            </UserContext.Provider>
        </BrowserRouter>
    );
}

export default App;
