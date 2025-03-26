// export const isPrime = (n) => {
//     if (n < 2) {
//         return false;
//     }

//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }

//Big-O = O(n) i.e. linear time complexity

export const isPrime = (n) => {
    if (n < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

//Big-O = O(sqrt(n)) i.e. linear time complexity