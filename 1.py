import bisect
from datetime import datetime

def binarySearch(alist, item):
    first = 0
    last = len(alist)-1
    found = False
    while first<=last and not found:
        midpoint = (first + last)//2
        if alist[midpoint] == item:
            found = True
        else:
            if item < alist[midpoint]:
                last = midpoint-1
            else:
                first = midpoint+1
    return found

def getNum():
    sum=0
    concurrentSums=[]
    with open('inpu1.txt', mode='r') as input:
        input = list(input)
        print(len(input))
        input += input*1000
        for line in input:
            if line[0]=='+':
                sum+= int(line[1:])
            else: sum-= int(line[1:])
            if binarySearch(concurrentSums,sum):
                print(len(concurrentSums))
                return sum
            else: bisect.insort(concurrentSums,sum,0,len(concurrentSums))

startTime = datetime.now()
print(getNum())
print(datetime.now() - startTime)



