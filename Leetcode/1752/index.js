var check = function (arr) {
	let sorted = false;
	for (let k = 1; k <= arr.length && !sorted; k++) {
		sorted = true;
		for (let i = 0; i < arr.length - 1; i++) {
			if (arr[i] > arr[i + 1] && sorted) {
				sorted = false;
			}
		}
		if (!sorted) {
			rotateArrayUsingReversalAlgo(arr, 1);
		}
	}
	return sorted;
};

function reverseArr(arr, start, end) {
	while (start < end) {
		let temp = arr[start];
		arr[start] = arr[end];
		arr[end] = temp;
		start++;
		end--;
	}
}

function rotateArrayUsingReversalAlgo(arr, k) {
	if (arr.length < 2) return;
	if (k > arr.length) {
		k = k % arr.length;
	}
	reverseArr(arr, arr.length - k, arr.length - 1);
	reverseArr(arr, 0, arr.length - k - 1);
	reverseArr(arr, 0, arr.length - 1);
}

console.log(check([3, 4, 5, 1, 2]));

//optimal soltion

var check2 = function (nums) {
	let count = 0; // Count the number of times the order breaks
	let n = nums.length;

	for (let i = 0; i < n; i++) {
		if (nums[i] > nums[(i + 1) % n]) {
			count++;
		}
	}

	// If there are more than one breaks in the order, it's not sorted
	return count <= 1;
};

console.log(check2([3, 4, 5, 1, 2]));
