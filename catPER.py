import math

for step in range(10, 110, 5):
    kg = step / 10.0
    per = math.sqrt(math.sqrt(kg ** 3)) * 70.0
    print("{0:.1f} kg: {1:.0f} kcal".format(kg, per))
