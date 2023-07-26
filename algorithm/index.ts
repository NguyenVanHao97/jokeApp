/* eslint-disable no-console */

//hàm tính giá trị lớn nhất, nhỏ nhất của 4 phần tử  trong 1 mảng gồm 5 số

const findMinMax = (arr: number[]): {min: number; max: number} => {
  const sortedArr = arr.slice().sort((a, b) => a - b);

  const minSum = sortedArr[0] + sortedArr[1] + sortedArr[2] + sortedArr[3];
  const maxSum = sortedArr[1] + sortedArr[2] + sortedArr[3] + sortedArr[4];

  return {min: minSum, max: maxSum};
};

const arr: number[] = [10, 5, 8, 3, 6];
const {min, max} = findMinMax(arr);

console.log(`Giá trị nhỏ nhất của 4 phần tử là: ${min}`);
console.log(`Giá trị lớn nhất của 4 phần tử là: ${max}`);
