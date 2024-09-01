import { request_server } from './request';
import { setCookie } from './cookie_handler';

const check_password_security = (password = '') => {
    var strength = 0;
    const strrules = [/[a-z]+/, /[A-Z]+/, /[0-9]+/, /[$@#&!]+/]
    for (const i in strrules) {
        if (password.match(strrules)) strength++;
    }
    return strength;
}

const login = async (email = '', password = '') => {
    return new Promise( (resolve, reject) => {
        console.log(email, password)
        if (email == "") reject('E-Mail is required.');
        if (password == "") reject('Password is required.');

        if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) reject('Not valid E-Mail.');
        if (password.length < 6) reject('Password must have at least 6 characters.');
        if (password.length > 50) reject('Password can\'t have more than 50 characters.');
        request_server('api/login', 'POST', {'Content-Type': 'application/json'}, JSON.stringify({'email':email, 'password': password})).then(( res ) => {

            try { if (!'ok' in res) reject('Server didn\'t answer.'); } catch(e) { }

            if (res['ok'] == false){
                if ('ierr' in res) reject(res['ierr']);
                if ('msg' in res) reject(res['msg']);
                if ('errors' in res) reject(res['errors']);
            }

            sessionStorage.setItem('token', res['access_token']);
            setCookie('token', res['refresh_token'], 15*24*60*60);

            resolve(res);
        });
    });
}

export {
    login,
    check_password_security,
}