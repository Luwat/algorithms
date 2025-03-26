export const recursiveFactorial = (n) => {
    if (n === 0) {
        return 1
    }
    return n * recursiveFactorial(n - 1);
}

//Big-O = O(sqrt(n)) i.e. linear time complexity