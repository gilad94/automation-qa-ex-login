const axios = require('axios');
const URL = 'https://sandbox.myobligo.com/auth/login';

function login(mail, pass){
	return axios.post(URL, {
		email: mail,
		password: pass
	})
	.then(response => response.status)
	.catch(error => error.response.status);
}
module.exports = login;