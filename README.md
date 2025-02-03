# Stack Overflow Bug in Recursive JavaScript Function

This repository demonstrates a common error in JavaScript: stack overflow errors caused by infinite recursion.  The `bug.js` file contains a recursive function that works correctly for positive inputs but crashes for negative ones. The solution, `bugSolution.js`, shows how to fix this by adding a base case to handle negative inputs.

## How to Reproduce

1. Clone the repository.
2. Open `bug.js` and run it in a JavaScript environment (like a browser's console or Node.js).
3. Call the `foo` function with a positive integer (e.g., `foo(10)`). It will execute successfully.
4. Call the `foo` function with a negative integer (e.g., `foo(-1)`). This will result in a stack overflow error.

## Solution

The `bugSolution.js` file provides a corrected version of the function, which handles negative inputs gracefully and prevents the stack overflow.