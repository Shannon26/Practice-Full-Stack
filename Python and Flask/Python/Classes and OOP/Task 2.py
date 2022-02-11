class Shape:
    def __init__(self, color='black', filled=False):
        self.color = color
        self.filled = filled

    def get_color(self):
        return self.color

    def get_filled(self):
        return self.filled


class Triangle(Shape):
    def __init__(self, sideLenght=3, height=4, color="red"):
        super().__init__()
        self.side = sideLenght
        self.height = height
        self.color = color

    def get_perimeter(self):
        return 3 * (self.side)

    def get_color(self):
        return self.filled


class Quadrilateral(Shape):
    def __init__(self, sideLenght=3, height=4, filled=True):
        super().__init__()
        self.side = sideLenght
        self.height = height
        self.filled = filled

    def get_perimeter(self):
        return 3 * (self.side)

    def get_color(self):
        return self.filled


class TriangleCorrect(Triangle):
    def __init__(self, equalateral=True, angle=60):
        super().__init__()
        self.eq = equalateral
        self.angle = angle

    def get_color(self):
        return self.color

    def area(self):
        return (0.5*self.side*self.height)

# tri1 = Triangle(3,4)
tri = TriangleCorrect()

print(tri.get_color())
