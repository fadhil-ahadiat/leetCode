/*
You are given a string s. The score of a string is defined as the sum of the absolute difference
between the ASCII values of adjacent characters.

Return the score of s.
*/

function scoreOfString(s: string): number {
    let score: number = 0;

    for (let i: number = 0; i < s.length - 1; i++) {
        score += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1))
    }
    return score;
};
 
let s: string = "hello"
console.log(scoreOfString(s));
// expected: 13;

s = "zaz"
console.log(scoreOfString(s));

/*
Example 1:

Explanation:
The ASCII values of the characters in s are: 'h' = 104, 'e' = 101, 'l' = 108, 'o' = 111.
So, the score of s would be |104 - 101| + |101 - 108| + |108 - 108| + |108 - 111| = 3 + 7 + 0 + 3 = 13.
*/