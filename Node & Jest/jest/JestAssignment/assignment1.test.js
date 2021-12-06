var calc = require("./Assignment1");

test(' testing sub()', () =>{
    expect(calc.sub(6,4)).toBe(2);
    expect(calc.sub(4,6)).toBe(-2);
    expect(calc.sub(-6,4)).toBe(-10);
    expect(calc.sub(6,-4)).toBe(10);
})
test(' testing mult()', () =>{
    expect(calc.mult(6,4)).toBe(24);
    expect(calc.mult(4,-6)).toBe(-24);
    expect(calc.mult(-6,-4)).toBe(24);
    expect(calc.mult(-6,4)).toBe(-24);
})
test(' testing div()', () =>{
    expect(calc.div(6,4)).toBe(1.5);
    expect(calc.div(0,6)).toBe(0);
    expect(calc.div(-6,4)).toBe(-1.5);
    expect(calc.div(6,0)).toBe('Infinity');
})
