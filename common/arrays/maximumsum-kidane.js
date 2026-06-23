// Given an integer array arr[], find the subarray (containing at least one element) which has the maximum possible sum, and return that sum.
// Note: A subarray is a continuous part of an array.

// Examples:

// Input: arr[] = [2, 3, -8, 7, -1, 2, 3]
// Output: 11
// Explanation: The subarray [7, -1, 2, 3] has the largest sum 11.

// Input: arr[] = [-2, -4]
// Output: -2
// Explanation: The subarray [-2] has the largest sum -2.

// Input: arr[] = [5, 4, 1, 7, 8]
// Output: 25
// Explanation: The subarray [5, 4, 1, 7, 8] has the largest sum 25.


function getKidane(intArr){

   let maxSum = intArr[0]
   let curSum = intArr[0]

   for(let i=1;i<intArr.length;i++){

        curSum = Math.max(intArr[i],intArr[i]+curSum)
        maxSum = Math.max(curSum,maxSum)
   }

   return maxSum

}


console.log(getKidane([2, 3, -8, 7, -1, 2, 3]))
console.log(getKidane([-2, -4]))
console.log(getKidane([5, 4, 1, 7, 8]))
console.log(getKidane([-1, 2, -1, 2]))
// maxSum = 7
// arr[i] = 7

// maxSum = 7
// arr[i] = -1

// maxSum = 5+4+1
// arr[i] = 1

