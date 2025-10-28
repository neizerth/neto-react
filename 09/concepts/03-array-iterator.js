const data = [4, 5, 6];

const iterator = data[Symbol.iterator]();

iterator.next(); // { value: 4, done: false }
iterator.next(); // { value: 5, done: false }
iterator.next(); // { value: 6, done: true }
