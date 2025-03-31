export function cartesianProduct(arr1, arr2) {
    const result = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            result.push([arr1[i], arr2[j]])
        }
    }

    return result;
}

//Big-O = O(mn) if the length are not the same, but will be O(n^2) if the length is the same.