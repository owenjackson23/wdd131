const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

// Add chapter
button.addEventListener("click", function () {
    if (input.value.trim() !== "") {
        // Create list item
        const li = document.createElement("li");
        li.textContent = input.value;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";
        // Delete chapter
        deleteButton.addEventListener("click", function () {
            list.removeChild(li);
            input.focus();
        });

        // Add delete button to list item
        li.appendChild(deleteButton);
        // Add list item to list
        list.appendChild(li);

        // Clear input
        input.value = "";
    }
    input.focus();
});