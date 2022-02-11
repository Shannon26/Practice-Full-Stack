from datetime import date

d0 = date(2014, 7, 2)
d1 = date(2014, 7, 11)
delta = d1 - d0
print("{} Days".format(delta.days))