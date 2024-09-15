function isPalindrome(x: number): boolean {
    let stringNum: string = "";
    stringNum = x.toString();
    
    for (let i: number = 0; i <= stringNum.length; i++) {
        if (stringNum[i] !== stringNum[stringNum.length - 1 - i]) {
            console.log(stringNum[i]);
            return false;
        }
    }
    return true;
};

let a: number = 121;
let b: number = -121;
let c: number = 10;

console.log(isPalindrome(a));
console.log(isPalindrome(b));
console.log(isPalindrome(c));