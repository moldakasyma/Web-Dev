def smallest(a,b,c,d):
    return min((min(min(a,b),c),d))
arr=list(map(int,input().split()))
print(smallest(arr[0],arr[1],arr[2],arr[3]))