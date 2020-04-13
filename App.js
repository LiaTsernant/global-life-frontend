import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Routes from './config/Routes';
import jwt_decode from 'jwt-decode';
import apiCalls from './api/apiCalls';
import { AsyncStorage } from 'react-native';
import setAuthHeader from './utils/setAuthHeader';

class App extends Component {
  state = {
    'email': '',
    '_id': ''
  };

  register = (user) => {
    apiCalls.register(user).
        then(res => {
        if (res.status === 200) {
          const token = res.data.token;
          AsyncStorage.setItem('jwtToken', token); 
          setAuthHeader(token);
          const decoded = jwt_decode(token);
          this.setState({
            email: decoded.email,
            _id: decoded._id
          });
        };
    }).catch(err => console.log(err));
  };

  login = (user) => {
    apiCalls.login(user).
      then(res => {
      if (res.status === 200) {
        const token = res.data.token;
        AsyncStorage.setItem('jwtToken', token);
        setAuthHeader(token);
        const decoded = jwt_decode(token);
        this.setState({
          email: decoded.email,
          _id: decoded._id
        });
      };
    }).catch(err => console.log(err));
  };

  logout = () => {
    AsyncStorage.removeItem('jwtToken');
    setAuthHeader();
    this.setState({
      email: '',
      _id: ''
    });
  };

  componentDidMount() {
    if (AsyncStorage.jwtToken) {
      setAuthHeader(AsyncStorage.jwtToken);
      const decoded = jwt_decode(AsyncStorage.getItem('jwtToken'));
      this.setState({
        email: decoded.email,
        _id: decoded._id
      });
    };
  };

  render() {
    return (
      <Routes/>
    );
  };
};

export default App;
AppRegistry.registerComponent('App', () => App);