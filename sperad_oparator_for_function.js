function add(...numbers){
    console.log(typeof numbers);
    return numbers.reduce((acu,cur)=>(acu=acu+cur),0)
    

}

// let nums=[10,20,30,40,50]
console.log(add(10,20,30,40,50));
