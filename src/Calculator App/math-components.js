const validate = (i1, i2) => {
    if (isNaN(i1) || isNaN(i2)) throw new Error("Invalid inputs!");
};

const add = (i1, i2) => { validate(i1, i2); return i1 + i2; };
const sub = (i1, i2) => { validate(i1, i2); return i1 - i2; };
const mul = (i1, i2) => { validate(i1, i2); return i1 * i2; };
const div = (i1, i2) => {
    validate(i1, i2);
    if (i2 === 0) return "undefined (÷ by 0)";
    return i1 / i2;
};

export { add, sub, mul, div };