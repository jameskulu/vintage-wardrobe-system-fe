import { BrowserRouter, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

import Home from './components/pages/Home/Home';
import Header from './components/layout/Header/Header';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import VerifyEmail from './components/auth/VerifyEmail';
import ForgotPassword from './components/auth/ForgotPassword';
import ResetPassword from './components/auth/ResetPassword';

toast.configure();
function App() {
    return (
        <BrowserRouter>
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
            </div>
        </BrowserRouter>
    );
}

export default App;
