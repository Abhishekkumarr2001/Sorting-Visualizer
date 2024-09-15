export function getCountSortAnimations(array) {
    const animations = [];
    const max = Math.max(...array);
    const count = new Array(max + 1).fill(0);
    const output = new Array(array.length);

    // Count occurrences of each element
    for (const num of array) {
        count[num]++;
    }

    // Update the count array to store the cumulative count
    for (let i = 1; i <= max; i++) {
        count[i] += count[i - 1];
    }

    // Build the output array
    for (let i = array.length - 1; i >= 0; i--) {
        const num = array[i];
        const index = count[num] - 1;
        output[index] = num;
        count[num]--;
        animations.push([i, output[index]]); // For visualization
    }

    return animations;
}
