for (var step = 10; step < 110; step += 5) {
	var kg = step / 10.0;
	var per = Math.sqrt(Math.sqrt(Math.pow(kg, 3))) * 70.0;
	console.log(kg + " kg: " + Math.round(per) + " kcal");
}
