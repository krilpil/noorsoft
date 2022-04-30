import React from "react";
import {Routes, Route} from "react-router-dom";
import 'antd/dist/antd.css';
import GlobalStyles from './global-styles'
import LoginPage from "./pages/login/login-page";
import SignupPage from "./pages/signup/signup-page";

const App = (): JSX.Element => {
    return (
        <React.Fragment>
            <GlobalStyles/>
            <Routes>
                <Route path='/registration' element={<SignupPage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='*' element={<LoginPage/>}/>
            </Routes>

        </React.Fragment>
    );
}

export default React.memo(App);
