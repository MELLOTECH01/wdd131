let input = document.querySelector("#favchap");
let button = document.querySelector("button");
let ulist = document.querySelector("ul");


button.addEventListener("click", function(){
    if(input.value.trim()!==""){
        let list = document.createElement("li");
        let deleteButton = document.createElement("button");

        list.textContent = input.value;
        deleteButton.textContent = "❌";

        list.appendChild(deleteButton);
        ulist.appendChild(list);
        deleteButton.addEventListener("click", function(){
           ulist.removeChild(list);
            input.focus();
        });
        input.value = "";
        input.focus();
    }else{
        alert("Type your favourite chapter.");
        input.focus();
    }
});



