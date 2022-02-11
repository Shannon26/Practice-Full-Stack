import re
date= "September 02, 2007"
if((re.match("\w+\s\d{2},\s\d{4}",date))==None):
    print("False")
else:
    print("True")