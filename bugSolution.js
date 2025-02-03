function foo(x) {
  if (x === 0) {
    return 0;
  } else if (x < 0) {
    return -1; // or handle it appropriately for negative numbers
  } else {
    return foo(x - 1);
  }
}
console.log(foo(10)); // this works fine
console.log(foo(-1)); // this will now return -1 instead of causing an error