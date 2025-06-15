// Given 2 sorted arrays [0,3,4,31], [4,6,30].
// Merge them such to create 1 arr o/p to be [0,3,4,4,6,30,31]
/*
0 4 => 0
3,4 => 3
4,4 => 4
4,6 => 4
31,6 => 6
31,30 => 30
31,undefined => 31
*/

const a = [0,3,4,45]
const b = [4,6,30,31,40,50,55]

function mergeSortedArr(arr1,arr2){

    let i = 0;
    let j = 0;
    let mergedarr = []

    while(arr1[i] || arr2[j])
    {
        console.log(arr1[i],arr2[j])

        // No need as arr2[j] === undefined handles this cond
        // if(typeof arr1[i] == "undefined" || typeof arr2[j] == "undefined" ){
        //     mergedarr.push(arr1[i] || arr2[j])
        //     if(typeof arr1[i] == "undefined"){
        //         j++
        //     }else{
        //         i++
        //     }
        //     continue
        // }

        if( arr1[i] < arr2[j] || arr2[j] === undefined)
        {
            mergedarr.push(arr1[i])
            i++
        }
        else
        {
            mergedarr.push(arr2[j])
            j++
        }

    }

    return mergedarr
    

}

console.log(mergeSortedArr(a,b))