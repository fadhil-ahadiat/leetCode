function lengthOfLastWord(s: string): number {
    let output: number = 0;
    let x = s.trim()

    for (let i: number = 0; i < x.length; i++) {
        if (x[i] == " ") {
            output = 0;
        } else {
            output++;
        }
    }
    return output;
};

let s: string = "Hello World";
console.log(lengthOfLastWord(s));

s = "   fly me   to   the moon  "
console.log(lengthOfLastWord(s));

s = "luffy is still joyboy"
console.log(lengthOfLastWord(s));