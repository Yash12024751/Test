function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        const li = document.createElement("li");

      
        const pTag = document.createElement("p");
        pTag.innerText = taskInput.value;
        pTag.style.flex = "1";
        pTag.style.margin = "0 10px";


        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("check");
        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                pTag.classList.add("task-done");
            } else {
                pTag.classList.remove("task-done");
            }
        });

        const removeBtn = document.createElement("button");
        removeBtn.innerText = "Delete";
        removeBtn.classList.add("delete");
        removeBtn.onclick = () => li.remove();

        const editBtn = document.createElement("button");
        editBtn.style.borderRadius="10px";
        editBtn.innerText = "Edit";
        let isEditing = false;

        editBtn.addEventListener("click", function () {
            isEditing = !isEditing;
            if (isEditing) {
                editBtn.innerText = "Save";
                pTag.contentEditable = true;
                pTag.focus();
            } else {
                editBtn.innerText = "Edit";
                pTag.contentEditable = false;
            }
        });

        li.appendChild(checkbox);
        li.appendChild(pTag);
        li.appendChild(editBtn);
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        taskInput.value = "";
    }
}
