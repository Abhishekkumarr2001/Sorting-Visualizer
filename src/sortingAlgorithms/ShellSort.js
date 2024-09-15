export function getShellSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    shellSortHelper(array, animations);
    return animations;
}

function shellSortHelper(array, animations) {
    let n = array.length;
    let gap = Math.floor(n / 2);

    while (gap > 0) {
        for (let i = gap; i < n; i++) {
            let temp = array[i];
            let j = i;

            while (j >= gap && array[j - gap] > temp) {
                animations.push([j, j - gap]); // Compare color change
                animations.push([j, j - gap]); // Revert color change
                animations.push([j, array[j - gap]]); // Swap
                array[j] = array[j - gap];
                j -= gap;
            }

            animations.push([j, i]); // Compare color change
            animations.push([j, i]); // Revert color change
            animations.push([j, temp]); // Place temp in the correct spot
            array[j] = temp;
        }
        gap = Math.floor(gap / 2);
    }
}
