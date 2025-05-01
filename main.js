"use strict"
// list_txt = User input
const list_txt = document.querySelector(".field-input")
// addbutton = button to Add list
const addbutton = document.querySelector(".field-btn")

addbutton.addEventListener("click", function(){
    // Creating div with item class (list class)
    const div_item = document.createElement("div");
    div_item.classList.add("item");
    // creating p element and adding the user input in it
    const list_item = document.createElement("p");
    list_item.classList.add("item-para")
    list_item.textContent = list_txt.value;

    // creating the delete button
    const del_button = document.createElement("button");
    del_button.classList.add("del-btn");
    del_button.textContent = "Delete";
    
    // if list is empty we return it else we append the list item in it
    if (list_txt.value === "")return;
    document.body.appendChild(div_item);
    div_item.appendChild(list_item);
    div_item.appendChild(del_button);
    list_txt.value = " ";
})
// removing the list when the delete button is clicked (added click event on the document. 
// If the target contains del button class then we remove the parentElement from the body.)
document.addEventListener("click" , function(e){
   const clicked_item = e.target;
   if(clicked_item.classList.contains("del-btn")){
        clicked_item.parentElement.remove();
   }
})

