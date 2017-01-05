const app = {
  process: (operations, ...subjects) => {
    const ret = operations.reduce(
      (c, o) => {
        c[o.title] = subjects.map((s) => o.operation(s));
        return c;
      }, {});
    return ret;
  }
};

const ops = [
  { title: 'add kitten love', operation: (s) => `${s} loves kittens.` },
  { title: 'apply kitten love', operation: (s) => `${s} is loved by kittens.` }
];

var artifacts = app.process(ops, 'Jake', 'Tom', 'Tomasz');
console.log(artifacts);
