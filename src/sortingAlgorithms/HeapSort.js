export function getHeapSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return animations;
  
    heapSortHelper(array, animations);
    return animations;
  }
  
  function heapSortHelper(mainArray, animations) {
    const n = mainArray.length;
  
    // Build the max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(mainArray, n, i, animations);
    }
  
    // Extract elements from the heap one by one
    for (let i = n - 1; i > 0; i--) {
      // Swap the current root (maximum element) with the end element
      animations.push(['swap', 0, i]); // Swap indices, not values
      [mainArray[0], mainArray[i]] = [mainArray[i], mainArray[0]];
  
      // Heapify the reduced heap
      heapify(mainArray, i, 0, animations);
    }
  }
  
  function heapify(mainArray, heapSize, rootIdx, animations) {
    let largest = rootIdx;
    const leftChild = 2 * rootIdx + 1;
    const rightChild = 2 * rootIdx + 2;
  
    // If the left child is larger than the root
    if (leftChild < heapSize) {
      animations.push(['compare', leftChild, largest]); // Compare left child and root
      animations.push(['compare', leftChild, largest]); // Revert color change
      if (mainArray[leftChild] > mainArray[largest]) {
        largest = leftChild;
      }
    }
  
    // If the right child is larger than the largest so far
    if (rightChild < heapSize) {
      animations.push(['compare', rightChild, largest]); // Compare right child and current largest
      animations.push(['compare', rightChild, largest]); // Revert color change
      if (mainArray[rightChild] > mainArray[largest]) {
        largest = rightChild;
      }
    }
  
    // If the largest is not the root
    if (largest !== rootIdx) {
      animations.push(['swap', rootIdx, largest]); // Swap indices, not values
      [mainArray[rootIdx], mainArray[largest]] = [mainArray[largest], mainArray[rootIdx]];
  
      // Recursively heapify the affected subtree
      heapify(mainArray, heapSize, largest, animations);
    }
  }
  