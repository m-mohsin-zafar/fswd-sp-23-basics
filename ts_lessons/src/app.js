var score = 20;
var firstName = 'John';
var isGameOver = false;
var scores = [10, 20, 30, 40];
var players = ['John', 'Jane', 'Mary'];
var mixedData = [10, 'John', true];
// Union types
var uid;
uid = '123';
uid = 123;
// uid = true; // Error
// enums
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up); // 0
