function myfunc(arr){
    let mock=[...arr];
    let mul=0;
  for(let i=0;i<mock.length;i++){
    for(let j=i+1;j<mock.length;j++){
     if(i!==j){
mul+=arr[j]
     }
    }
    mock[i]=mul;
    mul=0;
  }
  console.log(mock)
    }
myfunc([2,4,5,6,7])