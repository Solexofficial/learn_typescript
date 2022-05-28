function foo(a: 1 | 10) {}

// foo('sds');

function insertAdjacentHTML(str: string, append: `${'after' | 'before'}${'begin' | 'end'}`) {}

insertAdjacentHTML('asd', 'afterbegin');
