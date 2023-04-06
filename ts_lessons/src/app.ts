let score: number = 20;
let firstName: string = 'John';
let isGameOver: boolean = false;

let scores: number[] = [10, 20, 30, 40];
let players: string[] = ['John', 'Jane', 'Mary'];

let mixedData: any[] = [10, 'John', true];

// Union types
let uid: string | number;
uid = '123';
uid = 123;
// uid = true; // Error

// enums
enum Direction1 {
    Up=145,
    Down,
    Left,
    Right
}

console.log(Direction1.Up); // 0
console.log(Direction1.Down); // 0
console.log(Direction1.Left); // 0
console.log(Direction1.Right); // 0

// Objects
const user: {
    uid: number,
    firstName: string,
    isGameOver: boolean
}  = {
    uid: 1,
    firstName: 'John',
    isGameOver: false
}


// types
type User = {
    uid: number,
    firstName: string,
    isGameOver: boolean
} 

let user1: User = {
    uid: 1,
    firstName: 'John',
    isGameOver: false
}

// interfaces

interface IPoint {
    x: number,
    y: number,

    z?: number,

    computeDistance(point: IPoint): number
}

// const point: IPoint = {x:11.2, y:12.3};

class Point implements IPoint {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    computeDistance(point: IPoint): number {
        return Math.sqrt(Math.pow(point.x - this.x, 2) + Math.pow(point.y - this.y, 2));
    }
}

const point1 = new Point(1, 2);
const point2 = new Point(3, 4);
console.log(point1.computeDistance(point2));

// functions
function add(a: number, b: number): number {
    return a + b;
}

const add2 = (a: number, b: number): number => a + b;
const add3 = function(a: number, b: number): number {
    return a + b;
}

function some<T>(a: T, b: T): void {
    console.log(a, b);
}

some<string>(1, 2)


class Pixel extends Point {
    
    isRGB?: boolean | undefined;

    constructor(x: number, y: number) {
        super(x, y);
    }
}

const express = require('express');
import { Request, Response } from 'express';