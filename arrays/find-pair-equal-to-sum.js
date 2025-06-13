const arr = [1,3,8,12,15,0,4,5]

function findPair(arr,sum){

    const arrSet = new Set()

    // O(n)
    for(let i=0;i<arr.length;i++)
    {
        arrSet.add(arr[i])
    }

    pairs = []
    // a+b=sum that means sum-a = b. So we would check b in set
    for(let i=0;i<arr.length;i++)
    {
        compliment = sum-arr[i]
        
        if(arrSet.has(compliment)){
            pairs.push([arr[i],compliment])
            arrSet.delete(arr[i])
        }

    }

    return pairs


}

console.log(findPair(arr,20))