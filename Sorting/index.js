function selectionSort([...arr]) {
	for (let i = 0; i < arr.length - 1; i++) {
		let mini = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[i]) {
				mini = j;
			}
		}
		let temp = arr[i];
		arr[i] = arr[mini];
		arr[mini] = temp;
	}
	return arr;
}

//console.log(selectionSort([5, 2, 3, 1, 9]));

function bubbleSort([...arr]) {
	for (let i = arr.length - 1; i > 0; i--) {
		let iteration = 0;
		for (let j = 0; j < i; j++) {
			let temp = 0;
			if (arr[j + 1] < arr[j]) {
				temp = arr[j + 1];
				arr[j + 1] = arr[j];
				arr[j] = temp;
				iteration = 1;
			}
		}
		if (iteration === 0) {
			break;
		}
	}
	return arr;
}

//console.log(bubbleSort([5, 2, 3, 1, 9]));

function insertionSort([...arr]) {
	for (let i = 1; i < arr.length; i++) {
		for (let j = i; j > 0; j--) {
			let temp = 0;
			if (arr[j] < arr[j - 1]) {
				temp = arr[j];
				arr[j] = arr[j - 1];
				arr[j - 1] = temp;
			}
		}
	}
	return arr;
}
//console.log(insertionSort([5, 2, 3, 1, 9]));

//bubble sort using recursion

function bubbleSortRecur([...arr], n) {
	if (n === 1) return arr;
	let didSwap = 0;
	for (i = 0; i < n - 1; i++) {
		if (arr[i] > arr[i + 1]) {
			let temp = arr[i];
			arr[i] = arr[i + 1];
			arr[i + 1] = temp;
			didSwap = 1;
		}
	}
	if (didSwap === 0) return arr;
	return bubbleSortRecur(arr, n - 1);
}

//console.log(bubbleSortRecur([5, 2, 3, 1, 9], 5));

//recursive insertion sort

function insertionSortRecur([...arr], n) {
	if (n === arr.length - 1) return arr;
	for (i = n; i > 0 && arr[i - 1] > arr[i]; i--) {
		let temp = arr[i];
		arr[i] = arr[i - 1];
		arr[i - 1] = temp;
	}
	return insertionSortRecur([...arr], n + 1);
}

//console.log(insertionSortRecur([5, 2, 3, 1, 9], 1));

//merge sort
function merge(arr, left, mid, right) {
	const n1 = mid - left + 1;
	const n2 = right - mid; // Create temp arrays
	const L = new Array(n1);
	const R = new Array(n2); // Copy data to temp arrays L[] and R[]
	for (let i = 0; i < n1; i++) L[i] = arr[left + i];
	for (let j = 0; j < n2; j++) R[j] = arr[mid + 1 + j];
	let i = 0,
		j = 0;
	let k = left; // Merge the temp arrays back into arr[left..right]
	while (i < n1 && j < n2) {
		if (L[i] <= R[j]) {
			arr[k] = L[i];
			i++;
		} else {
			arr[k] = R[j];
			j++;
		}
		k++;
	} // Copy the remaining elements of L[], if there are any
	while (i < n1) {
		arr[k] = L[i];
		i++;
		k++;
	} // Copy the remaining elements of R[], if there are any
	while (j < n2) {
		arr[k] = R[j];
		j++;
		k++;
	}
}
function mergeSort(arr, left, right) {
	if (left >= right) return;
	const mid = Math.floor(left + (right - left) / 2);
	mergeSort(arr, left, mid);
	mergeSort(arr, mid + 1, right);
	merge(arr, left, mid, right);
}
function printArray(arr) {
	console.log(arr.join(" "));
}
// Driver code
//const arr = [12, 11, 13, 5, 6, 7];
const arr = [9, 4, 7, 6, 3, 1, 5];
console.log("Given array is");
printArray(arr);
mergeSort(arr, 0, arr.length - 1);
console.log("\nSorted array is");
printArray(arr);
