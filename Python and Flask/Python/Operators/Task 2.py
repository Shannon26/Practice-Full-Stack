def seq(n):
    res = 0
    for i in range(1,n):
        res += (n**i)
    return res

n = int(input("Enter the number: "))

result = seq(n)
print(result)