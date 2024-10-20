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

console.log(majorityElements3rdHalf([2, 2]));

//optimal solution : Extended Boyer Moore’s Voting Algorithm
//remaining
