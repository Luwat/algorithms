export const isPowerOfTwoBitwise = (n) => {
    if (n < 1) {
        return false
    }
    return (n & (n - 1)) === 0
}

//Big-O = O(1) i.e. constant time complexity

export const isPowerOfTwo = (n) => {
    if (n < 1) {
        return false;
    }

    while (n > 1) {
        if (n % 2 !== 0) {
            return false;
        }
        n = n/2
    }

    return true
}

//Big-O = O(logn) i.e. input reduce by half