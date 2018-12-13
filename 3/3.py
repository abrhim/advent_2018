import pandas
import numpy


def squareBuilder(db,start,size):
    incrementorStart = -1
    incrementorSize = -1
    if int(start[1])-int(start[3]) <= 0:
        incrementorStart=1
    if int(size[1])-int(size[3]) <= 0:
        incrementorSize=1
    for i in range(int(start[1]),int(start[3])+incrementorStart,incrementorStart):
        for j in range(int(size[1]),int(size[3])+incrementorSize,incrementorSize):
            print(i,":",j)
        



with open("practice_input.txt","r") as file:
    db={}
    for row in file:
        row=row.rstrip()
        rowID = row.split("@")[0]
        start = row.split("@")[1].split(":")[0]
        size=row.split(":")[1]
        #print(rowID,"@",start,":", size)
        #print(start)
        squareBuilder(db,start,size)
