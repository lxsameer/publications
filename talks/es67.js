let {x, y, ...vars} = {x: 1, y: 2, z: 3, _: 4};
let nums =
    () =>
    (function* (xs) {
      for (let i of xs)
      {let [arg1, arg2] = xs;
       yield i ** (arg1 + arg2)}
      yield* (for (c of [4, 5, 6]) if (c !== 4) c**c);
    })([1, 2, 3]);
for (let n of nums()) ::console.log('n:' + n);
::console.log([...nums()]);
