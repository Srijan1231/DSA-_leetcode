Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

Example

There are  elements, two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:

0.400000
0.400000
0.200000
Function Description

Complete the plusMinus function in the editor below.

plusMinus has the following parameter(s):

int arr[n]: an array of integers
Print
Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with  digits after the decimal. The function should not return a value.

Input Format

The first line contains an integer, , the size of the array.
The second line contains  space-separated integers that describe .

Constraints



Output Format

Print the following  lines, each to  decimals:

proportion of positive values
proportion of negative values
proportion of zeros
Sample Input

STDIN           Function
-----           --------
6               arr[] size n = 6
-4 3 -9 0 4 1   arr = [-4, 3, -9, 0, 4, 1]
Sample Output

0.500000
0.333333
0.166667
Explanation

There are  positive numbers,  negative numbers, and  zero in the array.
The proportions of occurrence are positive: , negative:  and zeros: .



Explanation of solution:
This code appears to be written in JavaScript and is designed to analyze an array (`arr`) of numbers to determine the ratio of positive, negative, and zero values within it. Let's break it down step by step:

1. **Initializing an Object `nums`**: 
   - An object `nums` is initialized with three properties: `'positive'`, `'negative'`, and `'zero'`, all initialized to `0`. This object will be used to store counts of positive, negative, and zero numbers encountered in the array.

2. **Looping Through the Array**:
   - The code utilizes the `forEach()` method to iterate over each element (`element`) in the array `arr`.

3. **Counting Positive, Negative, and Zero Numbers**:
   - Inside the loop, it checks each element:
     - If the element is greater than `0`, it increments the count of `'positive'` numbers in the `nums` object.
     - If the element is less than `0`, it increments the count of `'negative'` numbers in the `nums` object.
     - If the element is `0`, it increments the count of `'zero'` numbers in the `nums` object.

4. **Calculating Ratios**:
   - After looping through all elements, it retrieves the keys of the `nums` object using `Object.keys(nums)`, which returns an array of keys (`['positive', 'negative', 'zero']`).
   - It then iterates over these keys using `forEach()`.
   - For each key, it calculates the ratio of the count of that key to the total number of elements in the array (`arr.length`). This ratio is calculated as `nums[key] / arr.length`.
   - It prints out the ratio using `console.log()`, formatting the ratio to have 6 decimal places using `toFixed(6)`.

In summary, this code analyzes an array of numbers, counting the occurrences of positive, negative, and zero values, and then calculates and prints the ratios of each type of number in the array.