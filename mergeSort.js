function mergeSort(array){
  if (array.length <= 1) return array;

  const midIndex = Math.floor(array.length / 2);
  const leftHalf = mergeSort(array.slice(0,midIndex));
  const rightHalf = mergeSort(array.slice(midIndex));
  return merge(leftHalf,rightHalf);
}

function merge(leftHalf,rightHalf){
  const result = [];

  while (leftHalf.length > 0 && rightHalf.length > 0) {
    const arrayWithSmallerElem = leftHalf[0] < rightHalf[0] ? leftHalf : rightHalf;
    const smallerElem = arrayWithSmallerElem.shift();
    result.push(smallerElem);
  }

  return result.concat(leftHalf,rightHalf);
}
