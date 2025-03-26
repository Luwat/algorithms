export const recursiveBinarySearch = (arr, target) => {
    return search(arr, target, 0, arr.length -1);
}

const search = (arr, target, leftIndex, rightIndex) => {
    if (leftIndex > rightIndex) {
        return -1;
    }

    const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[middleIndex]) {
        return middleIndex;
    }
    if (target < arr[middleIndex]) {
        return search(arr, target, leftIndex, middleIndex - 1);
    } else {
        return search(arr, target, middleIndex + 1, rightIndex);
    }
}

// Big-O = O(log n) i.e. logarithmic time complexity, where n is the size of the array.