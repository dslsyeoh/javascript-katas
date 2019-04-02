const digit_pow = (number, pow) => {

    let total = String(number).split("").reduce((accumulator, currentValue, currentIndex) => accumulator + Math.pow(currentValue, pow + currentIndex), 0);
    return total % number == 0 ? total / number : -1;
}