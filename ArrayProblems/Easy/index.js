//1. Find the Largest element in an array
//sort using algorithm and return last element
//other use one loop and max variable

//using recursion
function findMaxArrayEleRecur([...arr], i, max) {
	if (i === arr.length) {
		console.log(max);
		return;
	}
	if (arr[i] > max) {
		max = arr[i];
	}
	findMaxArrayEleRecur(arr, i + 1, max);
}
//findMaxArrayEleRecur([1, 5, 1, 3, 4, 2], 1, 1);

//2. Find Second Smallest and Second Largest Element in an array

//1st approach find largest then second largest and same for smallest
function findSecondSmallestLargest([...arr]) {
	let smallest = Infinity;
	let secondSmallest = Infinity;
	let largest = -Infinity;
	let secondlargest = -Infinity;
	if (arr.length <= 1) {
		secondSmallest = -1;
		secondlargest = -1;
		console.log(secondSmallest);
		console.log(secondlargest);
		return;
	}

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > largest) {
			largest = arr[i];
		}
		if (arr[i] < smallest) {
			smallest = arr[i];
		}
	}

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > secondlargest && arr[i] < largest) {
			secondlargest = arr[i];
		}
		if (arr[i] < secondSmallest && arr[i] > smallest) {
			secondSmallest = arr[i];
		}
	}
	console.log(smallest);
	console.log(largest);
	console.log(secondSmallest);
	console.log(secondlargest);
	return;
}
//findSecondSmallestLargest([9, 9, 1, 2, 5, 6]);

//2nd approach (optimal)
// https://takeuforward.org/data-structure/find-second-smallest-and-second-largest-element-in-an-array/

//3. Check if an Array is Sorted

function checkIfArraySorted([...arr]) {
	let sorted = true;
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] > arr[i + 1] && sorted) {
			sorted = false;
		}
	}
	return sorted;
}
//console.log(checkIfArraySorted([9, 9, 10, 12, 15, 16]));

//4. Remove Duplicates in-place from Sorted Array

//approach 1st (works even if array is not sorted)
function removeDuplicates([...arr]) {
	let newArr = [arr[0]];
	let k = 1;
	for (let i = 1; i < arr.length; i++) {
		let isUnique = true;
		for (let j = i - 1; j >= 0 && isUnique; j--) {
			if (arr[j] === arr[i]) {
				isUnique = false;
			}
		}
		if (isUnique) {
			newArr[k] = arr[i];
			k++;
		}
	}
	return newArr;
}
//console.log(removeDuplicates([10, 9, 11, 12, 12, 10, 16, 10, 11, 12, 17]));

//approach 2nd - two pointers (works for sorted array)

function removeDuplicatesTwoPointers([...arr]) {
	let i = 0;
	for (let j = 1; j < arr.length; j++) {
		if (arr[j] != arr[i]) {
			i++;
			arr[i] = arr[j];
		}
	}
	return arr.slice(0, i + 1);
}

//console.log(removeDuplicatesTwoPointers([5, 5, 6, 7, 7, 7, 8, 8]));

// 5. Left Rotate the Array by One

function leftRorate([...arr]) {
	if (arr.length === 1) {
		return arr;
	}
	let first = arr[0];
	for (let i = 1; i < arr.length; i++) {
		arr[i - 1] = arr[i];
	}
	arr[arr.length - 1] = first;
	return arr;
}
//console.log(leftRorate([1, 2, 3, 4, 5]));

// 6. Rotate array by K elements

//1st approach - using temp array

function rorateArray([...arr], k, direction) {
	let tempArr = [];
	if (arr.length < 2) return;
	if (k > arr.length) {
		k = k - arr.length;
	}
	if (direction === "right") {
		for (let i = 0; i < arr.length; i++) {
			if (i < k) {
				tempArr[i] = arr[arr.length - (k - i)];
			} else {
				tempArr[i] = arr[i - k];
			}
		}
	}
	if (direction === "left") {
		for (let i = 0; i < arr.length; i++) {
			if (i < k) {
				tempArr[arr.length - (k - i)] = arr[i];
			} else {
				tempArr[i - k] = arr[i];
			}
		}
	}
	return tempArr;
}

//console.log(rorateArray([1, 2, 3, 4, 5, 6, 7], 2, "left"));

//2nd approach - reversal algorithm
/*
reverse to right
Step 1: Reverse the last k elements of the array

Step 2: Reverse the first n-k elements of the array.

Step 3: Reverse the whole array.

reverse to left
Step 1: Reverse the first k elements of the array

Step 2: Reverse the last n-k elements of the array.

Step 3: Reverse the whole array.
*/

function reverseArr(arr, start, end) {
	while (start < end) {
		let temp = arr[start];
		arr[start] = arr[end];
		arr[end] = temp;
		start++;
		end--;
	}
	return arr;
}

function rotateArrayUsingReversalAlgo(arr, k, direction) {
	if (arr.length < 2) return;
	if (k > arr.length) {
		k = k % arr.length;
	}
	if (direction === "right") {
		reverseArr(arr, arr.length - k, arr.length - 1);
		reverseArr(arr, 0, arr.length - k - 1);
		reverseArr(arr, 0, arr.length - 1);
		return arr;
	}
	if (direction === "left") {
		reverseArr(arr, 0, k - 1);
		reverseArr(arr, k, arr.length - 1);
		reverseArr(arr, 0, arr.length - 1);
		return arr;
	}
}

//console.log(rotateArrayUsingReversalAlgo([1, 2], 5, "right"));

//7. Move all Zeros to the end of the array

function moveZerosToEnd(arr) {
	if (arr.lengh < 2) return arr;
	let k = 0;
	for (let i = 1; i < arr.length; i++) {
		if (arr[k] === 0 && arr[i] !== 0) {
			let temp = arr[k];
			arr[k] = arr[i];
			arr[i] = temp;
			k++;
		} else if (arr[k] !== 0) k++;
	}
	return arr;
}

//console.log(moveZerosToEnd([1, 0, 2, 3, 2, 0, 0, 4, 5, 1]));

//8. Linear Search in C

function linearSearch(arr, num) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === num) return i;
	}
	return -1;
}

//console.log(linearSearch([1, 4, 5, 3, 2], 6));

//9. Union of Two Sorted Arrays

/*
Problem Statement: Given two sorted arrays, arr1, and arr2 of size n and m. Find the union of two sorted arrays.

The union of two arrays can be defined as the common and distinct elements in the two arrays.NOTE: Elements in the union should be in ascending order. 
*/

function unionArrays(arr1, arr2) {
	let tempArr = [];
	let max = arr1.length > arr2.length ? "arr1" : "arr2";

	for (let i = 0; i < Math.min(arr1.length, arr2.length); i++) {
		let isExistArr1 = false;
		let isExistArr2 = false;
		for (let j = 0; j < tempArr.length; j++) {
			isExistArr1 = tempArr[j] === arr1[i];
			isExistArr2 = tempArr[j] === arr2[i];
		}
		if (!isExistArr1) {
			if (arr1[i] === arr2[i]) {
				tempArr[tempArr.length] = arr1[i];
			} else {
				tempArr[tempArr.length] = arr1[i];
			}
		}
		if (!isExistArr2) {
			if (arr1[i] !== arr2[i]) {
				tempArr[tempArr.length] = arr2[i];
			}
		}
	}
	if (max === "arr1") {
		for (let k = arr2.length; k < arr1.length; k++) {
			let isExist = false;
			for (let j = 0; j < tempArr.length; j++) {
				if (tempArr[j] === arr1[k]) {
					isExist = true;
				}
			}
			if (!isExist) {
				tempArr[tempArr.length] = arr1[k];
			}
		}
	} else if (max === "arr2") {
		for (let k = arr1.length; k < arr2.length; k++) {
			let isExist = false;
			for (let j = 0; j < tempArr.length; j++) {
				if (tempArr[j] === arr2[k]) {
					isExist = true;
				}
			}
			if (!isExist) {
				tempArr[tempArr.length] = arr2[k];
			}
		}
	}
	//sort
	for (let i = tempArr.length; i > 0; i--) {
		for (let j = 0; j < i; j++) {
			if (tempArr[j] > tempArr[j + 1]) {
				let temp = tempArr[j];
				tempArr[j] = tempArr[j + 1];
				tempArr[j + 1] = temp;
			}
		}
	}

	return tempArr;
}

/*console.log(
	unionArrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 3, 4, 4, 5, 11, 12])
); */

//solutions using map and set
//solutions using two pointers below: //work only if sorted

function unionArraysTwoPointer(arr11, arr22) {
	let unionArr = [];
	let unionArrPointer = 0;
	let arr11Pointer = 0;
	let arr22Pointer = 0;
	while (arr11Pointer < arr11.length && arr22Pointer < arr22.length) {
		if (arr11[arr11Pointer] === arr22[arr22Pointer]) {
			if (
				unionArr.length === 0 ||
				unionArr[unionArrPointer - 1] !== arr11[arr11Pointer]
			) {
				unionArr[unionArrPointer] = arr11[arr11Pointer];
				unionArrPointer++;
			}
			arr11Pointer++;
			arr22Pointer++;
		} else if (arr11[arr11Pointer] > arr22[arr22Pointer]) {
			if (
				unionArr.length === 0 ||
				unionArr[unionArrPointer - 1] !== arr22[arr22Pointer]
			) {
				unionArr[unionArrPointer] = arr22[arr22Pointer];
				unionArrPointer++;
			}
			arr22Pointer++;
		} else if (arr11[arr11Pointer] < arr22[arr22Pointer]) {
			if (
				unionArr.length === 0 ||
				unionArr[unionArrPointer - 1] !== arr11[arr11Pointer]
			) {
				unionArr[unionArrPointer] = arr11[arr11Pointer];
				unionArrPointer++;
			}
			arr11Pointer++;
		}
	}
	while (arr11Pointer < arr11.length) {
		if (unionArr[unionArrPointer - 1] !== arr11[arr11Pointer]) {
			unionArr[unionArrPointer] = arr11[arr11Pointer];
			unionArrPointer++;
		}
		arr11Pointer++;
	}
	while (arr22Pointer < arr22.length) {
		if (unionArr[unionArrPointer - 1] !== arr22[arr22Pointer]) {
			unionArr[unionArrPointer] = arr22[arr22Pointer];
			unionArrPointer++;
		}
		arr22Pointer++;
	}
	return unionArr;
}

/*console.log(
	unionArraysTwoPointer(
		[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		[2, 3, 4, 4, 5, 11, 12]
	)
);*/

//10. Find the missing number in an array

//approach 1 (if array is sorted)
function findMissingEle(arr) {
	let isFound = false;
	let missingEle = null;
	for (let i = 0; i < arr.length && !isFound; i++) {
		if (i + 1 !== arr[i]) {
			isFound = true;
			missingEle = i + 1;
		}
	}
	return missingEle;
}

//console.log(findMissingEle([1, 3]));

//approach 2 (if array is not sorted) linear search

function findMissingEleLinearSearch(arr, n) {
	let isFound = false;
	let missingEle = null;
	for (let i = 1; i <= n; i++) {
		isFound = false;
		for (let j = 0; j < arr.length; j++) {
			if (i === arr[j]) {
				isFound = true;
			}
		}
		if (!isFound) {
			missingEle = i;
		}
	}
	return missingEle;
}

//console.log(findMissingEleLinearSearch([4, 1, 2, 5], 5));

//approach 3 (if array is not sorted) summation approach

function findMissingEleSummationApproach(arr) {
	let sumofArr = 0;
	for (let i = 0; i < arr.length; i++) {
		sumofArr = sumofArr + arr[i];
	}
	return ((arr.length + 1) * (arr.length + 2)) / 2 - sumofArr;
}

//console.log(findMissingEleSummationApproach([4, 1, 2, 5]));

//11.Count Maximum Consecutive One's in the array

function maxConsecutive1s(arr) {
	let count = 0;
	let prevCount = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 1) count++;
		else {
			if (count > prevCount) prevCount = count;
			count = 0;
		}
	}
	return prevCount > count ? prevCount : count;
}

//console.log(maxConsecutive1s([1, 0, 1, 1, 0, 1]));

//12. Find the number that appears once, and the other numbers twice

//approach 1 - linear search
//approach 2- array hashing
//approach 3- hashing using map data structure

//approach 4 - using XOR
function findNumberAppearesOnce(arr) {
	let singleEle = 0;
	for (let i = 0; i < arr.length; i++) {
		singleEle = singleEle ^ arr[i];
	}
	return singleEle;
}

//console.log(findNumberAppearesOnce([2, 0, 2, 4, 3, 3, 4]));

//13. Longest Subarray with given Sum K(Positives)
//14. Longest Subarray with sum K | [Postives and Negatives]

/*
Example 1:
Input Format: N = 3, k = 5, array[] = {2,3,5}
Result: 2
Explanation: The longest subarray with sum 5 is {2, 3}. And its length is 2.

Example 2:
Input Format: N = 5, k = 10, array[] = {2,3,5,1,9}
Result: 3
Explanation: The longest subarray with sum 10 is {2, 3, 5}. And its length is 3.
*/

/*
Example 2:
Input Format
: N = 3, k = 1, array[] = {-1, 1, 1}
Result:
 3
Explanation:
 The longest subarray with sum 1 is {-1, 1, 1}. And its length is 3.
*/

//other 4 and 2 approaches on for problem 13 and 14 on the site

//below solution works for both 13 and 14 question
function findLongestSubArrGivesSumK(arr, k) {
	let count = 0;
	let prevCount = 0;
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum = sum + arr[i];
		count++;
		if (sum === k) {
			if (prevCount < count) prevCount = count;
			count = 0;
			sum = 0;
		}
	}
	return prevCount;
}

console.log(findLongestSubArrGivesSumK([-1, 1, 1], 1));
