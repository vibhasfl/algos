function removeDuplicates(arr){
	
	for(i=0;i<arr.length;i++){
		if(arr[i]==arr[i+1]){
			arr.splice(i, 1);
			i--;
			console.log(i)
		}
	}

	return arr

}

console.log(removeDuplicates([1,1,2,2,3,4,4]))