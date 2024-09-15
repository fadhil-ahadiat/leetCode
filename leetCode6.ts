function searchInsert(nums: number[], target: number): number {
    let x: number = 0;

    for (let i: number = 0; i < nums.length; i++) {
        console.log(nums[i]);
        if (nums[i] == target) {
            return i;

        } else if (target <= nums[i]) {
            return i;
        }    
    }
    return nums.length;
};

let nums: number[] = [1, 3, 5, 6]
let target: number = 5;
// output = 2;
console.log(searchInsert(nums, target));

nums = [1,3,5,6]
target = 2
// Output: 1
console.log(searchInsert(nums, target));

Input: nums = [1,3,5,6]
target = 7
// Output: 4
console.log(searchInsert(nums, target));