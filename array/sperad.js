 let arr=[10,20,30]
 const newarray=[...arr]
 console.log(newarray);

 /// for concatenation

 let a1=['a','b']
 let a2=[1,2]

 const con=[...a1,...a2]
 console.log(con);
 

 // for adding element

//  arr.push(40,50)
 arr.push(...[40,50]) ///****both are same line 16,17 */
 console.log(arr);
 
//  output
 //[ 10, 20, 30 ]
//  [ 'a', 'b', 1, 2 ]
//  [ 10, 20, 30, 40, 50 ]
 
 