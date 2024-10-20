//Print Name N times using Recursion

function printNameRecur(i, n) {
	if (i > n) return;
	console.log("name");
	printNameRecur(i + 1, n);
}

function printName(n) {
	printNameRecur(1, n);
}

//printName(5);

//Print 1 to N using Recursion

function print1toNRecur(i, n) {
	if (i > n) return;
	console.log(i);
	print1toNRecur(i + 1, n);
}

function print1toN(n) {
	print1toNRecur(1, n);
}

//print1toN(5);

//Print 1 to N using Recursion - backtracking

function print1toNBackTrackRecur(i, n) {
	if (i < 1) return;
	print1toNBackTrackRecur(i - 1, n);
	console.log(i);
}

function print1toNBackTrack(n) {
	print1toNBackTrackRecur(n, n);
}

//print1toNBackTrack(5);

//sum of n numbers
//1st way: Functional way
function sumofNRecur(n) {
	if (n < 1) return 0;
	return n + sumofNRecur(n - 1);
}
//console.log(sumofNRecur(7));

//2nd way: Parameterized way

function sumofNRecur2(n, sum) {
	if (n < 1) {
		console.log(sum);
		return 0;
	}
	sum = sum + n;
	sumofNRecur2(n - 1, sum);
}

function sumofN2(n) {
	sumofNRecur2(n, 0);
}

//sumofN2(7);

//factorial
function factoRecur(n) {
	if (n === 1) {
		return 1;
	}
	return n * factoRecur(n - 1);
}

//console.log(factoRecur(4));

//reverse an array

function reverseArrRecur([...arr], revArr) {
	if (arr.length === 0) {
		console.log(revArr);
		return;
	}
	revArr.push(arr.pop());
	reverseArrRecur(arr, revArr);
}

function reverseArr([...arr]) {
	reverseArrRecur(arr, []);
}

//reverseArr([1, 4, 3, 6]);

function reverseArr2([...arr]) {
	let revArr = [];
	if (arr.length > 1) {
		for (let i = arr.length; i > 0; i--) {
			revArr[i - 1] = arr[arr.length - i];
		}
		return revArr;
	} else {
		return arr;
	}
}

//console.log(reverseArr2([1, 2]));

function reverseArr3([...arr]) {
	let temp1 = 0;
	let temp2 = 0;
	if (arr.length > 1) {
		for (let i = Math.floor(arr.length / 2); i > 0; i--) {
			temp1 = arr[arr.length - i];
			temp2 = arr[i - 1];
			arr[i - 1] = temp1;
			arr[arr.length - i] = temp2;
		}
		return arr;
	} else {
		return arr;
	}
}

//console.log(reverseArr3([1, 5, 3, 6, 7, 4]));

function reverseArrRecur4([...arr], i) {
	if (i < 1) return arr;
	let temp1 = arr[arr.length - i];
	let temp2 = arr[i - 1];
	arr[i - 1] = temp1;
	arr[arr.length - i] = temp2;
	return reverseArrRecur4(arr, i - 1);
}

function reverseArr4([...arr]) {
	if (arr.length < 2) return arr;
	return reverseArrRecur4(arr, Math.floor(arr.length / 2));
}

//console.log(reverseArr4([1, 5, 3, 6, 7, 4]));

//palindrome string

function isPalindromeRecur(str, i) {
	if (i > Math.floor(str.length / 2) - 1) {
		return true;
	} else if (str[i] !== str[str.length - i - 1]) {
		return false;
	} else {
		return isPalindromeRecur(str, i + 1);
	}
}

function isPalindrome(str) {
	if (isPalindromeRecur(str, 0)) {
		return str + " is a palindrome";
	} else {
		return str + " is not a palindrome";
	}
}

//console.log(isPalindrome("abcdddcba"));

//Print Fibonacci Series up to Nth term

function fibonacciRecur(i, [...arr], n) {
	if (i === n) {
		return arr;
	}
	arr.push(i < 2 ? i : arr[i - 1] + arr[i - 2]);
	return fibonacciRecur(i + 1, arr, n);
}

function fibonacci(n) {
	return fibonacciRecur(0, [], n);
}

//console.log(fibonacci(6).join(" "));

//nth number in series
function fibonacci2(n) {
	if (n < 2) {
		return n;
	}
	return fibonacci2(n - 1) + fibonacci2(n - 2);
}

//console.log(fibonacci2(4));

//hashing
//theory

//Count frequency of each element in the array

//1st way //using two array
function getCountOfEachElement([...arr]) {
	let visited = Array(arr.length).fill(false);
	for (let i = 0; i < arr.length; i++) {
		if (!visited[i]) {
			let count = 1;
			for (let j = i + 1; j < arr.length; j++) {
				if (arr[i] === arr[j]) {
					visited[j] = true;
					count++;
				}
			}
			console.log(arr[i] + " " + count);
		}
	}
}
//getCountOfEachElement([2, 0, 0, 2, 3, 2, 4, 5, 13]);
//2nd way //using hash array
function getCountOfEachElement2([...arr]) {
	let hash = [];
	let visited = Array(arr.length).fill(false);
	for (let i = 0; i < arr.length; i++) {
		hash[arr[i]] = (hash[arr[i]] === undefined ? 0 : hash[arr[i]]) + 1;
	}
	console.log(arr);
	console.log(hash);
	for (let i = 0; i < arr.length; i++) {
		if (!visited[arr[i]]) {
			console.log(arr[i] + " " + hash[arr[i]]);
			visited[arr[i]] = true;
		}
	}
}
//getCountOfEachElement2([2, 0, 0, 2, 3, 2, 4, 5, 13]);

//3rd way //using hashmap/map
function getCountOfEachElement3([...arr]) {
	const hashMap = new Map();
	let freq;
	for (let i = 0; i < arr.length; i++) {
		freq = 0;
		if (hashMap.get(arr[i]) === undefined) freq = 1;
		else freq = hashMap.get(arr[i]) + 1;
		hashMap.set(arr[i], freq);
	}
	for (let [key, value] of hashMap) {
		console.log(key + " " + value);
	}
}

//getCountOfEachElement3([2, 0, 0, 2, 3, 2, 4, 5, 13]);

//Find the highest/lowest frequency element

//1st way //using two array
function getHighestLowestElement1([...arr]) {
	let visited = Array(arr.length).fill(false);
	let max = 0;
	let min = arr.length + 1;
	let maxArr = [];
	let minArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (!visited[i]) {
			let count = 1;
			for (let j = i + 1; j < arr.length; j++) {
				if (arr[i] === arr[j]) {
					visited[j] = true;
					count++;
				}
			}
			if (max < count) {
				max = count;
				maxArr = [];
				maxArr.push(arr[i]);
			} else if (max === count) {
				maxArr.push(arr[i]);
			}
			if (min > count) {
				min = count;
				minArr = [];
				minArr.push(arr[i]);
			} else if (min === count) {
				minArr.push(arr[i]);
			}
		}
	}
	console.log("max " + maxArr + " count: " + max);
	console.log("min " + minArr + " count: " + min);
}
//getHighestLowestElement1([2, 2, 4, 2, 1, 4, 3, 3, 9, 13]);

//2nd way // hash array
function getHighestLowestElement2([...arr]) {
	let hash = [];
	let max;
	let min;
	let isFirst = true;
	for (let i = 0; i < arr.length; i++) {
		hash[arr[i]] = (hash[arr[i]] === undefined ? 0 : hash[arr[i]]) + 1;
	}
	for (let i = 0; i < hash.length; i++) {
		if (hash[i] !== undefined) {
			if (isFirst) {
				max = hash[i];
				min = hash[i];
				isFirst = false;
			} else {
				if (hash[i] > max) {
					max = hash[i];
				}
				if (hash[i] < min) {
					min = hash[i];
				}
			}
		}
	}
	console.log("max: " + max);
	console.log("min: " + min);
	console.log(
		"maxArr: " +
			hash
				.map((value, index) => ({
					value,
					index,
				}))
				.filter((item) => item.value === max)
				.map((item) => item.index)
	);
	console.log(
		"minArr: " +
			hash
				.map((value, index) => ({
					value,
					index,
				}))
				.filter((item) => item.value === min)
				.map((item) => item.index)
	);
}
//getHighestLowestElement2([2, 2, 4, 2, 1, 4, 3, 3, 9, 13]);

//3rd way //hash array
function getHighestLowestElement3([...arr]) {
	const hashMap = new Map();
	let freq;
	let maxFreq = 0;
	let minFreq = arr.length + 1;
	for (let i = 0; i < arr.length; i++) {
		freq = 0;
		if (hashMap.get(arr[i]) === undefined) freq = 1;
		else freq = hashMap.get(arr[i]) + 1;
		if (freq > maxFreq) maxFreq = freq;
		if (freq < minFreq) minFreq = freq;
		hashMap.set(arr[i], freq);
	}
	[...hashMap]
		.filter((item) => item[1] === maxFreq)
		.forEach((item) =>
			console.log("max: " + item[0] + " count: " + item[1])
		);
	minElements = [...hashMap]
		.filter((item) => item[1] === minFreq)
		.reduce((acc, item) => {
			acc = acc === "" ? item[0] : acc + ", " + item[0];
			return acc;
		}, "");
	console.log("min: " + minElements + " count: " + minFreq);
}

//getHighestLowestElement3([2, 2, 4, 2, 1, 4, 3, 3, 9, 13]);
