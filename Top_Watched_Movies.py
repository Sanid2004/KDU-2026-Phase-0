import csv

with open("watchlist.csv") as file:
    reader = csv.reader(file)
    dict = {}
    for row in reader:
        for ele in row:
            ele = ele.strip()
            if ele in dict:
                dict[ele]+=1
            else:
                dict[ele]=1

    top_3 = sorted(dict.items(),key=lambda x:x[1],reverse=True)[:3]
    print(top_3)