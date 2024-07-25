const SVURL = "http://localhost:3000/"
const request_server = async(path = '', method = 'GET', headers = {}, body = {}) => {

    return new Promise( async (resolve, reject) => {

        if (!['GET', 'POST', 'PUT', 'DEL'].includes(method)) {
            reject({ok: false,
                msg: 'Not Valid Method.'
            });
        }
        try{
            if (method == 'GET'){
                fetch(SVURL + path,{
                    method: method,
                    headers: headers
                }).then((serverPromise) => { 
                    serverPromise.json().then((data) => { resolve(data); }).catch((err) => {reject({ok: false,msg: 'Internal Error.', ierr: err});});
                }).catch((err) => {
                    reject({ok: false,
                        msg: 'Internal Error.',
                        ierr: err
                    });
                });
            } else {
                fetch(SVURL + path,{
                    method: method,
                    headers: headers,
                    body: body
                }).then((serverPromise) => { 
                    serverPromise.json().then((data) => { resolve(data); }).catch((err) => {reject({ok: false,msg: 'Internal Error.', ierr: err});});
                }).catch((err) => {
                    reject({ok: false,
                        msg: 'Internal Error.',
                        ierr: err
                    });
                });
            }
        } catch (err) {
            reject({ok: false,
                msg: 'Internal Error.',
                ierr: err
            });
        }
    });
}

export {
    request_server
}