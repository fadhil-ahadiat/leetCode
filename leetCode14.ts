/*
A decimal number is called deci-binary if each of its digits is either 0 or 1 without any leading zeros.
For example, 101 and 1100 are deci-binary, while 112 and 3001 are not.

Given a string n that represents a positive decimal integer,
return the minimum number of positive deci-binary numbers needed so that they sum up to n.
*/

function minPartitions(n: string): number {
    
    let digits = n.split('').map(digit => parseInt(digit));

    let digitMax = Math.max(...digits);

    return digitMax;
};

let n: string = "32";
console.log(minPartitions(n));
// Output: 3;

n = "82734";
console.log(minPartitions(n));
// Output: 8;

n = "27346209830709182346";
console.log(minPartitions(n));
// Output: 9;

/*
Example 1:
Explanation: 10 + 11 + 11 = 32
*/