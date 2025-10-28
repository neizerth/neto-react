const randomIterator = {
  next() {
    return {
      value: Math.random(),
      done: false,
    };
  },
};

randomIterator.next(); // { value: 0.7, done: false }
