//flat() convert the multi dimensional to one dimensional

let arr=[10,20,['a','b'],30]
console.log(arr.flat());


// flat by default convert two dimen --> single , not multi to single for that we have to pass parameter


let arr2=[10,20,['a','b',[78,675,75]],30]
console.log(arr2.flat()); //[10, 20, 'a', 'b', Array(3), 30]
console.log(arr2.flat(2));//[10, 20, 'a', 'b', 78, 675, 75, 30]

