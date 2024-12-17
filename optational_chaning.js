let obj={
    name1:"rocky",
    age:21,
    collage:{
        sem1:8.20,
        sem2:8.70
    },
    inside_fun:function(name1){
        this.name1=name1;
    } 
}

// obj.inside_fun("ld")
// console.log(obj);

// output----->
// {
//     name1: 'ld',
//     age: 21,
//     collage: { sem1: 8.2, sem2: 8.7 },
//     inside_fun: [Function: inside_fun]
//   }


console.log(obj.collage?.sem); //mind it 'sem'---> undefined
console.log(obj.collage?.sem1); //8.2


