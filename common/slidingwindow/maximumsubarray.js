// You are given an integer array nums and an integer k. Find the maximum subarray sum of all the subarrays of nums that meet the following conditions:

// The length of the subarray is k, and
// All the elements of the subarray are distinct.
// Return the maximum subarray sum of all the subarrays that meet the conditions. If no subarray meets the conditions, return 0.

// A subarray is a contiguous non-empty sequence of elements within an array.

 

// Example 1:

// Input: nums = [1,5,4,2,9,9,9], k = 3
// Output: 15
// Explanation: The subarrays of nums with length 3 are:
// - [1,5,4] which meets the requirements and has a sum of 10.
// - [5,4,2] which meets the requirements and has a sum of 11.
// - [4,2,9] which meets the requirements and has a sum of 15.
// - [2,9,9] which does not meet the requirements because the element 9 is repeated.
// - [9,9,9] which does not meet the requirements because the element 9 is repeated.
// We return 15 because it is the maximum subarray sum of all the subarrays that meet the conditions
// Example 2:

// Input: nums = [4,4,4], k = 3
// Output: 0
// Explanation: The subarrays of nums with length 3 are:
// - [4,4,4] which does not meet the requirements because the element 4 is repeated.
// We return 0 because no subarrays meet the conditions.

// Time : O(n+k)
// space : O(k) (k sliced array)

function getMaximumsubarray(intArr,count){

    if (count > intArr.length) return 0;

    let maxSum = 0
    

    for(let i=0;i<intArr.length;i++){
        
        let arrSubset = intArr.slice(i,i+count)
        
        let arrSet = new Set(arrSubset)

        if(arrSet.size === count){
            let curSum = arrSubset.reduce((a,b) => a+b)
            maxSum = Math.max(curSum,maxSum)
        }
    }

    return maxSum

}

console.log(getMaximumsubarray([1,5,4,2,9,8,10],3))


3
4
5