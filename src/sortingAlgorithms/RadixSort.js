export function getRadixSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    radixSortHelper(array, animations);
    return animations;
  }
  
  function radixSortHelper(array, animations) {
    const maxNum = Math.max(...array); // Find the maximum number to know the number of digits
    let exp = 1; // Start with the least significant digit
    while (Math.floor(maxNum / exp) > 0) {
      countSort(array, exp, animations);
      exp *= 10; // Move to the next digit place
    }
  }
  
  function countSort(array, exp, animations) {
    const output = new Array(array.length).fill(0); // Output array
    const count = new Array(10).fill(0); // There are 10 possible digits (0-9)
  
    // Store the count of occurrences of each digit
    for (let i = 0; i < array.length; i++) {
      const index = Math.floor(array[i] / exp) % 10;
      count[index]++;
    }
  
    // Change count[] so that it contains the actual positions of the digits
    for (let i = 1; i < 10; i++) {
      count[i] += count[i - 1];
    }
  
    // Build the output array and create animations
    for (let i = array.length - 1; i >= 0; i--) {
      const index = Math.floor(array[i] / exp) % 10;
      output[count[index] - 1] = array[i];
  
      // Animation for overwriting the current array value
      animations.push([count[index] - 1, array[i]]);
  
      count[index]--;
    }
  
    // Copy the output array back to the original array
    for (let i = 0; i < array.length; i++) {
      array[i] = output[i];
  
      // Animation for the current sorted placement
      animations.push([i, output[i]]);
    }
  }
  