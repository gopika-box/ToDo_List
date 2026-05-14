const input= document.querySelector("#input")
const btn= document.querySelector("#Btn1")
const ul = document.querySelector("#ul")

btn.addEventListener("click",(e) =>{
    e.preventDefault()
    let task = input.value
    if (task === ""){
        alert("Please enter a task")
        return;
    }
    // create list item
    const li= document.createElement("li")
    
    li.classList.add("text-md","items-center","bg-stone-700","py-2","px-6","text-start","rounded-lg","flex","justify-between",)
    const span= document.createElement("span")
 
    span.textContent= task
    li.appendChild(span)
    // append ul to li
    ul.appendChild(li)

    

    // create delete button
    const deleteButton = document.createElement("button")
    deleteButton.innerHTML="Delete"
    deleteButton.classList.add("bg-red-500","hover:bg-red-400", "px-2" ,"py-1","rounded-lg","text-end")
    
    
    // edit button
    const editButton = document.createElement("button")
    editButton.textContent="Edit"
    editButton.classList.add("bg-green-400","hover:bg-orange-300","px-3","py-1", "rounded-lg")
    // li.appendChild(editButton)
    
    // create a div for delete and edit button
    const btnDiv = document.createElement("div")
    btnDiv.classList.add("flex","gap-3")
    btnDiv.appendChild(editButton)
    btnDiv.appendChild(deleteButton)
    li.appendChild(btnDiv)


  
    // append delete btn to li
    

    // clear input field 
    input.value=""

    deleteButton.addEventListener("click",() =>{
        li.remove()
    })

    


    editButton.addEventListener("click",() =>{
        const newTask = prompt("Edit Task:",span.textContent)
        if(newTask !=""){
            console.log(newTask);
            span.textContent = newTask
        }

        





    })

})