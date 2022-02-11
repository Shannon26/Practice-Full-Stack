def areaCircle(rad):
    area = (22/7) * (rad**2)
    return area


radius = int(input("Enter the Radius: "))
area = areaCircle(radius)
print(area)