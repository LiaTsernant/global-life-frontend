import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Login from '../components/Login/Login';
import SignUp from '../components/SignUp/SignUp';
import Main from '../components/Main/Main';
import About from '../components/About/About';
import Profile from '../components/Profile/Profile';

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene key="login" component={ Login } title="Login"/>
                    <Scene key="signup" component={ SignUp } title="SignUp"/>
                    <Scene key="main" component={ Main } title="Main"/>
                    <Scene key="about" component={ About } title="About"/>
                    <Scene key="profile" component={ Profile } title="Profile"/>
                </Stack>
            </Router>

        )
    };
};

export default Routes;