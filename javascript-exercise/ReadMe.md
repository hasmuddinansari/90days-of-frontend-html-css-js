


const addTitle = document.getELementById("noteTitle")

const addTxt = document.getElementById("noteText")

const btn = documemnt.getElementById("add-btn")

let localStore = localStorage.getItem('notes')
let store = localStore ? JSON.parse(localStore)


btn.addEventListner("click", function(e){
e.preventDefault();

let note = {

    title: addTitle.value;
    text: addTxt.value
}
store.push(note)
addTitle.value = ""
addTitle.focus()
addTxt.value = ""
localStorage.setItem("notes",JSON.stringify(note))

showNotes(store);


})

function showNote(store){

let data = "";
store.forEach((element, index)=>{

data += `
<div>
<h1>Note ${index + 1}</h1>
<h2> element.title </h2>
<p>element.text</p>

</div>

      `


})

}

console.log(store)

