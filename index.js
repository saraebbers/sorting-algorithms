function bubbleSort(array) {
  for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        [ array[i], array[i + 1] ] = [ array[i + 1], array[i] ]
      }
    }
  }
  return array;
}

function quickSort (unsortedArray) {
  const left = [];
  const right = [];
  
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }
  
  const pivot = unsortedArray.pop();

  unsortedArray.forEach( number => {
    if (number < pivot) {
      left.push(number);
      
    } else {
      right.push(number)
    }
  })
  
  return [ ...quickSort(left), pivot, ...quickSort(right) ];
}

module.exports = {
  bubbleSort,
  quickSort
};
