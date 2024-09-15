function twoSum(nums: number[], target: number): number[] {
    for (let i: number = 0; i <= nums.length; i++) {

        for (let j: number = i + 1; j <= nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                console.log([i, j]);
                return [i, j];
            }
        }
    }
    return [];
};

let nums: number[] = [2, 7, 11, 15];
let target: number = 9
console.log(twoSum(nums, target));

nums = [3, 2, 4];
target = 6;
console.log(twoSum(nums,target));

nums = [3, 3];
target = 6;
console.log(twoSum(nums, target));

let x = " mama mi a"
x.trim();
console.log(x);

let s = "   fly me   to   the moon  "
console.log(s.split(" "));

function lengthOfLastWord(a: string) {
    let len = 0;
 
    // String a is 'final'-- can
    // not be modified So, create
    // a copy and trim the
    // spaces from both sides
    x = a.trim();
 
    for (let i = 0; i < x.length; i++) {
        if (x[i] == ' ') {
            len = 0;
        }
        else {
            len++;
        }
    }
 
    return len;
}

console.log(lengthOfLastWord("Ma ma  mia   "));