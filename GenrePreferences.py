list1 = []
set1 = set()
dictionary = {}

for i in range(0,10):
    str1 = input()
    list1.append(str1)
    set1.add(str1)
    if str1 in dictionary:
        dictionary[str1]+=1
    else:
        dictionary[str1]=1

print(list1)
print(set1)
print(dictionary)