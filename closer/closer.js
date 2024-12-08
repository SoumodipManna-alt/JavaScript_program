function outer(firstname ){
    console.log(firstname);
    function inner()
    {
        console.log("the variable of outer ",firstname);
        
    }
    return  inner

}

const ans = outer("rocky")
ans();


// let understand in detail 
// step 1 : first create a global execution 
//                     in memory
//             i) . outer function is created and a array will be created that contain the arguments
//             ii). ans is created and initialize but not initialize

//         code execution

//             i). first line is execute 1 - 10(already execute in memory creation global)
//             ii). function is called outer  here a function execution is creted 
//                                         in function execution

//                                         i) local memory is created --> inner function()
//                                         ii)start execution --> i) print firstname then return the inner along with first variable because the inner funtion in created inside outer function and when any inner function is returned it returnd with lexical coping variable that why we get the value
//                                         iii) now ans variable contain inner function and variable also like a bag (inner and firstname)
//                                         when call it it shows first name 


//*** application */

// find  any number power of any number

function power(pow){

    return function any_number(num){
       return (num**pow);
        
    }
}
const find_power = power(3)
console.log(find_power(2));

// example 2 --->


function outter(){

    let i=0;
    return function inner_fun(){
       if(i==0){
        i=i+1
        console.log('ai call holam'
        );
       }
       else {
        
       console.log(`the call times is ${i}`
       );
       }
        
    }
}
const result = outter()
result()

result()

