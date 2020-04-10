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

const { width: WIDTH } = Dimensions.get('window');


class SignUp extends React.Component {
    render() {
        return (
            <View style={styles.backgroundContainer}>
                <View style={styles.map}> 
                    <Image source={map} style={styles.map}></Image>
                </View>
                <Text style={styles.login}>Sign Up</Text>

                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.input}
                        placeholder={'Firsl Name'}
                        placeholderTextColor={'rgba(255, 255, 255, 0.3)'}
                        underlineColorAndroid='transparent'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.input}
                        placeholder={'Last Name'}
                        placeholderTextColor={'rgba(255, 255, 255, 0.3)'}
                        underlineColorAndroid='transparent'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.input}
                        placeholder={'Email'}
                        placeholderTextColor={'rgba(255, 255, 255, 0.3)'}
                        underlineColorAndroid='transparent'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.input}
                        placeholder={'Password'}
                        secureTextEntry={true}
                        placeholderTextColor={'rgba(255, 255, 255, 0.3)'}
                        underlineColorAndroid='transparent'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.input}
                        placeholder={'Select Country'}
                        secureTextEntry={true}
                        placeholderTextColor={'rgba(255, 255, 255, 0.3)'}
                        underlineColorAndroid='transparent'
                    />
                </View>

                <TouchableOpacity style={styles.btnLogin}>  
                    <Text style={styles.text}>Sign Up</Text>              
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
        // position: 'absolute',
        // top: 0,
        // marginTop: 5,
        width: 300,
        height: 150,
        resizeMode: 'contain',
        tintColor: 'yellow'
    },
    login: {
        marginTop: 10,
        color: 'yellow',
        fontSize: 40,
        fontWeight: '500',
        marginBottom: 10
    },
    inputContainer: {
        marginTop: 10,

    },
    input: {
        width: WIDTH - 55,
        height: 35,
        borderRadius: 45,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'rgba(255, 255, 255, 0.35)',
        color: 'white',
        marginHorizontal: 25,
    },
    btnLogin: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 45,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        marginTop: 20,

    },
    text: {
        color: 'black',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default SignUp;