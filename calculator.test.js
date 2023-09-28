const Calculator = require('./calculator')


it('add 1 + 2 to equel 3', () => {
    const calculator = new Calculator();
    expect(calculator.add(1, 2)).toBe(3)
})

it('subtract 1 - 2 to equel -1', () => {
    const calculator = new Calculator();
    expect(calculator.subtract(1, 2)).toBe(-1)
})


it('multiply 2 * 2 to equel -1', () => {
    const calculator = new Calculator();
    expect(calculator.multiply(2, 2)).toBe(4)
})

it('divide 2 / 2 to equel -1', () => {
    const calculator = new Calculator();
    expect(calculator.divide(2, 2)).toBe(1)
})

it("should throw an error 3/ 0 throws", () => {
    const calculator = new Calculator();
    expect(() => {

        expect(calculator.divide(3, 0));
    }).toThrow();

});
