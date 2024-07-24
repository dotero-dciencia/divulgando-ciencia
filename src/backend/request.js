const request = async(path = '', method = 'GET', headers = {}, body = {}) => {
    try {
        if (!['GET', 'POST', 'PUT', 'DEL'].includes(method)) {
            return {ok: false,
                msg: 'Not Valid Method.'
            }
        }

        let response

        if (method == 'GET'){
            response = await fetch(url = "http://localhost:3000/" + path,{
                method: method,
                headers: headers
            });
        } else {
            response = await fetch(url = "http://localhost:3000/" + path,{
                method: method,
                headers: headers,
                body: JSON.stringify(body)
            });
        }
        return response.json();
    } catch (err) {
        return {ok: false,
            msg: 'Internal Error.',
            ierr: err
        }
    }
}