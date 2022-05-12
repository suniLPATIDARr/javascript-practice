const arr = [1, 2, 9, 5, 7, 8, 2, 5, 9, 1];

const unique = []

// for(let i=0)
function onlyUnique(value, index, self) {
    return !self.indexOf(value) === index;
}

// usage example:
var a = ['a', 1, 'a', 2, '1'];
var u = a.filter(onlyUnique);
console.log(u)
for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
        unique.push(arr[i]);
    }
}
// unique.sort((a, b) => a - b)
// console.log(unique);
var Arr = [1, 7, 2, 8, 3, 4, 5, 0, 9];

for (var i = 1; i < Arr.length; i++)
    for (var j = 0; j < i; j++)
        if (Arr[i] < Arr[j]) {
            var x = Arr[i];
            Arr[i] = Arr[j];
            Arr[j] = x;
        }

// console.log(Arr);
// console.log(unique);

function groupOfArr(arr, group) {
    const holdingArr = []
    let currentArr = []
    for (let i = 0; i < arr.length; i++) {
        // console.log(currentArr.length)
        if (currentArr.length === 0 || currentArr.length <= group) {
            currentArr.push(arr[i]);
        }
        if (currentArr.length === group) {
            holdingArr.push(currentArr);
            currentArr = [];
        }
        if (i === (arr.length - 1)) {
            currentArr.length > 0 && holdingArr.push(currentArr);
        }
    }
    console.log(holdingArr)
};

groupOfArr([11, 3, 4, 6, 7, 8, 9, 0], 4)