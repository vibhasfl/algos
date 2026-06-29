// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Time O(n2)
// Space O(1)
// function removeDuplicates(arr){

// 	for(i=0;i<arr.length;i++){
// 		if(arr[i]==arr[i+1]){
// 			arr.splice(i, 1);
// 			i--;
// 			console.log(i)
// 		}
// 	}

// 	return arr

// }

// console.log(removeDuplicates([1, 1, 2, 2, 3, 4, 4]))

function removeDuplicatesv2(arr) {
  let totalUniqueElement = 1

  for (let i = 1; i < arr.length; i++) {
    let lastElement = arr[i - 1]

    if (lastElement !== arr[i]) {
      arr[totalUniqueElement] = arr[i]
      totalUniqueElement++
    }

    console.log(
      "currentElement : ",
      arr[i],
      "totalUniqueElements : ",
      totalUniqueElement,
      "arr :",
      arr,
    )
  }

  return totalUniqueElement
}

console.log(removeDuplicatesv2([1, 1, 2, 2, 3, 4, 4]))
