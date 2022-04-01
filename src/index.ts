/* 
Экспериментальная фича декораторов
tsc --target ES5 --experimentalDecorators
*/

function deprecated(target, key, desc) {
  const fn = desc.value;

  return {
    ...desc,
    value: function () {
      console.log('Method is deprecated');
      return fn.apply(this, arguments);
    },
  };
}

function once(target, key, desc) {
  const NULL = {};

  let result = NULL;

  const fn = desc.value;

  return {
    ...desc,
    value: function () {
      if (result === NULL) {
        result = fn.apply(this, arguments);
      }

      return result;
    },
  };
}

class Foo {
  @once
  @deprecated
  foo(): number {
    return Math.random();
  }
}

const foo = new Foo();

console.log(foo.foo());
console.log(foo.foo());
console.log(foo.foo());
console.log(foo.foo());
