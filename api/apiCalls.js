import axios from 'react-native-axios';
const endpoint = 'http://192.168.8.189:4000/api/v1';

// ------------------------ COUNTRY API CALLS ------------------------
const countryIndex = () => {
  return axios.get(endpoint + '/counties').
    then(res => res).
    catch(err => console.log(err));
};

const countryShow = (countryName) => {
  return fetch(`${endpoint}/countries/${countryName}`).
    catch(err => { console.log(err) });
};
// ------------------------ AUTH API CALLS ------------------------
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
// ------------------------ USER API CALLS --------------------------
const userShow = (userId) => {
  return fetch(`${endpoint}/users/${userId}`).
    catch(err => { console.log(err) });
};

const updateUser = (user) => {
  return axios.put(`${endpoint}/users/${user._id}`, user).
    then(res => res).
    catch(err => console.log(err));
};

const deleteUser = (userId) => {
  return axios.delete(`${endpoint}/users/${userId}`).
    then(res => res).
    catch(err => console.log(err));
};

export default {
  countryIndex,
  countryShow,
  register,
  login,
  userShow,
  updateUser,
  deleteUser
};


