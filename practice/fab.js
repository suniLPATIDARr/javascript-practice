function fab(input) {
    let number = 0;
    const arr = [];
    for (let i = 0; i <= input; i++) {
        if (i > 1) {
            number = arr[i - 1] + (arr[i - 2]);
            number <= input && arr.push(number);
            // lastVal = number;
        } else {
            arr.push(i)
        }

    }
    console.log(arr)
}
// fab(13)
var a = '3'
function x() {
    console.log(a)
    var a = '90'
}
x()