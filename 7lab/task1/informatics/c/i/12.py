x=(input())
ans=0
for i in range (len(x)):
    bit=int(x[-i-1])
    ans+=bit*(2**(i))
   
    
print(ans)