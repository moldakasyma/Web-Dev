def lucky_sum(a, b, c):
  sum=0
  sum+=a if a!=13 else 0
  sum+=b if a!=13 and b!=13 else 0
  sum+=c if a!=13 and b!=13 and c!=13 else 0
  return sum
