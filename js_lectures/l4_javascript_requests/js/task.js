let loginForm = document.querySelector('#loginForm');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    data = parseFormData(loginForm);
    console.log(data);
    sendData(data);
});

function parseFormData(form) {
    let formData = new FormData(form);
    let data = {};
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }
    return data;
}

function sendHttpRequest(method, url, data) {
    // Make a promise object
    let promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);

        xhr.responseType = 'json';

        if (data) {
            xhr.setRequestHeader('Content-Type', 'application/json');
        }
        // callback; we need it because we don't know when we shall get a result
        xhr.onload = setTimeout(() => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }
            // resolve(xhr.response);
        }, 2000);

        xhr.onerror = () => {
            reject('Something went wrong!');
        };

        xhr.send(JSON.stringify(data));
    });
    return promise;
}

function sendData(param) {
    debugger;
    sendHttpRequest('POST', 'https://reqres.in/api/register', param)
        .then(responseData => {
            console.log(responseData);
        })
        .catch(err => {
            console.log(err);
        });
}