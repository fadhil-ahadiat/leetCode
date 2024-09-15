/*
Assume you are an awesome parent and want to give your children some cookies.
But, you should give each child at most one cookie.

Each child i has a greed factor g[i], which is the minimum size of a cookie that
the child will be content with; and each cookie j has a size s[j].
If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be content.
Your goal is to maximize the number of your content children and output the maximum number.
*/

function findContentChildren(g: number[], s: number[]) {
    g.sort((a: number, b: number) => a - b);
    s.sort((a: number, b: number) => a - b);
    
    let countCookie: number = 0;
    let greed: number = 0

    for (countCookie = 0; countCookie < s.length && greed < g.length; countCookie++) {
            if (s[countCookie] >= g[greed]) {
                greed++;
        }
    }
    return greed;
};

let g = [10, 9, 8, 7];
let s = [5, 6, 7, 8];
console.log(findContentChildren(g, s));
// expected 2;

// let g: number[] = [1,2,3];
// let s: number[] = [1,1];
// console.log(findContentChildren(g, s));
// // expected 2;


// g = [1, 2];
// s = [1, 2, 3];
// console.log(findContentChildren(g, s));
// // expected 2;
console.log(findContentChildren(g, s));
// expected 2;

/*
Explanation: You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3. 
And even though you have 2 cookies, since their size is both 1, you could only make the child whose greed factor is 1 content.
You need to output 1.
*/