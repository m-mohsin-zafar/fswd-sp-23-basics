function dq2(x, y, a = 20, b = 'nothing') {
  let res = 0;
  if (x === 1) {
    res = 1;
  } else {
    res = 2;
  }
  res = res + y;
  res = res + a + b;
  console.log(res);
}
dq2(1, 5, b = 3);

var p = [];
p['fname'] = 'j';
p['lname'] = 'd';
p['age'] = 46;
var x = p.length;
var y = p[0];

console.log(p);
console.log(x);
console.log(y);

var cardsDeck = document.getElementById('cards-deck');

axios.get('./products.json').then((res) => {
  fillData(res.data);
})

function fillData(d) {
  // debugger;
  let html = ''
  for (f of d) {
    text = `<div class="col-2">
        <div class="card text-white bg-primary">
            <img class="card-img-top" src=${f.image} alt="">
            <div class="card-body">
              <h4 class="card-title">${f.title}</h4>
              <p class="card-text">"$"${f.price}</p>
              <button type="button" class="btn btn-light" click="details">View Details</button>
            </div>
          </div>
      </div>`
    html += text
  }
  cardsDeck.innerHTML = html
}

{
  /* <div class="col-2">
                  <div class="card text-white bg-primary">
                      <img class="card-img-top" src="holder.js/100px180/" alt="">
                      <div class="card-body">
                        <h4 class="card-title">Title</h4>
                        <p class="card-text">Text</p>
                        <button type="button" class="btn btn-light" click="details"></button>
                      </div>
                    </div>
                </div> */
}

// document.querySelector('#dataTable').addClass('table-striped').addClass('')

// document.querySelector('#dataTable').classList.add

// style(".menu")              // Returns the style object in a Proxy
//   .color("#fff")            // Updates color and returns a Proxy
//   .backgroundColor("#000")  // Updates bgColor and returns a Proxy
//   .opacity("1");            // ... and so on so forth

//   let styleProxy = {
//     get: (object, property) => {
//       return (value) => {
//         if (value) {
//           object[property] = value;
//           return new Proxy(object, styleProxy);
//         }
//         return object[property];
//       }
//     }
//   }

//   let style = (selector) => {
//     let element = document.querySelector(selector);

//     return new Proxy(element.style, styleProxy);
//   }

