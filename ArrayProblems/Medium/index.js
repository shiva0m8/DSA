//1. Two Sum : Check if a pair with given sum exists in Array

//approach 1 using 2 nested loops

//approach 2 using hashing

function twoSumUsingHashing(arr, k) {
	let index1 = -1;
	let index2 = -1;
	let isExist = "No";
	let hashMap = new Map();
	for (let i = 0; i < arr.length && isExist === "No"; i++) {
		let diff = k - arr[i];
		if (hashMap.get(diff) !== undefined) {
			index1 = hashMap.get(diff);
			index2 = i;
			isExist = "Yes";
		} else {
			hashMap.set(arr[i], i);
		}
	}
	return index1 + ", " + index2 + ", " + isExist;
}

//console.log(twoSumUsingHashing([2, 7, 11, 15], 9));

//approach 3 using two pointers

function twoSumUsingTwoPointers(arr, k) {
	//sort the array //currently assuming it is sorted
	let minIndex = 0;
	let maxIndex = arr.length - 1;
	while (minIndex < maxIndex) {
		if (arr[minIndex] + arr[maxIndex] === k) {
			return minIndex + ", " + maxIndex + ", Yes";
		} else if (arr[minIndex] + arr[maxIndex] > k) {
			maxIndex--;
		} else if (arr[minIndex] + arr[maxIndex] < k) {
			minIndex++;
		}
	}
	return "-1, -1, No";
}

//console.log(twoSumUsingTwoPointers([2, 6, 5, 8, 11], 14));

//2. Sort an array of 0s, 1s and 2s

//1st approach - using counts

function sortArr012s(arr) {
	let count0 = 0;
	let count1 = 0;
	let count2 = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 0) count0++;
		else if (arr[i] === 1) count1++;
		else if (arr[i] === 2) count2++;
	}
	for (let i = 0; i < arr.length; i++) {
		if (count0 > 0) {
			arr[i] = 0;
			count0--;
		} else if (count1 > 0) {
			arr[i] = 1;
			count1--;
		} else if (count2 > 0) {
			arr[i] = 2;
			count2--;
		}
	}
	return arr;
}

//console.log(sortArr012s([2, 0, 2, 1, 1, 0]));

//2nd approach - using 3 pointers
//This problem is a variation of the popular Dutch National flag algorithm

function sortArr012sUsing3Pointers(arr) {
	let low = 0;
	let mid = 0;
	let high = arr.length - 1;
	while (mid <= high) {
		if (arr[mid] === 0) {
			temp = arr[mid];
			arr[mid] = arr[low];
			arr[low] = temp;
			low++;
			mid++;
		} else if (arr[mid] === 1) {
			mid++;
		} else if (arr[mid] === 2) {
			temp = arr[mid];
			arr[mid] = arr[high];
			arr[high] = temp;
			high--;
		}
	}
	return arr;
}

//console.log(sortArr012sUsing3Pointers([0]));

//3. Find the Majority Element that occurs more than N/2 times

//1st approach - using hashmap

//2nd approach - Moore’s Voting Algorithm

function majorityElementMoreThanHalf(arr) {
	let ele = arr[0];
	let count = 1;
	let maxCount = 0;
	for (let i = 1; i < arr.length; i++) {
		if (count === 0) {
			ele = arr[i];
			count++;
		} else if (arr[i] === ele) {
			count++;
		} else count--;
	}
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === ele) {
			maxCount++;
		}
	}
	if (maxCount > arr.length / 2) return ele;
	else return -1;
}
//console.log(majorityElementMoreThanHalf([2, 2, 1, 1, 1, 2, 2]));

//4. Kadane's Algorithm, maximum subarray sum
//5. Print subarray with maximum subarray sum (extended version of above problem)
function maxSubarraySum(arr) {
	let res = arr[0];
	let maxEnding = arr[0];
	let startIndex = 0;
	let endIndex = 0;
	let arrayElements = "";
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > maxEnding + arr[i]) {
			startIndex = i;
		}
		maxEnding = Math.max(maxEnding + arr[i], arr[i]);

		if (maxEnding > res) {
			endIndex = i;
		}
		res = Math.max(res, maxEnding);
	}
	for (let i = startIndex; i <= endIndex; i++) {
		arrayElements = arrayElements + arr[i] + ", ";
	}
	console.log(arrayElements);
	return res;
}

//console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

//6. Stock Buy And Sell

function stockBuySell(arr) {
	let min = arr[0];
	let max = 0;
	for (let i = 1; i < arr.length; i++) {
		min = Math.min(min, arr[i]);
		max = Math.max(arr[i] - min, max);
	}
	return max;
}

//console.log(stockBuySell([3, 4, 10, 2, 3]));

//7.Rearrange Array Elements by Sign

function rearrangeArrBySign(arr) {
	let posIndex = 0;
	let negIndex = 1;
	let outArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < 0) {
			outArr[negIndex] = arr[i];
			negIndex = negIndex + 2;
		} else {
			outArr[posIndex] = arr[i];
			posIndex = posIndex + 2;
		}
	}
	return outArr;
}

//console.log(rearrangeArrBySign([1, 2, -4, -5]));

//7.2 -> There’s an array ‘A’ of size ‘N’ with positive and negative elements (not necessarily equal). Without altering the relative order of positive and negative elements, you must return an array of alternately positive and negative values. The leftover elements should be placed at the very end in the same order as in array A.

function rearrangeArrBySignV2(arr) {
	let posArr = [];
	let negArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < 0) negArr.push(arr[i]);
		else posArr.push(arr[i]);
	}
	arr = [];
	let j = 0;
	for (i = 0; j < Math.min(posArr.length, negArr.length); i += 2, j++) {
		arr[i] = posArr[j];
		arr[i + 1] = negArr[j];
	}
	if (negArr.length > posArr.length) {
		let arrLength = arr.length;
		for (i = 0; i < negArr.length - posArr.length; i++) {
			arr[arrLength + i] = negArr[posArr.length + i];
		}
	}
	if (negArr.length < posArr.length) {
		let arrLength = arr.length;
		for (i = 0; i < posArr.length - negArr.length; i++) {
			arr[arrLength + i] = posArr[negArr.length + i];
		}
	}
	return arr;
}

//console.log(rearrangeArrBySignV2([1, 2, -4, -5, 3, 4]));

//9. Leaders in an Array
//Problem Statement: Given an array, print all the elements which are leaders. A Leader is an element that is greater than all of the elements on its right side in the array.

function printAllLeaders(arr) {
	if (arr.length < 1) return;
	let max = arr[arr.length - 1];
	let outArr = [arr[arr.length - 1]];
	if (arr.length < 2) {
		console.log(outArr);
	}
	for (let i = arr.length - 2; i > 0; i--) {
		if (arr[i] > max) {
			max = arr[i];
			outArr.unshift(arr[i]);
		}
	}
	console.log(outArr);
}

//console.log(printAllLeaders([4, 7, 1, 0]));

//10.Longest Consecutive Sequence in an Array
function LongestConsSeq(arr) {
	let setArr = new Set(arr);
	let maxSeq = 0;
	setArr.forEach((mainVal) => {
		/*check if current mainVal is a starting point */
		if (!setArr.has(mainVal - 1)) {
			let count = 0;
			while (setArr.has(mainVal + count + 1)) {
				count += 1;
			}
			if (count + 1 > maxSeq) maxSeq = count + 1;
		}
	});
	return maxSeq;
}

//console.log(LongestConsSeq([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));

//11. Set Matrix Zero

function setMatrixZero(matrix) {
	let col0 = 1;
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			if (matrix[i][j] === 0) {
				matrix[i][0] = 0;
				if (j === 0) {
					col0 = 0;
				} else {
					matrix[0][j] = 0;
				}
			}
		}
	}
	for (let i = 1; i < matrix.length; i++) {
		for (let j = 1; j < matrix[0].length; j++) {
			if (matrix[i][j] !== 0) {
				if (matrix[i][0] === 0 || matrix[0][j] === 0) {
					matrix[i][j] = 0;
				}
			}
		}
	}
	if (matrix[0][0] === 0) {
		for (let j = 0; j < matrix[0].length; j++) {
			matrix[0][j] = 0;
		}
	}
	if (col0 === 0) {
		for (let i = 0; i < matrix.length; i++) {
			matrix[i][0] = 0;
		}
	}
	console.log(matrix);
}
/*

better code

function setMatrixZero(matrix) {
	let firstRow = 1;
	let firstColumn = 1;

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			if (matrix[i][j] == 0) {
				if (i == 0) firstRow = 0;
				if (j == 0) firstColumn = 0;
				if (i == 0 || j == 0) {
					continue;
				}
				matrix[0][j] = 0;
				matrix[i][0] = 0;
			}
		}
	}
	for (let i = 1; i < matrix.length; i++) {
		for (let j = 1; j < matrix[0].length; j++) {
			if (matrix[0][j] === 0 || matrix[i][0] === 0) {
				matrix[i][j] = 0;
			}
		}
	}

	// first row first column

	if (firstRow == 0) {
		for (let j = 0; j < matrix[0].length; j++) {
			matrix[0][j] = 0;
		}
	}
	if (firstColumn == 0) {
		for (let i = 0; i < matrix.length; i++) {
			matrix[i][0] = 0;
		}
	}
	return matrix;
}
*/
// console.log(
// 	setMatrixZero([
// 		[1, 1, 2, 0],
// 		[3, 4, 5, 0],
// 		[1, 3, 1, 5],
// 	])
// );

//12. Rotate Image/matrix by 90 degree
function rotateMatrix90Degree(matrix) {
	let columnLen = matrix[0].length;
	for (let i = 0; i < matrix.length; i++) {
		for (let j = i; j < columnLen; j++) {
			if (i !== j) {
				let temp = matrix[i][j];
				matrix[i][j] = matrix[j][i];
				matrix[j][i] = temp;
			}
		}
	}
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < columnLen / 2; j++) {
			let temp = matrix[i][j];
			matrix[i][j] = matrix[i][columnLen - 1 - j];
			matrix[i][columnLen - 1 - j] = temp;
		}
	}
	console.log(matrix);
}

// console.log(
// 	rotateMatrix90Degree([
// 		[1, 2, 3],
// 		[4, 5, 6],
// 		[7, 8, 9],
// 	])
// );

//13. Spiral Traversal of Matrix
function spiralMatrix(matrix) {
	let outArr = [];
	let top = 0;
	let right = matrix[0].length - 1;
	let bottom = matrix.length - 1;
	let left = 0;
	while (left <= right && top <= bottom) {
		for (let i = left; i <= right; i++) {
			outArr.push(matrix[top][i]);
		}
		top += 1;

		for (let i = top; i <= bottom; i++) {
			outArr.push(matrix[i][right]);
		}
		right -= 1;

		if (top <= bottom) {
			for (let i = right; i >= left; i--) {
				outArr.push(matrix[bottom][i]);
			}
			bottom -= 1;
		}

		if (left <= right) {
			for (let i = bottom; i >= top; i--) {
				outArr.push(matrix[i][left]);
			}
			left += 1;
		}
	}
	return outArr;
}

// console.log(
// 	spiralMatrix([
// 		[1, 2, 3, 4],
// 		[5, 6, 7, 8],
// 		[9, 10, 11, 12],
// 	])
// );

//14. Count Subarray sum Equals K

function countSubarraySumEqualsK(arr, k) {
	let count = 0;
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum = 0;
		for (j = i; j < arr.length; j++) {
			sum = sum + arr[j];
			if (sum === k) {
				count++;
			}
		}
	}
	return count;
}

//console.log(countSubarraySumEqualsK([1, 2, 3], 3));
