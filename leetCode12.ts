/*
Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".
*/

// let _string: string = "An apple a day keeps the doctor away";

// console.log(_string.replace(/a/gi, "*"));

function defangIPaddr(address: string): string {
    return address.replace(/\./g, "[.]");
};

let address: string = "1.1.1.1"
console.log(defangIPaddr(address));
// expected "1[.]1[.]1[.]1"

address = "255.100.50.0"
console.log(defangIPaddr(address));
// expected "255[.]100[.]50[.]0"