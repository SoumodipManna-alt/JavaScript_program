const input=document.querySelector(".input")
const btn =document.querySelector(".btn")
const list_item=document.querySelector(".list")

btn.addEventListener('click',()=>{
    let new_element=document.createElement('li')
    new_element.innerText=input.value
    list_item.append(new_element)
})