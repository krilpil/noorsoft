import React from "react";
import 'antd/dist/antd.css';
import GlobalStyles from './global-styles'
// import LoginPage from "./pages/login/login-page";
import RegistrationPage from "./pages/registration/registration-page";

const App = (): JSX.Element => {
    return (
        <React.Fragment>
            <GlobalStyles/>
            <RegistrationPage/>
        </React.Fragment>
    );
}

export default React.memo(App);
