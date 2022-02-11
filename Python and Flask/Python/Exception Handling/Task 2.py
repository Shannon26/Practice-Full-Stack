import re

def person(name,age,email,number):
    if(re.match("^[A-Z][a-zA-Z]*$",name) == None):
        raise NameError("Name is not proper")
    if(type(age) != int or 0 > age or age > 200):
        raise ValueError("Age isn't valid")
    if(re.match("^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$",email)==None):
        raise ValueError("Email isn't valid")

    if(len(number)==10):
        raise ValueError("Phone number isn't valid")
        

person("Shajsdbh",73, "hcsv@gsvdg.com",8362963826)