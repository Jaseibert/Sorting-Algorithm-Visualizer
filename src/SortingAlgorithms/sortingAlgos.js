export const getBubbleBars = array => {
  let bars = [];
  bubbleSort(array, bars)
  return bars
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

export const quickSort = array => {}

export const bubbleSort = (array, bars) => {
  let isSorted = false;
  let counter = 0;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < array.length - 1 - counter; i++) {
      bars.push([i, i + 1])
      bars.push([i, i + 1])
      if (array[i] > array[i + 1]) {
        swap(i, i+1, array);
        isSorted = false;
        bars.push([i, array[i + 1]])
      } else {
        bars.push([i, array[i]])
      }
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