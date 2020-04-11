import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Login from '../components/Login/Login';
import SignUp from '../components/SignUp/SignUp';
import Main from '../components/Main/Main';
import About from '../components/About/About';
import Profile from '../components/Profile/Profile';

const Routes = () => {
    return( 
        <Router>
            <Scene key = "root">
                <Scene key="main" component={ Main } title="Main" hideNavBar={true}/>
                <Scene key="login" component={ Login } title="Login" initial={ true } hideNavBar={true}/>
                <Scene key="signup" component={ SignUp } title="SignUp" hideNavBar={true}/>
                <Scene key="about" component={ About } title="About" hideNavBar={true}/>
                <Scene key="profile" component={ Profile } title="Profile" hideNavBar={true}/>
            </Scene>
        </Router>
    );
};

export default Routes;