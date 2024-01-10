def two_sum(nums, target):
    # Dictionary to store the difference and index
    num_dict = {}
    
    for i, num in enumerate(nums):
        difference = target - num
        
        if difference in num_dict:
            return [num_dict[difference], i]
        
        num_dict[num] = i
    
    return None

nums = [2, 7, 11, 15]
target = 9
result = two_sum(nums, target)
print(result)  # Output: [0, 1]
