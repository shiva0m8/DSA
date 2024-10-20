var dividePlayers = function (skill) {
	if (skill.length < 2) return 0;
	if (skill.length === 2) return skill[0] * skill[1];

	for (let i = skill.length; i > 0; i--) {
		for (let j = 0; j < i; j++) {
			if (skill[j] > skill[j + 1]) {
				let temp = skill[j];
				skill[j] = skill[j + 1];
				skill[j + 1] = temp;
			}
		}
	}
	let chemistry = 0;
	let sum = skill[0] + skill[skill.length - 1];
	let isEqual = true;

	for (i = 1; i < skill.length / 2; i++) {
		if (sum != skill[i] + skill[skill.length - i - 1]) isEqual = false;
	}
	if (isEqual) {
		for (i = 0; i < skill.length / 2; i++) {
			chemistry = chemistry + skill[i] * skill[skill.length - i - 1];
		}
	}
	return chemistry;
};

console.log(dividePlayers([3, 2, 5, 1, 3, 4]));
