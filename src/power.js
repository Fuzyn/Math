export const checkPower = (number, powerNumber) => {
    if (powerNumber === undefined){
        return ([`Brak określonej potęgi!`])
    }
    let tableDivisibleNumber = [];
    for (let i = 1; i <= powerNumber; i++) {
        tableDivisibleNumber.push(Math.pow(number,i))
    };
    return tableDivisibleNumber
}