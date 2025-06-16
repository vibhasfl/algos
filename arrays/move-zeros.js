/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

0,1,0,3,12 - zi(0)
1,0,0,3,12 - zi(1)
1,0,0,3,12 - zi(1)
1,3,0,0,12 - zi(2)


Example 2:
Input: nums = [0]
Output: [0]

*/

function moveZeros(arr){

    let firstZerothIndex = null;
    for(let i=0;i<arr.length;i++)
    {
        
        if(arr[i] !== 0  && firstZerothIndex !== null)
        {
            arr[firstZerothIndex] = arr[i]
            arr[i] = 0
            firstZerothIndex++
        }
        else
        { 
            if(arr[i] === 0 && firstZerothIndex === null){
                firstZerothIndex = i 
            }
        }

        // console.log(num_arr)
        
    }

    return arr
}

arr = [0,1,0,3,12]
// arr = [0]
// arr = [2,1]
// [45192,0,-659,-52359,-99225,-75991,0,-15155,27382,59818,0,-30645,-17025,81209,887,64648]
console.log(moveZeros(arr))