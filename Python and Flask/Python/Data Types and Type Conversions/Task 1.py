def start(str1):
    requireStr =""
    for i in range(0,2):
        requireStr += str1[i]

    return requireStr

def end(str1):
    requireStr =""
    for i in range(len(str1)-2,(len(str1))):
        requireStr += str1[i]

    return requireStr

str1 = input("Enter the String:")
if (len(str1) > 1):
    startStr = start(str1)
    endStr = end(str1)
    print(startStr + endStr)
else:
    print("Empty")
