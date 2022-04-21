import React from "react";
import 'antd/dist/antd.css';
import GlobalStyles from './global-styles'
import LoginPage from "./pages/login/login-page";

const App = (): JSX.Element => {
    return (
        <React.Fragment>
            <GlobalStyles/>
            <LoginPage/>
        </React.Fragment>
    );
}

export default React.memo(App);
