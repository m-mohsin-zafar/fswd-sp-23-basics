const getdemobtn = document.querySelector('#getbtn');
const postdemobtn = document.querySelector('#postbtn');
const loginForm = document.querySelector('#loginForm');

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

// function getData() {
//     fetch('https://reqres.in/api/users').then(response =>{
//       // console.log(response.json());
//       return response.json();
//   })
//   .then(responseData => {
//       console.log(responseData);
//   });
// }

const sendHttpRequest = (method, url, data) => {
  return fetch(url, 
    {
    method: method,
    body: JSON.stringify(data),
    headers: data ? {
      'Content-Type': 'application/json'
    } : {}
  }).then(response => {
    if (response.status >= 400) {
      // !response.ok
      return response.json().then(errResData => {
        const error = new Error('Something went wrong!');
        error.data = errResData;
        throw error;
      });
    }
    return response.json();
  });
};
// const getData = () => {
//   sendHttpRequest('GET', 'https://reqres.in/api/users').then(responseData => {
//     console.log(responseData);
//   });
// };

const sendData = (data) => {
  sendHttpRequest('POST', 'https://reqres.in/api/register', data)
    .then(responseData => {
      console.log(responseData);
    })
    .catch(err => {
      console.log(err, err.data);
    });
};

getdemobtn.addEventListener('click', getData);
postdemobtn.addEventListener('click', sendData);