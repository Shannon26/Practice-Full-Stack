import csv

list1 = [".py", ".java", ".cpp"]

op = open("sample.csv", "r")
dt = csv.DictReader(op)
# print(dt)
up_dt = []
count1 = 0
for r in dt:
    # print(r)
    row = {'Programming language': r['Programming language'],
           ' Designed by': r[' Designed by'],
           'Extension': list1[count1]}
    count1 += 1
    up_dt.append(row)
print(up_dt)
op.close()
op = open("sample.csv", "w", newline='')
headers = ['Programming language', ' Designed by', 'Extension']
data = csv.DictWriter(op, delimiter=',', fieldnames=headers)
data.writerow(dict((heads, heads) for heads in headers))
data.writerows(up_dt)

# op.close()

