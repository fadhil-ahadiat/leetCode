/*
Given a positive integer n, return the smallest positive integer that is a multiple of both 2 and n.
*/

function smallestEvenMultiple(n: number): number {
    let container: number = 0;

    if (n % 2 == 0) {
        container += n;
    } else {
        container = x * n;
    }
    return container;
};

const x: number = 2;
let n: number = 5;
console.log(smallestEvenMultiple(n));
// Output: 10

n = 6;
console.log(smallestEvenMultiple(n));
// Output: 6

/*
Example 1:
Explanation: The smallest multiple of both 5 and 2 is 10.

Example 2:

Explanation: The smallest multiple of both 6 and 2 is 6. Note that a number is a multiple of itself.
*/