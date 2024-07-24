const { request } = require('./request')

const check_password_security = (password = '') => {
    var strength = 0;
    const strrules = [/[a-z]+/, /[A-Z]+/, /[0-9]+/, /[$@#&!]+/]
    for (const i in strrules) {
        if (password.match(strrules)) strength++;
    }
    return strength;
}

const login = (email = '', password = '') => {

    if (email = "") return 'E-Mail is required.';
    if (password = "") return 'Password is required.';

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) return 'Not valid E-Mail.';
    if (password.length < 6) return 'Password must have at least 6 characters.';
    if (password.length > 50) return 'Password can\'t have more than 50 characters.';

    const response = request('/api/login', 'POST', {}, {'email':email, 'password': password});

    if (!'ok' in response) return 'Server didn\'t answer.';

    if (!response['ok']){
        if ('msg' in response) return response['msg'];
        if ('errors' in response) return response['errors'].join (' ');
    }

    document.cookie(`token=${response['token']}`)
    
    return true;
}