/*
# Task
Provide 3 unique implementations of the following function.
Input: `n` - any integer
Assuming this input will always produce a result lesser than `Number.MAX_SAFE_INTEGER`*.
Output: `return` - summation to `n`, i.e. `sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15`. */

const sum_to_n_a = function (n) {
  let sum = 0;

  for (let i = 1; i <= n; i += 1) {
    sum += i;
  }

  return sum;
};

const sum_to_n_b = function (n) {
  const sum = (n * (n + 1)) / 2;

  return sum;
};

const sum_to_n_c = function (n) {
  if (n <= 1) return n;

  return n + sum_to_n_c(n - 1);
};
