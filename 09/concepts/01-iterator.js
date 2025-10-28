const randomIterator = {
  next() {
    return {
      value: 777,
      done: true,
    };
  },
};

randomIterator.next(); // { value: 777, done: true }
