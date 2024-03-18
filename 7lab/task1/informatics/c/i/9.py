x=int(input())
count=0
if(x==1):
    count=1
else: 
    count=2
    for i in range(2,int((x/2)+1)):
        if(x%i==0):
            count+=1
print(count)