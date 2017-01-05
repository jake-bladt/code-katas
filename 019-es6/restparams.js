const app = {
  process: (operations, ...subjects) => {
    const ret = operations.map((o) => o.title);
    return ret;
  }
}

const ops = [
  { title: 'add kitten love', operation: (s) => `${s} loves kittens.` },
  { title: 'apply kitten love', operation: (s) => `{s} is loved by kittens.` }
];


