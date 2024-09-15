function plusOne(digits: number[]): number[] {

    for (let i: number = digits.length - 1; i >= 0; i--) {
        digits[i] += 1;

        if (digits[i] < 10) {
            return digits;
        } else {
            digits[i] = 0;
        }
    }
    digits.unshift(1);
    return digits;
};

let digits: number[] = [1, 2, 3]
// Output: [1,2,4]
console.log(plusOne(digits));

digits = [4, 3, 2, 1]
// Output: [4,3,2,2]
console.log(plusOne(digits));

digits = [9]
//Output: [1,0]
console.log(plusOne(digits));