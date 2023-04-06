let like = document.querySelector('#like');

like.addEventListener('click', () => {
    like.classList.toggle('bi-heart');
    like.classList.toggle('bi-heart-fill');
});

function show_hide() {
    let x = document.getElementById("subcon");
    console.log(x.style.display);
    if (x.style.display === "none") {
        x.style.display = "block";
    }  else {    
        x.style.display = "none";
    }
}

let output = document.getElementById('output');