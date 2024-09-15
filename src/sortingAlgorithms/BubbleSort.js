export function getBubbleSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    bubbleSortHelper(array, animations);
    return animations;
  }
  
  function bubbleSortHelper(array, animations) {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        // Push comparison animation.
        animations.push([j, j + 1]);
        animations.push([j, j + 1]);
        if (array[j] > array[j + 1]) {
          // Push swap animation.
          animations.push([j, array[j + 1]]);
          animations.push([j + 1, array[j]]);
          // Swap the elements.
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        } else {
          // Push animations for no swap case.
          animations.push([j, array[j]]);
          animations.push([j + 1, array[j + 1]]);
        }
      }
    }
  }
  