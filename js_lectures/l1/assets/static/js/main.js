// function evaluate() {
//     console.log(arguments[0], arguments[1]);
// }

// evaluate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Hey There!');

// let animal = {
//     kind: 'generic',
//     sound: '______',
//     speak: function () {
//         return this.kind + ' says ' + this.sound;
//     }
// }

// console.log(animal);


// let dog = {
//     kind: 'husky',
//     sound: 'whuff'
// }

// let baseCalculations = {
//     a: 0,
//     b: 0,
//     sum: function () {
//         return this.a + this.b;
//     },
//     multiply: function () {
//         return this.a * this.b;
//     },
//     subtract: function () {
//         return this.a - this.b;
//     }
// }

// let userResponse = {
//     a: 10,
//     b: 20
// }

// console.log(baseCalculations.sum());
// console.log(baseCalculations.sum.call(userResponse));

// // console.log(animal.speak.call(dog));

// // function fa () {

// //     // let x=10;
// //     function fb () {

// //         function fc () {
// //             console.log(this);
// //         }
// //     }
// // }

// function init() {
//     var name = 'Mozilla'; // name is a local variable created by init
//     function displayName() { // displayName() is the inner function, a closure
//         alert(name); // use variable declared in the parent function
//     }
//     displayName();
// }

// // init();

// function makeAdder(x) {
//     return function (y) {
//         return x + y;
//     };
// }

// let tmp = makeAdder(5);
// console.log(tmp(10));  


// let something = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let anObject = {name: 'John', age: 30, city: 'New York'};
// let aListofObjects = [{name: 'John', age: 30, city: 'New York'}, {name: 'John', age: 30, city: 'New York'}, {name: 'John', age: 30, city: 'New York'}];

// for (val in something) {
//     console.log(val);
// }

// for (key in anObject) {
//     console.log(key, anObject[key]);
// }

// for (val of aListofObjects) {
//     console.log(val);
// }

// something.forEach(function (val, index) {
//     console.log(val, index);
// });

// anObject.forEach((key, item) => {console.log(item);})

let resetBtn = document.getElementById('reset');
let displayField = document.getElementById('display');


resetBtn.addEventListener('click', function () {
    displayField.value = '';
});

function buttonPressed(v) {
    if (v === '=') {
        displayField.value = eval(displayField.value);
    } else if (v === 'DEL') {
        displayField.value = displayField.value.slice(0, -1);
    } else {
        displayField.value += v;
    }

}