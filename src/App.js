import { useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import axios from 'axios';

// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
// import $ from 'jquery';
// import Popper from 'popper.js';



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

import AddItem from './components/pages/AddItem/AddItem';


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

    return (
        <BrowserRouter>
            <UserContext.Provider value={{ userData, setUserData }}>
                <div className="App">
                    <Header />

                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/Signup" component={Signup} />
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

                    <Route
                        exact
                        path="/items/:itemId"
                        component={ItemDetail}
                    />

                    <Route
                        exact
                        path="/renter/items/add"
                        component={AddItem}
                    />

                  
                    <Route exact path='/s' component={SearchPage} />
                    <Footer/>
                </div>
            </UserContext.Provider>
        </BrowserRouter>
    );
}

export default App;
