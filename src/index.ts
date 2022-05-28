let o: object = [];

function foo(a: string | number | string[]) {
  if (isArray(a)) {
    a[0].trim();
  }
}

function isArray(obj: unknown): obj is Array<unknown> {
  return Array.isArray(obj) && typeof obj[0] === 'string';
}
