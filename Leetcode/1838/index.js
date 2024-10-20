var maxFrequency = function (nums, k) {
	if (nums.length === 0) return 0;
	if (nums.length === 1) return 1;
	let arrDistance = [];
	let temp = 0;
	let minDistance = 0;
	let minIndex = 0;
	let max = 0;
	for (let i = 0; i < nums.length - 1; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] > nums[j]) {
				temp = nums[i];
				nums[i] = nums[j];
				nums[j] = temp;
				max = nums[i];
			}
		}
	}
	if (k > 0) {
		for (let i = 0; i < nums.length - 1; i++) {
			arrDistance[i] = nums[i + 1] - nums[i];
		}
		for (let i = 0; i < arrDistance.length - 1 && k !== 0; i++) {
			minDistance = arrDistance[0];
			minIndex = 0;
			for (let j = 0; i < arrDistance.length - 1; j++) {
				if (Math.abs(arrDistance[j]) > Math.abs(arrDistance[j + 1])) {
					minDistance = arrDistance[j + 1];
					minIndex = j + 1;
				}
			}
			if (k >= Math.abs(minDistance)) {
				k = k - Math.abs(minDistance);
				if (minDistance > 0) {
					nums[minIndex] = nums[minIndex] + minDistance;
				} else if (minDistance < 0) {
					nums[minIndex + 1] =
						nums[minIndex + 1] + Math.abs(minDistance);
				}
			} else k = 0;
		}
	}
	return max;
};

console.log(maxFrequency([4, 3, 9, 12, 6, 7], 3));
