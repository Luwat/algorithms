export const factorial = (n) => {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}

//Big-O = O(n) i.e. linear time complexity