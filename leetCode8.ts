/*
You are given a string allowed consisting of distinct characters and an array of strings words.
A string is consistent if all characters in the string appear in the string allowed.

Return the number of consistent strings in the array words.
*/

function countConsistentStrings(allowed: string, words: string[]): number {
    let x: number = 0;

    for (let i of words) {
        let isAllowed = true;

        for (let j of i) {
            if (!allowed.includes(j)) {
                isAllowed = false;
                
                break;
            }
        }
        if (isAllowed) {
            x++;
        }
    }
    return x;
};

let allowed: string = "ab";
let words: string[] = ["ad", "bd", "aaab", "baa", "badab"];
countConsistentStrings(allowed, words);

allowed = "abc";
words = ["a", "b", "c", "ab", "ac", "bc", "abc"];
countConsistentStrings(allowed, words);

allowed = "cad";
words = ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"];
countConsistentStrings(allowed, words);

/*
Output: 2
Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.
*/
