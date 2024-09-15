/*
You are given a non-negative floating point number rounded to two decimal places celsius,
that denotes the temperature in Celsius.
You should convert Celsius into Kelvin and Fahrenheit and return it as an array ans = [kelvin, fahrenheit].
Return the array ans. Answers within 10-5 of the actual answer will be accepted.

Note that:
Kelvin = Celsius + 273.15
Fahrenheit = Celsius * 1.80 + 32.00
*/

function convertTemperature(celsius: number): number[] {
    let ans: number[] = [];

    return ans = [(celsius + 273.15), ((celsius * 1.80) + 32.00)];
};  

let celsius: number = 36.50;
console.log(convertTemperature(celsius));
// expected [309,65000, 97.70000]

celsius = 122.11;
console.log(convertTemperature(celsius))
// expected [395.26000,251.79800]

/*
Input: celsius = 36.50
Output: [309.65000,97.70000]
Explanation: Temperature at 36.50 Celsius converted in Kelvin is 309.65 and converted in Fahrenheit is 97.70.
*/