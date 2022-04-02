let a: number = 1;
let b: bigint = 1n;
let c: string = 'asgasg';
let d: symbol = Symbol();
let e: boolean = true;
let f: null = null;
let g: undefined = undefined;
let o: object = [];

class MyArray extends Array {}

function foo(arr: string[]) {}

foo(new MyArray());

class Bla {
  bar: string = '123';

  foo(): number {
    return 1;
  }
}

// function getBla(a: typeof Bla) {}
function getBla(a: Bla) {}

// getBla(Bla);
getBla(new Bla());
