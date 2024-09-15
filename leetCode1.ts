// function createHelloWorld () {
//     const defaultMessage: string = "Hello World";

//     return function () {
//     };
// };

// const f = createHelloWorld();
// console.log(f());

// f([]);
// f([]);
// f({}, null, 42);

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */

const createHelloWorld = () => {

    const f = "Hello World"
    return f;
}

// const f = createHelloWorld();
// f(); // "Hello World"