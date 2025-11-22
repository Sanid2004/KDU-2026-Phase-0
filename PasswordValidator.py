str1 = input("Enter password : ")
str2 = input("Re-enter password : ")
print("Length 1 : " + str(len(str1)))
print("Length 2 :" + str(len(str2)))
if len(str1) == len(str2):
    print("Lengths match: True")
else:
    print("Lengths match: False")
if str1 == str2:
    print("Strings match: True")
else:
    print("Strings match: False")