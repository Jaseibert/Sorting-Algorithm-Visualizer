
// Apply a Sorting Algorithm
export const applySort = (array, type) => {
  let bars = [];
  switch (type) {
    case 'bubble':
      bubbleSort(array, bars);
      return bars;
    case 'quick':
      quickSort(array, bars);
      return bars;
    default:
      break
  }
}

export const mergeSort = array => {
  if (array.length === 1) {
    return array
  }
  const middleIdx = Math.floor(array.length / 2)
  const leftHalf = array.slice(0, middleIdx)
  const rightHalf = array.slice(middleIdx, array.length - 1)
  mergeSort(rightHalf)
  mergeSort(leftHalf)
}

// Quick Sort Algorithm
export const quickSort = (array, bars) =>  {
	quickSortHelper(array, 0, array.length - 1, bars);
	return array;
}

// Quick Sort Helper
//Still need to fix colors
const quickSortHelper = (array, startIdx, endIdx, bars) => {
	if (startIdx >= endIdx) return;
	const pivotIdx = startIdx;
	let leftIdx = startIdx + 1;
  let rightIdx = endIdx;
  bars.push([leftIdx, rightIdx, pivotIdx]);
	while (rightIdx >= leftIdx) {
    bars.push([leftIdx, rightIdx]);
		if (array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]) {
      bars.push([leftIdx, array[rightIdx], rightIdx, array[leftIdx]]);
      swap(leftIdx, rightIdx, array)
		} else {
      bars.push([leftIdx, array[leftIdx], rightIdx, array[rightIdx]]);
    }
		if (array[leftIdx] <= array[pivotIdx]) leftIdx++;
    if (array[rightIdx] >= array[pivotIdx]) rightIdx--;
    bars.push([leftIdx, rightIdx]);
  }
  swap(pivotIdx, rightIdx, array);
  bars.push([pivotIdx, array[pivotIdx], rightIdx, array[rightIdx]]);
  bars.push([leftIdx, rightIdx]);
	const leftSubarrayIsSmaller = rightIdx - 1 - startIdx < endIdx - (rightIdx + 1);
	if (leftSubarrayIsSmaller) {
		quickSortHelper(array, startIdx, rightIdx - 1, bars);
		quickSortHelper(array, rightIdx + 1, endIdx, bars);
	} else {
		quickSortHelper(array, rightIdx + 1, endIdx, bars);
		quickSortHelper(array, startIdx, rightIdx - 1, bars);
  }
}

// Bubble Sort Algorithm
export const bubbleSort = (array, bars) => {
  let counter = 0;
  let isSortedArray = false;
  while (!isSortedArray) {
    isSortedArray = true;
    for (let i = 0; i < array.length - counter; i++) {
      bars.push([i, i + 1])
      if (array[i] > array[i + 1]) {
        bars.push([i, array[i + 1], i + 1, array[i]]);
        swap(i, i+1, array);
        isSortedArray = false;
      } else {
        bars.push([i, array[i], i + 1, array[i + 1]]);
        isSortedArray = false;
      }
      bars.push([i, i + 1]);
    } 
    counter++;
  }
  return array;
}

 const swap = (i, j, array) => {
   const temp = array[j]
   array[j] = array[i]
   array[i] = temp
 }