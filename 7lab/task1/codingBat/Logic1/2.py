def caught_speeding(speed, is_birthday):
  if is_birthday:
    if(speed in range(0,66)):
      return 0
    elif(speed in range(66,86)):
      return 1
    else:
      return 2
  else:
    if(speed in range(0,61)):
      return 0
    elif(speed in range(61,81)):
      return 1
    else:
      return 2
