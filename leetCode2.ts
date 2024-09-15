function bowlingWinner(player1: number[], player2: number[]): number {
    function calculateScore(player: number[]): number {
        let score = 0;
        for (let i = 0; i < player.length; i++) {
            let currentScore = player[i];

            if (i > 0 && player[i - 1] === 10) {
                currentScore *= 2;
            }
            if (i > 1 && player[i - 2] === 10) {
                currentScore *= 2;
            }

            score += currentScore;
        }
        return score;
    }

    const score1 = calculateScore(player1);
    const score2 = calculateScore(player2);

    if (score1 > score2) {
        return 1;
    } else if (score2 > score1) {
        return 2;
    } else {
        return 0;
    }
}

// Contoh Penggunaan:
const player1 = [10, 5, 10, 2];
const player2 = [5, 10, 10, 2];
console.log(bowlingWinner(player1, player2)); // Output: 2


function myPhone(phone: string): string {
   return `My Phone is ${phone}`
}

console.log(myPhone("Samsung"));

let a: number = 0;
let b: number = 1;
let fib: string[];

function fibSeq(x: number, y: number) {
    
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */

function canAliceWin(nums: number[]): boolean {
    let a: number = 0, b: number = 0

    for (let i of nums) {
        if (i >= 10) {
            a += i;
        } else {
            b += i;
        }
    }
    return a !== b;
};

console.log(canAliceWin([1, 2, 3, 4, 10]));
console.log(canAliceWin([1, 2, 3, 4, 5, 14]));
console.log(canAliceWin([5, 5, 5, 25]));

// ---

// function isPalindrome(x: number): boolean {
//     let a: number
// };

// let asa = "121";
// asa = asa.toString();
// console.log(asa);
// asa = asa.split('');
// console.log(asa);

let x = 121

    // function isPalindrome(x: number): boolean {
    //     let a: number = 0, b: number = 0

    //     x = x.toString();
        
    //     for (let i: number = 1; i <= x; i++) {

    //     }
    // };