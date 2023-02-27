let form = document.getElementById('reg-form');
// let data = FormData(form);

form.addEventListener('submit', function (event) {
    event.preventDefault();
    let data = new FormData(form);

    for (const [key, value] of data) {
        console.log(`${key}: ${value}\n`);
    }

    console.log(data.get('member-1-name'))

});