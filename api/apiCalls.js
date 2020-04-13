import axios from 'react-native-axios';
const endpoint = 'http://192.168.8.189:4000/api/v1';

// ------------------------ COUNTRY API CALLS ------------------------
const countryIndex = () => {
    return axios.get(endpoint + '/counties').
        then(res => res).
        catch(err => console.log(err));
};

const countryShow = (countryId) => {
    return fetch(`${ endpoint }/countries/${ countryId }`).
        catch(err => {
            console.log(222)
            console.log(err)
        });
};

// ------------------------ COUNTRY API CALLS ------------------------
const register = (user) => {
    return axios.post(`${endpoint}/register`, user).
        then(res => res).
        catch(err => console.log(err));
};

const login = (user) => {
    return axios.post(`${endpoint}/login`, user).
        then(res => res).
        catch(err => console.log(err));
};

export default {
    countryIndex,
    countryShow,
    register,
    login
};


