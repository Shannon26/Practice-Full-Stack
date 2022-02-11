def gcdCal(x, y):
    while((x % y) > 0):
        R = x%y
        x = y
        y = R
    return y


num1 = int(input("Enter 1st number: "))
num2 = int(input("Enter 2nd number: "))
gcd = gcdCal(num1, num2)
print("GCD is", gcd)
