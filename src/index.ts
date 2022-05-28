function foo(a: 1 | 10) {}

// foo('sds');

const a: unique symbol = Symbol('foo');
const b: unique symbol = Symbol('bla');
let c = Symbol('baz');

function insertAdjacentHTML(str: string, append: typeof a | typeof b) {}

insertAdjacentHTML('asd', c);
