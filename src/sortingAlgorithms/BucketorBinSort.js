export function getBucketSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    bucketSortHelper(array, animations);
    return animations;
}

function bucketSortHelper(array, animations) {
    const n = array.length;
    let maxVal = Math.max(...array);
    let bucketCount = Math.floor(Math.sqrt(n));
    let buckets = Array.from({ length: bucketCount }, () => []);

    // Place array elements into buckets
    for (let i = 0; i < n; i++) {
        let bucketIdx = Math.floor((array[i] / maxVal) * (bucketCount - 1));
        buckets[bucketIdx].push(array[i]);
    }

    // Sort individual buckets using insertion sort
    for (let i = 0; i < bucketCount; i++) {
        if (buckets[i].length > 0) {
            insertionSortBucket(buckets[i], animations);
        }
    }

    // Merge buckets back into the array
    let index = 0;
    for (let i = 0; i < bucketCount; i++) {
        for (let j = 0; j < buckets[i].length; j++) {
            animations.push([index, buckets[i][j]]); // Change height animation
            array[index++] = buckets[i][j];
        }
    }
}

function insertionSortBucket(bucket, animations) {
    for (let i = 1; i < bucket.length; i++) {
        let key = bucket[i];
        let j = i - 1;
        while (j >= 0 && bucket[j] > key) {
            animations.push([j, j + 1]); // Compare color change
            animations.push([j, j + 1]); // Revert color change
            animations.push([j + 1, bucket[j]]); // Swap
            bucket[j + 1] = bucket[j];
            j--;
        }
        animations.push([j + 1, i]); // Compare color change
        animations.push([j + 1, i]); // Revert color change
        animations.push([j + 1, key]);
        bucket[j + 1] = key;
    }
}
