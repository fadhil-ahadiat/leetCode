/*
Given the string s, return the size of the longest substring containing each vowel an even number of times.
That is, 'a', 'e', 'i', 'o', and 'u' must appear an even number of times.
*/

function findTheLongestSubstring(s: string): number {
    
    const vowel: { [key: string]: number } = { 'a': 0, 'e': 1, 'i': 2, 'o': 3, 'u': 4 };
    let bitmask: number = 0;
    const firstAppear: { [key: number]: number } = { 0: -1 }; 
    let maxLength: number = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] in vowel) {
            bitmask ^= (1 << vowel[s[i]]);
        }

        if (bitmask in firstAppear) {
            maxLength = Math.max(maxLength, i - firstAppear[bitmask]);
        } else {
            firstAppear[bitmask] = i;
        }
    }

    return maxLength;
}

let s: string = "eleetminicoworoep"
console.log(findTheLongestSubstring(s));
// Output: 13

s = "leetcodeisgreat"
console.log(findTheLongestSubstring(s));
// Output: 5

s = "bcbcbc"
console.log(findTheLongestSubstring(s));
// Output: 6

/*
Example 1:

Explanation: The longest substring is "leetminicowor" which contains two each of the vowels:
e, i and o and zero of the vowels: a and u.

Example 2:
Explanation: The longest substring is "leetc" which contains two e's.

Example 3:
Explanation: In this case, the given string "bcbcbc" is the longest because all vowels:
a, e, i, o and u appear zero times.
 

Constraints:

1 <= s.length <= 5 x 10^5
s contains only lowercase English letters.
*/