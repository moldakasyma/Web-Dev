def centered_average(nums):
  nums.remove(max(nums))
  nums.remove(min(nums))
  total=sum(nums)
  return total//len(nums)
