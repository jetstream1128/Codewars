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

console.log(betterThanAverage([1, 6, 2, 6], 10));

function betterThanAverage(classPoints, yourPoints) {
	return (
		yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length
	);
}

//-----------------------------------------------------
