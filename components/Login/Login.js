import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Image, 
    TextInput, 
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import map from '../../images/map.png';
import { Actions } from 'react-native-router-flux';
import apiCalls from '../../api/apiCalls';
import { AsyncStorage } from 'react-native';
import setAuthHeader from '../../utils/setAuthHeader';
import jwt_decode from 'jwt-decode';

const { width: WIDTH } = Dimensions.get('window');

class Login extends React.Component {
    state = {
        email: '',
        _id: '',
    };

    goToMain = () => {
        Actions.main();
    };

    goToSignup = () => {
        Actions.signup();
    };

    async setToStorage(key, val) {
        AsyncStorage.setItem(key, val);
        this.setState({
            key: val
        });
    };

    handleLogin = () => {
        let user = this.state;

        apiCalls.login(user).
            then(res => {
            if (res.status === 200) {
                const token = res.data.token;
                setAuthHeader(token);
                const decoded = jwt_decode(token);
                this.setToStorage('user', decoded._id);

                this.goToMain();
            };
        }).catch(err => console.log(err));
    };

    componentDidMount() {
        AsyncStorage.getItem('user').
        then((value) => {
            this.setState({'user': value })
            if (this.state.user) {
                this.goToMain();
            };
        }).catch((err) => console.log(err));
    }
    
    render() {
        // console.log(this.state)
        return (
            <View style={styles.backgroundContainer}>
                <View style={styles.map}> 
                    <Image source={map} style={styles.map}></Image>
                </View>

                <Text style={styles.login}>Login</Text>

                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.input}
                        placeholder={'Email'}
                        placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                        underlineColorAndroid='transparent'
                        returnKeyLabel = { "next" } //WTF???????
                        onChangeText={(text) => this.setState({ email: text })}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.input}
                        placeholder={'Password'}
                        secureTextEntry={true}
                        placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                        underlineColorAndroid='transparent'
                        returnKeyLabel = { "next" } //WTF???????
                        onChangeText={(text) => this.setState({ password: text })}
                    />
                </View>

                <TouchableOpacity style={styles.btnLogin} onPress={ () => this.handleLogin() }>  
                    <Text style={styles.text}>Login</Text>              
                </TouchableOpacity>

                <TouchableOpacity onPress={this.goToSignup}>  
                    <Text style={styles.textSignup}>SignUp</Text>              
                </TouchableOpacity>

            </View>
        )
    };
};

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {

        width: 300,
        height: 150,
        resizeMode: 'contain',
        tintColor: 'black'
    },
    login: {
        marginTop: 10,
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 3
    },
    inputContainer: {
        marginTop: 10,
    },
    input: {
        width: WIDTH - 55,
        height: 40,
        borderRadius: 45,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        color: 'rgba(0, 0, 0, 0.7)',
        marginHorizontal: 25,
    },
    btnLogin: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 45,
        backgroundColor: '#f0e24f',
        justifyContent: 'center',
        marginTop: 20,
    },
    text: {
        color: 'black',
        fontSize: 16,
        textAlign: 'center',
    },
    textSignup: {
        marginTop: 10,
        color: 'black',
        textDecorationLine: 'underline'
    }
});

export default Login;