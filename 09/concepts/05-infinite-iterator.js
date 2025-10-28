const rand = {
  [Symbol.iterator]: () => {
    return {
      next() {
        const done = Math.random() > 0.8;
        return {
          value: Math.random(),
          done,
        };
      },
    };
  },
};
