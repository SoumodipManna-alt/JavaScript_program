document.getElementById("button").addEventListener('click',()=>{
    let input=document.getElementById("input").value
    console.log(typeof input);//string
    console.log(input=='sss');// gives false if i give some space in web page then i write sss
    
    // so we use trim()
    // and it is very important when we work in any project 
    
    
    //  for input '   sss'
    console.log(input.trim().length);//3
    console.log(input.length);//6
    
})