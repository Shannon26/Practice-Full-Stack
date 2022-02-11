# Read File
my_file=open("sample1.txt","r")
data= my_file.read()

# write file
new_file1=open("sample_backup.txt",mode="w",encoding="utf-8")
new_file1.write(data)

my_file.close()
new_file1.close()
# Append File
append_file=open("sample1.txt",mode="a+",encoding="utf-8")
append_file.writelines("\n5th line")
append_file.close()

my_file=open("sample1.txt","r")
print(my_file.read())

# Close all opened files
my_file.close()