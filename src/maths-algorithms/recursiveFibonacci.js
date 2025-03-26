export const recursiveFibonacci = (n) => {
    if (n < 2) {
        return n
    }

    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

//Big-O = O(2^n) i.e. input reduce at 2 to the power of n