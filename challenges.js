// function betterThanAverage(classPoints, yourPoints) {
// 	classPoints = [...classPoints, yourPoints];
// 	let averageClass = 0;
// 	for (let i = 0; i < classPoints.length; i++) {
// 		averageClass += classPoints[i];
// 	}
// 	averageClass /= classPoints.length;
// 	let out;
// 	out = averageClass < yourPoints;
// 	return out;
// }
/*
console.log(betterThanAverage([1, 6, 2, 6], 10));

function betterThanAverage(classPoints, yourPoints) {
	return (
		yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length
	);
}
*/
//-----------------------------------------------------
/*
Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"
*/ /*
function removeConsecutiveDuplicates(s) {
	let arr = s.split(" ");
	let out = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== arr[i + 1]) out.push(arr[i]);
	}
	return out.join(" ");
}
console.log(
	removeConsecutiveDuplicates(
		"alpha beta beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
	)
);
*/
//-----------------------------------------------------
/*
Complete the solution so that it reverses the string passed into it.
'world'  =>  'dlrow'
'word'   =>  'drow'
*/ /*
function solution(str) {
	let convert = [...str];
	console.log(convert);
	let out = "";
	for (let i = convert.length - 1; i >= 0; i--) {
		out += convert[i];
	}
	return out;
}

console.log(solution("world"));

*/
//-----------------------------------------------------
/*
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7
*/ /*
function basicOp(operation, value1, value2) {
	let out = 0;
	operation === "+" && (out = value1 + value2);
	operation === "-" && (out = value1 - value2);
	operation === "*" && (out = value1 * value2);
	operation === "/" && (out = value1 / value2);
	return out;
}
console.log(basicOp("*", 10, 20));
*/
//-----------------------------------------------------
/*
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/ /*
function grow(x) {
	return x.reduce((a, b) => a * b, 1);
}

console.log(grow([10, 2, 2, 4]));
*/
//-----------------------------------------------------
/*
A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return True if yes, False otherwise :)
*/ /*

function hero(bullets, dragons) {
	return bullets >= dragons * 2;
}

console.log(hero(0, 0));
*/
//-----------------------------------------------------
/*
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/ /*

function removeChar(str) {
	return str.slice(1, str.length - 1);
}
console.log(removeChar("hello"));
*/
//-----------------------------------------------------
/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/ /*

function countPositivesSumNegatives(input) {
	function count() {
		let [positive, negative] = [0, 0];
		for (const i of input) {
			i > 0 ? positive++ : (negative -= -i);
		}
		return [positive, negative];
	}

	return !input || !input.length ? [] : count();
}

// function countPositivesSumNegatives(A) {
// 	if (!A || !A.length) return [];

// 	let pos = A.filter((x) => x > 0),
// 		neg = A.filter((x) => x <= 0);

// 	return [pos.length, Math.floor(neg.reduce((s, v) => s + v, 0))];
// }

console.log(countPositivesSumNegatives([0, 0]));
*/
