const setCookie = (cname, cvalue, cage) => {
    document.cookie = cname + "=" + cvalue + "; max-age=" + cage +"; path=/; SameSite=Strict; Secure;";
}
const delCookie = (cname) => {
    document.cookie = cname+"=;max-age=0; path=/;";
}

const getCookie = (cname) => {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

export {
    setCookie,
    delCookie,
    getCookie
}