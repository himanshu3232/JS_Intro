function primeFactors(N) {
    if (N < 2) return "No prime factors";
    let factors = [];

    while (N % 2 === 0) {
        factors.push(2);
        N /= 2;
    }

    for (let i = 3; i * i <= N; i += 2) {
        while (N % i === 0) {
            factors.push(i);
            N /= i;
        }
    }

    if (N > 2) {
        factors.push(N);
    }

    return factors;
}

const number = parseInt(prompt("Enter a number: "));
console.log(`Prime factors of ${number} are:`, primeFactors(number));
