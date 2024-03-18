if __name__ == '__main__':
    n = int(input())
    arr = map(int, input().split())
    newlist=list(arr)
    newlist.sort()
    newlist.reverse()
    second_max=0
    first_max=newlist[0]
    for i in newlist:
        if(i!=first_max):
            second_max=i
            break   
    print(second_max)         