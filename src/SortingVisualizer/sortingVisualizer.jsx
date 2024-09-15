import React from "react";
import { getMergeSortAnimations } from "../sortingAlgorithms/MergeSort.js";
import { getQuickSortAnimations } from "../sortingAlgorithms/QuickSort.js";
import { getHeapSortAnimations } from "../sortingAlgorithms/HeapSort.js";
import { getBubbleSortAnimations } from "../sortingAlgorithms/BubbleSort.js";
import { getInsertionSortAnimations } from "../sortingAlgorithms/InsertionSort.js";
import { getSelectionSortAnimations } from "../sortingAlgorithms/SelectionSort.js";
import { getCountSortAnimations } from "../sortingAlgorithms/CountSort.js";
import { getShellSortAnimations } from "../sortingAlgorithms/ShellSort.js";
import { getBucketSortAnimations } from "../sortingAlgorithms/BucketorBinSort.js";
import { getRadixSortAnimations } from "../sortingAlgorithms/RadixSort.js";
import { getTreeSortAnimations } from "../sortingAlgorithms/TreeSort.js";
import "./sortingVisualizer.css";

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 350;

// This is the main color of the array bars.
const PRIMARY_COLOR = "turquoise";

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = "red";

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { array: [] };
  }

  // Everytime the page loads or runs the resetArray() would be called.
  componentDidMount() {
    this.resetArray();
  }

  // Resetting the Array by generating random number between range of 5 to 720 and pushing it in array
  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 720));
    }
    this.setState({ array });
  }

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  quickSort() {
    const animations = getQuickSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange =
        animations[i][0] === "compare" || animations[i][0] === "pivot";

      if (isColorChange) {
        const [action, barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = action === "compare" ? SECONDARY_COLOR : PRIMARY_COLOR;

        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [action, barOneIdx, newHeight] = animations[i];
          if (action === "swap") {
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight}px`;
          }
        }, i * ANIMATION_SPEED_MS);
      }
    }
    setTimeout(() => {
      const arrayBars = document.getElementsByClassName("array-bar");
      for (let j = 0; j < arrayBars.length; j++) {
        arrayBars[j].style.backgroundColor = PRIMARY_COLOR;
      }
    }, animations.length * ANIMATION_SPEED_MS);
  }

  heapSort() {
    const animations = getHeapSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange =
        animations[i][0] === "compare" || animations[i][0] === "swap";

      if (isColorChange) {
        const [action, barOneIdx, barTwoIdx] = animations[i];

        // Ensure that the indices are valid
        if (barOneIdx < arrayBars.length && barTwoIdx < arrayBars.length) {
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const color = action === "compare" ? SECONDARY_COLOR : PRIMARY_COLOR;

          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * ANIMATION_SPEED_MS);
        }
      } else {
        setTimeout(() => {
          const [action, barOneIdx, newHeight] = animations[i];

          // Ensure that the index is valid
          if (barOneIdx < arrayBars.length) {
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight}px`;
          }
        }, i * ANIMATION_SPEED_MS);
      }
    }

    // Change the color of all bars back to PRIMARY_COLOR after the animation ends
    setTimeout(() => {
      const arrayBars = document.getElementsByClassName("array-bar");
      for (let j = 0; j < arrayBars.length; j++) {
        arrayBars[j].style.backgroundColor = PRIMARY_COLOR;
      }
    }, animations.length * ANIMATION_SPEED_MS);
  }

  bubbleSort() {
    const animations = getBubbleSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 4 < 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barIdx, newHeight] = animations[i];
          const barStyle = arrayBars[barIdx].style;
          barStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  insertionSort() {
    const animations = getInsertionSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");

      if (i % 3 === 0 || i % 3 === 1) {
        // Color change for comparison
        const [barOneIdx, barTwoIdx] = animations[i];
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          arrayBars[barOneIdx].style.backgroundColor = color;
          arrayBars[barTwoIdx].style.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        // Change the height of the bars
        setTimeout(() => {
          const [barIdx, newHeight] = animations[i];
          arrayBars[barIdx].style.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  shellSort() {
    const animations = getShellSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");

      if (i % 3 === 0 || i % 3 === 1) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          arrayBars[barOneIdx].style.backgroundColor = color;
          arrayBars[barTwoIdx].style.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barIdx, newHeight] = animations[i];
          arrayBars[barIdx].style.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  selectionSort() {
    const animations = getSelectionSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      setTimeout(() => {
        const arrayBars = document.getElementsByClassName("array-bar");
        if (!arrayBars || arrayBars.length === 0) {
          console.error("Array bars not found!");
          return;
        }

        const isColorChange = i % 3 !== 2;
        if (isColorChange) {
          const [barOneIdx, barTwoIdx] = animations[i];
          if (barOneIdx >= arrayBars.length || barTwoIdx >= arrayBars.length) {
            console.error("Index out of bounds for array bars!");
            return;
          }
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        } else {
          const [barOneIdx, newHeight] = animations[i];
          if (barOneIdx >= arrayBars.length) {
            console.error("Index out of bounds for array bars!");
            return;
          }
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }
      }, i * ANIMATION_SPEED_MS);
    }
  }

  countSort() {
    const { array } = this.state;
    const animations = getCountSortAnimations(array);
    const arrayBars = document.getElementsByClassName("array-bar");

    for (let i = 0; i < animations.length; i++) {
      const [barIdx, newHeight] = animations[i];
      const barStyle = arrayBars[barIdx].style;

      setTimeout(() => {
        barStyle.height = `${newHeight}px`;
        barStyle.backgroundColor =
          i % 2 === 0 ? PRIMARY_COLOR : SECONDARY_COLOR;
      }, i * ANIMATION_SPEED_MS);
    }
  }

  bucketSort() {
    const animations = getBucketSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");

      if (i % 3 === 0 || i % 3 === 1) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          if (arrayBars[barOneIdx] && arrayBars[barTwoIdx]) {
            arrayBars[barOneIdx].style.backgroundColor = color;
            arrayBars[barTwoIdx].style.backgroundColor = color;
          }
        }, i * ANIMATION_SPEED_MS);
      }
      else {
        setTimeout(() => {
          const [barIdx, newHeight] = animations[i];
          if (arrayBars[barIdx]) {
            arrayBars[barIdx].style.height = `${newHeight}px`;
          }
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  radixSort() {
    const animations = getRadixSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");

      if (i % 3 === 0 || i % 3 === 1) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          arrayBars[barOneIdx].style.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      }
      else {
        setTimeout(() => {
          const [barIdx, newHeight] = animations[i];
          arrayBars[barIdx].style.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  treeSort() {
    const animations = getTreeSortAnimations(this.state.array);
    const arrayBars = document.getElementsByClassName("array-bar");
    
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        if (barOneIdx >= arrayBars.length || barTwoIdx >= arrayBars.length) {
          continue; // Skip if indices are out of bounds
        }
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          if (barOneIdx >= arrayBars.length) {
            return;
          }
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }    

  render() {
    const { array } = this.state;
    return (
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
            }}
          ></div>
        ))}
        <div>
          <button className="button1" onClick={() => this.resetArray()}>Generate New Array</button>
          <button className="button1" onClick={() => this.mergeSort()}>Merge Sort</button>
          <button className="button1" onClick={() => this.quickSort()}>Quick Sort</button>
          <button className="button1" onClick={() => this.bubbleSort()}>Bubble Sort</button>
          <button className="button1" onClick={() => this.insertionSort()}>Insertion Sort</button>
          <button className="button1" onClick={() => this.selectionSort()}>Selection Sort</button>
          <button className="button1" onClick={() => this.heapSort()}>Heap Sort</button>
          <button className="button1" onClick={() => this.treeSort()}>Tree Sort</button>
          <button className="button1" onClick={() => this.shellSort()}>Shell Sort</button>
          <button className="button1" onClick={() => this.countSort()}>Count Sort</button>
          <button className="button1" onClick={() => this.bucketSort()}>Bucket/Bin Sort</button>
          <button className="button1" onClick={() => this.radixSort()}>Radix Sort</button>
        </div>
      </div>
    );
  }
}

// Generating Random Numbers between two numbers (included)
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}
