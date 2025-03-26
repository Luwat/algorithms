export const binarySearch = (arr, target) => {
    const sortedArray = arr.sort((a, b) => a - b);
    let leftIndex = 0;
    let rightIndex = sortedArray.length - 1;

    while (leftIndex <= rightIndex) {
        const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (target === sortedArray[middleIndex]) {
            return middleIndex;
        }

        if (target < sortedArray[middleIndex]) {
            rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex + 1;
        }
    }
    return -1;
}

//Big-O = O(log n) i.e. logarithmic time complexity