const input = document.querySelector("#favchap");
const addChapterBtn = document.querySelector("button");
const unorderedList = document.querySelector("#list");

addChapterBtn.addEventListener("click", () => {      
  if (input.value != "") {
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");
    
    li.textContent = input.value;
    deleteBtn.textContent = "❌";
  
    // Element: append() method - http://tinyurl.com/2fnkswxd
    // Element.append() can append several nodes and strings, 
    // whereas Node.appendChild() can only append one node.
    li.appendChild(deleteBtn);
    unorderedList.appendChild(li);

    input.focus();
    input.value = "";    
  
    deleteBtn.addEventListener("click", () => {
      unorderedList.removeChild(li);
      input.focus();
      input.value = "";
    }); 
  } else {
    input.focus();
    alert("Error: you have to add a book.");
  }
});
