const notesEL = document.querySelector(".notes");
const editBtn = document.querySelector(".edit");
const deleteBtn = document.querySelector(".delete");

const main = notesEL.querySelector(".main");
const textArea = notesEL.querySelector("textarea");

editBtn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
})

textArea.addEventListener("input", (e) => {
    const { value } = e.target;
    main.innerHTML = marked(value);
}) 

// <!-- <div class="notes">
// <div class="tools">
//     <button class="edit"><i class="fas fa-edit"></i></button>
//     <button class="delete"><i class="fas fa-trash-alt"></i></button>
// </div>
// <div class="main hidden"> </div>
// <textarea></textarea>
// </div> -->