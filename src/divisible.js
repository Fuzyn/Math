export const checkDivisibleNumber = (number, divisibleNumber) => {
    if (divisibleNumber === undefined){
        return ([`Brak dzielnika!`])
    }
    let tableDivisibleNumber = [];
    for (let i = 1; i <= number; i++) {
        if (i % divisibleNumber === 0) {
            tableDivisibleNumber.push(i)
        };
    };
    if (tableDivisibleNumber.length === 0) {
        return ([`Brak liczb podzielnych przez ${divisibleNumber}!`])
    };
    return (tableDivisibleNumber)
}