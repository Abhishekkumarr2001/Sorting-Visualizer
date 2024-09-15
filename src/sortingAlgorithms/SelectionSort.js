export function getSelectionSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return animations;
  
    for (let i = 0; i < array.length - 1; i++) {
      let minIdx = i; // Start with the first element as the minimum
  
      // Find the minimum element in the unsorted part
      for (let j = i + 1; j < array.length; j++) {
        animations.push([minIdx, j]); // Compare minIdx and j
        animations.push([minIdx, j]); // Revert color change
        
        if (array[j] < array[minIdx]) {
          minIdx = j;
        }
      }
  
      // Swap the found minimum element with the first element
      if (minIdx !== i) {
        animations.push([i, array[minIdx]]); // Update the height of i
        animations.push([minIdx, array[i]]); // Update the height of minIdx
  
        const temp = array[i];
        array[i] = array[minIdx];
        array[minIdx] = temp;
      }
    }
  
    return animations;
  }
  