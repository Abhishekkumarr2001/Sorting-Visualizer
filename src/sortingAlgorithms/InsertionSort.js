export function getInsertionSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    insertionSortHelper(array, animations);
    return animations;
  }
  
  function insertionSortHelper(array, animations) {
    for (let i = 1; i < array.length; i++) {
      let key = array[i];
      let j = i - 1;
  
      // Compare the current element with the sorted portion
      while (j >= 0 && array[j] > key) {
        // Push animations to change color for comparison
        animations.push([j, j + 1]); // Compare color change
        animations.push([j, j + 1]); // Revert color change
  
        // Push animations to swap elements
        animations.push([j + 1, array[j]]); 
        array[j + 1] = array[j];
        j--;
      }
  
      // Push animation for placing the key in the correct position
      animations.push([j + 1, i]); // Compare color change
      animations.push([j + 1, i]); // Revert color change
      animations.push([j + 1, key]);
      array[j + 1] = key;
    }
  }
  