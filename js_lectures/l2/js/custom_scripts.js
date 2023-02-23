// window.alert('Welcome to the Page!');
console.log("JavaScript file entry point");
var testVariable = 35;

function testFunc() {
  // console.log(e.innerText)
  console.log("Test Funct");
  console.log(testVariable);
  document.getElementById('output_p').innerText = 'Button Clicked!';
}


function reset() {
  document.getElementById('output_p').innerText = '';
}

showPic = () => {
  let parentNode = document.getElementsByClassName('pic_div')[0];
  if (parentNode.childElementCount === 0) {
    let imgNode = document.createElement('img');
    imgNode.src = './data/anonymous.jpg';
    imgNode.height = 200;
    imgNode.width = 128;
    imgNode.style.display = "inline-block";
    imgNode.style.marginLeft = "30px";
    imgNode.style.marginRight = "30px";
    imgNode.id = 'rImg'
    parentNode.appendChild(imgNode);
    reflectChange(0);
  } else {
    reflectChange(1);
  }
}

reflectChange = (ct) => {
  let elem = document.getElementById('refCh');
  if (ct === 0) {
    elem.innerText = 'Picture Displayed!';
  } else {
    elem.innerText = 'Already Displayed!';
  }
}

const getFormVals = function () {
  let formElem = document.getElementById('calc')
  debugger;
  let x = parseFloat(formElem[0].value);
  let y = parseFloat(formElem[1].value);
  let ops = formElem[2].value;
  switch (ops) {
    case "+":
      formElem[4].value = x + y;
  }
}


console.log("JavaScript file exit point");


let regEx = /^(([0-9]{5})(-)([0-9]{7})(-)([0-9]{1})){1}$/;
let inputs = ['38403-1234567-0',
  '38403-1234567-0 ',
  '38403-1234567-0 12345-1234567-0',
  'AB403-1234567-0'
];

function main(inp, errorHandler){

  if (inp > 10) {
    errorHandler();
  }

}

function numericErrors() {
  console.log('numericErrors');
}

function stringErrors() {
  console.log('stringErrors');
}

main(inp=11, errorHandler=numericErrors);


// let intervalHandler = () => {
//   let elem = document.getElementById('output_p');
//   elem.innerText += 'Interval Called! <br>';
// };

// setInterval(intervalHandler, 5000);


function Students(fname, lname, batch, age) {
  this.fname = fname;
  this.lname = lname;
  this.batch = batch;
  this.age = age;

  this.getFullName = function () {
    return this.fname + ' ' + this.lname;
  }
}

let goodStudent = new Students('Khuzaima', 'Abbasi', 'CS', 23);