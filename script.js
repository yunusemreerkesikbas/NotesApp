const addBtn = document.getElementById('add');
// const notesEL = document.querySelector(".notes");
const notes = JSON.parse(localStorage.getItem("notes"));
if (notes) {
    
    notes.forEach(note => {
        addNewNote(note);
    });
}

addBtn.addEventListener('click', () => {

    addNewNote();
    // yeni nota bağlandık
});

function addNewNote(text = "") {

    const note = document.createElement('div');
    note.classList.add('note');
    // butona basınca oluşacak yapı
    note.innerHTML = `
        <div class="notes">
            <div class="tools">
                <button class="edit"><i class="fas fa-edit"></i></button>
                <button class="delete"><i class="fas fa-trash-alt"></i></button>
            </div>
            <div class="main ${ text ? "" : "hidden"}"> </div>
            <textarea class="main ${ text ? "hidden" : ""}"></textarea>
        </div>`;


        // edit ve delete butonlarını aldık
    const editBtn = note.querySelector(".edit");
    const deleteBtn = note.querySelector(".delete");

    const main = note.querySelector(".main");
    const textArea = note.querySelector("textarea");
    textArea.value = text;
    main.innerHTML = marked(text);
    editBtn.addEventListener("click", () => {
        main.classList.toggle("hidden");
        textArea.classList.toggle("hidden");
    })
    deleteBtn.addEventListener("click", () => {
        note.remove();

        updateLS();

    });
    textArea.addEventListener("input", (e) => {
        const { value } = e.target;
        main.innerHTML = marked(value);
        updateLS()

    }) 
//test

    document.body.appendChild(note);
}
function updateLS(){

    // local storage ekledik
    const notesText = document.querySelectorAll('textarea');
    const notes = [];
    notesText.forEach((note) => {
        notes.push(note.value);
    });
    localStorage.setItem('notes', JSON.stringify(notes));
}
