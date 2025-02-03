function foo(x){
  if (x == 0) {
    return 0;
  } else {
    return foo(x - 1);
  }
}
console.log(foo(10)); // this works fine
console.log(foo(-1)); //this will cause a stack overflow error because it will call itself infinitely