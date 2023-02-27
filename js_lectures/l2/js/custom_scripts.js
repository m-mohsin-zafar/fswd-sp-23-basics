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
}

Students.prototype.getFullName = function () {
    return this.fname + ' ' + this.lname;
}

function PGStudents(fname, lname, batch, age, thesis) {
  Students.call(this, fname, lname, batch, age);
  this.thesis = thesis;
}
PGStudents.prototype = Object.create(Students.prototype);

let pgStudent = new PGStudents('Khuzaima', 'Abbasi', 'CS', 23, 'Deep Learning based blah blah..');
let goodStudent = new Students('Khuzaima', 'Abbasi', 'CS', 23);


class Student {
  constructor(fname, lname, batch, age) {
    this.fname = fname;
    this.lname = lname;
    this.batch = batch;
    this.age = age;
  }

  getFullName() {
    return this.fname + ' ' + this.lname;
  }
  get getAge() {
    return this.age;
  }
  set setAge(age) {
    this.age = age;
  }
}

let student = new Student('Khuzaima', 'Abbasi', 'CS', 23);

class PGStudent extends Student {
  constructor(fname, lname, batch, age, thesis) {
    super(fname, lname, batch, age);
    this.thesis = thesis;
  }
}

let i1 = [1, 2, 3, 4];
let i2 = ['A', 'B', 'C', 'D'];
console.log([...i1, ...i2])

function samForSpread(name, height, weight){
  text = `Name: ${name}\nHeight: ${height}\nWeight: ${weight}`;
  console.log(text);
}

let person = ['Khuzaima', 5.8, 70];

samForSpread(...person);

function samForRest(...anyNumOfArgs){
  let sumOfSquares = 0;
  sumOfSquares = anyNumOfArgs.reduce((acc, currVal) =>{
    return acc + (currVal**2) ;
  }, 0);
  return sumOfSquares;
}

console.log(samForRest(2, 3, 4));
console.log(samForRest(2, 3, 4, 5, 6));
console.log(samForRest(20, 4, 5, 9, 11, 13));