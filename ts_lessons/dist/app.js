"use strict";
let score = 20;
let firstName = 'John';
let isGameOver = false;
let scores = [10, 20, 30, 40];
let players = ['John', 'Jane', 'Mary'];
let mixedData = [10, 'John', true];
// Union types
let uid;
uid = '123';
uid = 123;
// uid = true; // Error
// enums
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 145] = "Up";
    Direction1[Direction1["Down"] = 146] = "Down";
    Direction1[Direction1["Left"] = 147] = "Left";
    Direction1[Direction1["Right"] = 148] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up); // 0
console.log(Direction1.Down); // 0
console.log(Direction1.Left); // 0
console.log(Direction1.Right); // 0
// Objects
const user = {
    uid: 1,
    firstName: 'John',
    isGameOver: false
};
let user1 = {
    uid: 1,
    firstName: 'John',
    isGameOver: false
};
// const point: IPoint = {x:11.2, y:12.3};
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    computeDistance(point) {
        return Math.sqrt(Math.pow(point.x - this.x, 2) + Math.pow(point.y - this.y, 2));
    }
}
const point1 = new Point(1, 2);
const point2 = new Point(3, 4);
console.log(point1.computeDistance(point2));
