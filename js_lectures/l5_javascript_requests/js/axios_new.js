import {User, AdminUser} from "./user.js";


let loginForm = document.querySelector('#loginForm');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let data = parseFormData(loginForm);
    console.log(data);
    sendData(data).then(response => {
        console.log(response.status)
        console.log(response.data);
        let user = new AdminUser('Jane Doe', 'Admin');
        console.log(user);
    });
});



function parseFormData(form) {
    let formData = new FormData(form);
    let data = {};
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }
    return data;
}

function sendData(data) {
    // make a post request using axios
    const url = 'https://reqres.in/api/register';
    return axios.post(url, data);
}
