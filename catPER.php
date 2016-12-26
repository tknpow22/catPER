<?php

for ($step = 10; $step < 110; $step += 5) {
	$kg = $step / 10.0;
	$per = sqrt(sqrt($kg ** 3)) * 70.0;
	printf("%.1f kg: %.0f kcal\n", $kg, $per);
}
