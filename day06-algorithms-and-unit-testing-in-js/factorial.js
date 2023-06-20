function factorial(num) {
    if ([0, 1].includes(num)) {
        return 1;
    }
    return num * factorial(num - 1);
}

module.exports = factorial;
