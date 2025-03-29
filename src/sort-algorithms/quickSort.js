export function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    const pivot = arr[arr.length - 1]
    let left = []
    let right = []
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}

//Big-O = O(nlogn) at average case complexity or at worse case O(n^2) i.e. quadratic.