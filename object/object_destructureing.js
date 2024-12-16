


const obj1={
    name:"Rocky",
    age:21
}

const obj2={
    name1:"El-dorado",
    age:"infinity"
}

//---->console.log(obj1,obj2);//{ name: 'Rocky', age: 21 } { name1: 'El-dorado', age: 'infinity' }

// Now we store it into another obj by using shallow copy

const obj3 = {...obj1,...obj2}
//---->console.log(obj3);// {name: 'Rocky', age: 'infinity', name1: 'El-dorado' }


//***array of object ***//

const user = [
    {firstname:"rocky",age:21},
    {firstname:"arnab",age:26},
    {firstname:"soumo",age:35}
]

//destructuring 

const [user1,user2]=user
console.log(user1,user2);//{ firstname: 'rocky', age: 21 } { firstname: 'arnab', age: 26 }

// now i want to fetch firstname from user1 and age from user3

const  [{firstname},,{age}]=user//,, it used for skip second obj
console.log(firstname,age)// this is how we done it -->'rocky 35'

// now we change the propertise of 1st and 2nd user

const  [{firstname:first_username},{age:second_user_age}]=user// custom name 
console.log(first_username,second_user_age)//rocky 26 ***mind it the properties have been changed
console.log(firstname);



