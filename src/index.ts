let a: number = 1;
let b: bigint = 1n;
let c: string = 'asgasg';
let d: symbol = Symbol();
let e: boolean = true;
let f: null = null;
let g: undefined = undefined;
let o: object = [];

class MyArray extends Array {}

function foo(arr: Promise<string>) {}

foo(new Map([['asdsd', 3232]]));
