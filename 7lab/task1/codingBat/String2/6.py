def cat_dog(str):
  countcat=0
  countdog=0
  for i in range(len(str)-2):
    if(str[i:i+3]=='cat'):
      countcat+=1
    elif str[i:i+3] == 'dog':
      countdog+=1
  if(countdog==countcat):
    return True
  else:
    return False
  
