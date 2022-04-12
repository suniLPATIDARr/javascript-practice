var objArray = [
    { id: 0, name: 'Object 0', otherProp: '321' },
    { id: 1, name: 'O1', otherProp: '648' },
    { id: 2, name: 'Another Object', otherProp: '850' },
    { id: 3, name: 'Almost There', otherProp: '046' },
    { id: 4, name: 'Last Obj', otherProp: '984' },
    { id: 4, name: 'Last Obj', otherProp: '984' }
];
var obj = objArray.find(obj => obj.id === 4);
var objs = objArray.filter(obj => obj.id === 4);
var indexOfObject = objArray.findIndex(x => x.id === 4)
console.log(obj)
console.log(objs)
console.log(indexOfObject)