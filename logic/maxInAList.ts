//This code is create to find what element is more repited in a list
export function maxInAList(arr: number[]): number | null {
    if (arr.length === 0) {
        return null; // Return null for empty array
    }

    const frequencyMap: { [key: number]: number } = {};
    let maxCount = 0;
    let maxElement = arr[0];

    for (const num of arr) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;

        if (frequencyMap[num] > maxCount) {
            maxCount = frequencyMap[num];
            maxElement = num;
        }
    }

    return maxElement;
}

// Example usage:
const numbers = [1, 3, 2, 3, 4, 3, 5, 1];
console.log( "The most repited number is: "+ maxInAList(numbers)); 