const hello = 'world';
console.log(hello);

function foo(a: string, b: number): number {
  return Number(a) + b;
}

foo('2', 5).toFixed();
typeof NaN;

// number // double IEE754 -> memory 64bit
// bigInt

// string UTF-16 (each symbol 16bit), emoji - суррогатная пара, 2 символа.
function tag() {
  console.log(arguments);
}

// tag(`34334 ${1 + 2}`);

// boolean
// true 0000 0001
// false 0000 0000

//symbol
// null
// undefined

//object
