function calculateEvenTotal(number) {
    let i = 0;
    let sum = 0;
    while (i < number) {
        i += 1;
        if (i % 2 == 0) {
            sum += i;
        }
    }
    console.log(sum);
}

function calculateTotal(number) {
    let i = 0;
    let sum = 0;
    while (i < number) {
        i += 1;
        sum += i;
    }
    console.log(sum);
}

calculateTotal(0)
calculateTotal(7)
calculateTotal(18)
calculateTotal(24)