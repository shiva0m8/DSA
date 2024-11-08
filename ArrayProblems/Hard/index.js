//1. Program to generate Pascal's Triangle

function pascalsTriangle(n, r, c) {
	let outputMatrix = [];
	let temp = [];
	for (let i = 0; i < n; i++) {
		temp = [];
		for (let j = 0; j <= i; j++) {
			if (outputMatrix[i - 1] !== undefined) {
				let sum = 0;
				if (outputMatrix[i - 1][j - 1] !== undefined) {
					sum = sum + outputMatrix[i - 1][j - 1];
				}
				if (outputMatrix[i - 1][j] !== undefined) {
					sum = sum + outputMatrix[i - 1][j];
				}
				temp.push(sum);
			} else {
				temp.push(1);
			}
		}
		outputMatrix.push(temp);
	}
	return outputMatrix;
}

//console.log(pascalsTriangle(1, 2, 1));

//2. Majority Elements(&gt;N/3 times) | Find the elements that appears more than N/3 times in the array

function majorityElements3rdHalf(arr) {
	let map = new Map();
	let outputArr = [];
	let minCount = Math.floor(arr.length / 3);
	for (let i = 0; i < arr.length; i++) {
		let temp = map.get(arr[i]);
		if (temp !== undefined) {
			map.set(arr[i], temp + 1);
		} else map.set(arr[i], 1);
		if (map.get(arr[i]) > minCount && !outputArr.includes(arr[i])) {
			outputArr.push(arr[i]);
		}
	}
	return outputArr;
}

//console.log(majorityElements3rdHalf([2, 2]));

//optimal solution : Extended Boyer Moore’s Voting Algorithm
//remaining

//3. 3 SUM

function calculate3Sum(arr) {
	arr.sort((a, b) => a - b);
	target = 0;
	let ans = [];
	let arrLen = arr.length;
	for (let i = 0; i < arrLen; i++) {
		if (i === 0 || (i !== 0 && arr[i - 1] !== arr[i])) {
			let j = i + 1;
			let k = arrLen - 1;
			while (j < k) {
				let sum = arr[i] + arr[j] + arr[k];
				if (sum < target) {
					j++;
				} else if (sum > target) {
					k--;
				} else {
					ans.push([arr[i], arr[j], arr[k]]);
					j++;
					k--;
					while (arr[j] === arr[j - 1] && j < k) j++;
					while (arr[k] === arr[k + 1] && j < k) k--;
				}
			}
		}
	}
	return ans;
}

//console.log(calculate3Sum([-1, 0, 1, 2, -1, -4]));

//4. 4 Sum

function calculate4Sum(arr, target) {
	arr.sort((a, b) => a - b);
	let ans = [];
	let arrLen = arr.length;
	for (let i = 0; i < arrLen; i++) {
		if (i === 0 || (i !== 0 && arr[i - 1] !== arr[i])) {
			for (j = i + 1; j < arrLen; j++) {
				if (j === i + 1 || (j !== i + 1 && arr[j - 1] !== arr[j])) {
					let k = j + 1;
					let l = arrLen - 1;
					while (k < l) {
						let sum = arr[i] + arr[j] + arr[k] + arr[l];
						if (sum < target) {
							k++;
						} else if (sum > target) {
							l--;
						} else {
							ans.push([arr[i], arr[j], arr[k], arr[l]]);
							k++;
							l--;
							while (arr[k] === arr[k - 1] && k < l) k++;
							while (arr[l] === arr[l + 1] && k < l) l--;
						}
					}
				}
			}
		}
	}
	return ans;
}

console.log(calculate4Sum([1, 0, -1, 0, -2, 2], 0));
