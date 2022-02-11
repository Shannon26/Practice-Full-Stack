a = input("Enter a letter: ")
list = ['a','e','i','o','u']

if(len(a)>1):
    print("Please enter 1 alphabet")
else:
    if a.lower() in list:
        print("Is vowel")
    else:
        print("Is not a vowel")