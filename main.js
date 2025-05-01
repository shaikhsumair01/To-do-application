"use strict"
const list_txt = document.querySelector(".field-input")
const addbutton = document.querySelector(".field-btn")

addbutton.addEventListener("click", function(){
    const div_item = document.createElement("div");
    div_item.classList.add("item");
    const list_item = document.createElement("p");
    list_item.classList.add("item-para")
    list_item.textContent = list_txt.value;
    const del_button = document.createElement("button");
    del_button.classList.add("del-btn");
    del_button.textContent = "Delete";
    
    if (list_txt.value === "")return;
    document.body.appendChild(div_item);
    div_item.appendChild(list_item);
    div_item.appendChild(del_button);
    list_txt.value = " ";
})
document.addEventListener("click" , function(e){
   const clicked_item = e.target;
   if(clicked_item.classList.contains("del-btn")){
        clicked_item.parentElement.remove();
   }
})

