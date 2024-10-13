Array.prototype.customForeach=function(fn){
    for(let i=0;i<this.length;i++){
     this[i]=fn(this[i],i,this)
   }
   return;
   }
   
   const arr1=[100,200,300,400];
   
   arr1.customForeach((i,j,k)=> {
       console.log(i)
       console.log(j)
       console.log(k)
       return i*3
   })
   console.log(arr1)