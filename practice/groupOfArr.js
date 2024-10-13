// function groupOfArr(arr) {
//     const val = Math.max.apply(1, arr);
//     const maxIndex = arr.indexOf(val);
//     let diff = 0;
//     const elements = [];
//     for (let i = 0; i <= arr.length; i++) {
//         if (i !== 0) {
//             const val = Math.min.apply(1, elements);
//             ((arr[i] - val) > diff) && diff=arr[i] - val;
//         }
//         elements.push(arr[i])
//     }
//     console.log(diff);
// };
// function groupOfArr(arr) {
//     let diff = arr[1] - arr[0];
//     let minVal = arr[0];
//     for (let i = 1; i <= arr.length; i++) {
//         if ((arr[i] - minVal) > diff) {
//             diff = arr[i] - minVal;
//         }
//         if (minVal > arr[i]) {
//             minVal = arr[i];
//         }
//     }
//     console.log(diff);
// };

// function groupOfArr(arr) {
//     const obj={};
//     for (let i = 0; i < arr.length; i++) {
//        if(arr.indexOf(arr[i])===i){
//            obj[arr[i]]=1
//        }else{
//         obj[arr[i]]+=1
//        }
//     }
//     console.log(obj)
// };

// groupOfArr([1,1,1,1,2,2,2,2,2,2,3,3])

function reverseSentance(input){
    const arr=input.split(' ');
    const reverse=[];
    arr.map((item,index)=>{
        if(item.length>0){
            const strSplit=item.split('');
            let x=''
            for(let i=strSplit.length-1;i>=0;i--){
            x+=strSplit[i]
            }
        reverse.push(x);
        }else{
        reverse.push(item)
        }
    })
     console.log(reverse.toString().replaceAll(',',' '))
    }
    reverseSentance('i am working on react')

function groupOfArr(obj) {
    console.log(obj)
    const mainKeys = Object.keys(obj);
    console.log(mainKeys)
};

let input = {
    user: {
        key_value_map: {
            CreatedDate: "123424",
            Department: {
                Name: "XYZ"
            }
        }
    }
}
// output = {
//     "user.key_value_map.CreatedDate": "123424",
//     "user.key_value_map.Department.Name": "XYZ"
// }

groupOfArr(input)