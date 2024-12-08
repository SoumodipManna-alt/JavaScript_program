// why we need __proto__

const obj1={
    key1:"value1",
    key2:"value2"
}

const obj2={
    key3:"value3"
}

console.log(obj2.key3);

// at this time if we want to fetch any value from obj2 and the value present in obj1 then it gives undefine ,it's fine but we want that if any value that is not present in obj2 then compiler find it into another object 
// so syntax will be **** const current_object = Object.create(passing another object where the value may get ) ******  , const obj2 = Object.create(obj1)


const obj3 =Object.create(obj1)
obj3.key4="value4"

console.log(obj2.key1);//undefined
console.log(obj3.key1);//value1 


////          Application       ////
const calling_object={

    show_user_details:function()
    {
        console.log("name", this.name ," , email", this.email , " , age", this.age , ", phone", this.ph);
        
    }
}


function crete_userDetails(name,email,age,ph){

    const user = Object.create(calling_object)
    user.name=name
    user.email=email
    user.age=age
    user.ph=ph
    
    return user
}

const user=crete_userDetails('rocky','rocky@',18,9134537389)
user.show_user_details()  ///name rocky  , email rocky@  , age 18 , phone 9134537389

// there may be any number of method can be added in calling_object , and we call it easily  ,, 
// you may be thiking that if we add method directly created object , if we do this then huge number of memory space is consumed because function are same but it will be created multiple time so this type of problem we can reduce easily by this process
// actually when we """"create Object.create(calling_object) """" this the ___proto__ is created for this object 