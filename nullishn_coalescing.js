// *** important 

// definition------> it is an operator it is needed when we work with any null or any falsy value , if there is a condition we have to return a value from 2 value like ---> 0||10 , but in js it always return 10 , 0 is treated as a falsy value 


let my_fav_num = 0

// let user_fav_value = my_fav_num || 10
console.log(user_fav_value);//10


let user_fav_value = my_fav_num ?? 10

console.log(user_fav_value);//0
