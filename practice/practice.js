function groupOfArr(arr,input) {
    const subSet=[];
    for (let i = 0; i < arr.length; i++) {
        for(let j=i+1;j<arr.length;j++){
            if((arr[i]+arr[j])===input){
                subSet.push([arr[i],arr[j]])
            }
        }
    }
    console.log(subSet);
};

groupOfArr([1,2,5,8,3,7,6] ,7)