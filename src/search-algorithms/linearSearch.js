export const linearSearch = (arr, target) => {
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === target) {
            return index;
        }
    }
    return -1;
};

// Big-O = O(n) i.e. linear time complexity, where n is the size of the array.