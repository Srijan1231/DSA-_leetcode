let numMap = {};

// Iterate through the array
for (let i = 0; i < nums.length; i++) {
  // Calculate the complement needed to reach the target
  let complement = target - nums[i];

  // Check if the complement is already in the object
  if (numMap.hasOwnProperty(complement)) {
    // If found, return the indices of the two numbers
    return [numMap[complement], i];
  }

  // If not found, store the current number and its index in the object
  numMap[nums[i]] = i;
}

// If no solution is found, return an empty array or handle it as needed
return [];
