//1. Count Digits

// Example 1:
// Input:N = 12345
// Output:5
// Explanation:  The number 12345 has 5 digits.
// Example 2:
// Input:N = 7789
// Output: 4
// Explanation: The number 7789 has 4 digits.

function countDigits(N) {
	let inputNum = N;
	let countDigits = 0;

	while (inputNum > 0) {
		countDigits = countDigits + 1;
		inputNum = Math.floor(inputNum / 10);
	}

	return countDigits;
}

//console.log(countDigits(200));

//2. reverse a number

//Note: If a number has trailing zeros, then its reverse will not include them. For e.g., reverse of 10400 will be 401 instead of 00401.

function reverseNumber(N) {
	let reversedNum = 0;
	let inputNum = N;
	while (inputNum > 0) {
		reversedNum = reversedNum * 10 + (inputNum % 10);
		inputNum = Math.floor(inputNum / 10);
	}
	return reversedNum;
}
//console.log(reverseNumber(1679001));

//3. Palindrome

//Problem Statement: Given an integer N, return true if it is a palindrome else return false.
//A palindrome is a number that reads the same backward as forward. For example, 121, 1331, and 4554 are palindromes because they remain the same when their digits are reversed.
function isPalindrome(N) {
	let reversedNum = 0;
	let inputNum = N;
	while (inputNum > 0) {
		reversedNum = reversedNum * 10 + (inputNum % 10);
		inputNum = Math.floor(inputNum / 10);
	}
	if (reversedNum === N) {
		return N + " is a palindrome";
	} else {
		return N + " is not a palindrome";
	}
}
//console.log(isPalindrome(43134));

//4. Find GCD of two numbers

//Problem Statement: Given two integers N1 and N2, find their greatest common divisor.
//The Greatest Common Divisor of any two integers is the largest number that divides both integers.
/*Example 1:
Input:N1 = 9, N2 = 12
                
Output:3
Explanation:Factors of 9: 1, 3 and 9
Factors of 12: 1, 2, 3, 4, 6, 12
Common Factors: 1, 3 out of which 3 is the greatest hence it is the GCD.
Example 2:
Input:N1 = 20, N2 = 15
                
Output: 5
Explanation:Factors of 20: 1, 2, 4, 5
Factors of 15: 1, 3, 5
Common Factors: 1, 5 out of which 5 is the greatest hence it is the GCD. */

function GCD(n1, n2) {
	let GCF = 0;
	for (let i = 1; i <= Math.floor((n1 < n2 ? n1 : n2) / 2); i++) {
		if (n1 % i === 0 && n2 % i === 0) {
			GCF = i;
		}
	}
	return GCF;
}
//console.log(GCD(15, 20));

function GCD2(n1, n2) {
	let GCF = 0;
	for (let i = Math.floor((n1 < n2 ? n1 : n2) / 2); i >= 1; i--) {
		if (n1 % i === 0 && n2 % i === 0) {
			GCF = i;
			return GCF;
		}
	}
	//return GCF;
}
//console.log(GCD2(9, 12));

//5. Armstrong number

/*
Problem Statement: Given an integer N, return true it is an Armstrong number otherwise return false.

An Amrstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.

Example 1:
Input:N = 153
Output:True
Explanation: 13+53+33 = 1 + 125 + 27 = 153
Example 2:
Input:N = 371
Output: True
Explanation: 33+53+13 = 27 + 343 + 1 = 371

*/

function isArmstrong(n) {
	let inputNum = n;
	let countDigits = 0;
	let arrDigits = [];
	let sumOfDigitsPower = 0;
	while (inputNum > 0) {
		countDigits = countDigits + 1;
		arrDigits.push(inputNum % 10);
		inputNum = Math.floor(inputNum / 10);
	}
	arrDigits.forEach(
		(num) => (sumOfDigitsPower = sumOfDigitsPower + num ** countDigits)
	);
	if (n === sumOfDigitsPower) {
		return n + " is a armstrong number";
	} else {
		return n + " is not a armstrong number";
	}
}

//console.log(isArmstrong(1634));

//6. Print all Divisors of a given Number

/*
Problem Statement: Given an integer N, return all divisors of N.

A divisor of an integer N is a positive integer that divides N without leaving a remainder. In other words, if N is divisible by another integer without any remainder, then that integer is considered a divisor of N.

Example 1:
Input:N = 36
Output:[1, 2, 3, 4, 6, 9, 12, 18, 36]
Explanation: The divisors of 36 are 1, 2, 3, 4, 6, 9, 12, 18, 36.
Example 2:
Input:N =12
Output: [1, 2, 3, 4, 6, 12]
Explanation: The divisors of 12 are 1, 2, 3, 4, 6, 12.
*/

function printAllDivisiors(n) {
	let arr = [];
	for (let i = 1; i <= Math.floor(n / 2); i++) {
		if (n % i === 0) {
			arr.push(i);
		}
	}
	arr.push(n);
	return arr.join(", ");
}

//console.log(printAllDivisiors(12));

function printAllDivisiors2(n) {
	let arr = [];
	for (let i = 1; i <= Math.sqrt(n); i++) {
		if (n % i === 0) {
			arr.push(i);
			if (i !== n / i) {
				arr.push(n / i);
			}
		}
	}
	return arr.join(", ");
}

console.log(printAllDivisiors2(37));

//7.Check if a number is prime or not

//Problem Statement: Given an integer N, check whether it is prime or not. A prime number is a number that is only divisible by 1 and itself and the total number of divisors is 2.
/*
Example 1:
Input:N = 2
Output:True
Explanation: 2 is a prime number because it has two divisors: 1 and 2 (the number itself).
Example 2:
Input:N =10
Output: False
Explanation: 10 is not prime, it is a composite number because it has 4 divisors: 1, 2, 5 and 10.
*/

function isPrime(n) {
	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) {
			return false;
		}
	}
	return true;
}

console.log(isPrime(30));
