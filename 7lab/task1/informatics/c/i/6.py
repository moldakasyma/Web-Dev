x=int(input())
x2=0
while(x>0):
    x2=x2*10+x%10
    x=x//10
print(x2)