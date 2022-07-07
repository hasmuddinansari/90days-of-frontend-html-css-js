// // const btn = document.getElementById("btn");
// // let display = document.getElementById("first-display");
// // let notes = document.getElementById("notes");

// // btn.addEventListener('click',function(e){
// //     if(display.value!==null){
// //         display.value.push(notes.value);
// //         // display.value ="",
// //     }
// //     display.value="";

// // });

// let addBtn = document.getElementById("add-btn");
// let addTitle = document.getElementById("note-title");
// let addTxt = document.getElementById("note-text");

// addBtn.addEventListener("click", function (e) {
//   if (addTitle.value == "" || addTxt.value == "") {
//     alert("please add note title and details");
//   }

//   let notes = localStorage.getItem("notes");
//   if (notes == null) {
//     notesObj = [];
//   } else {
//     notesObj = JSON.parse(notes);
//   }
//   let myObj = {
//     title: addTitle.value,
//     text: addTxt.value,
//   };
//   notesObj.push(myObj);
//   localStorage.setItem("notes", JSON.stringify(notesObj));
//   addTitle.value = "";
//   addTxt.value = "";

//   showNotes();
// });

// function showNotes() {
//   let notes = localStorage.getItem("notes");

//   if (notes == null) {
//     notesObj = [];
//   } else {
//     notesObj = JSON.parse(notes);
//   }

//   let html = "";
//   notesObj.forEach(function (element, index) {
//     html += `
//     <div class="note">
//     <p class="note-counter">Note ${index + 1}</p>
//     <h3 class="note-title"> ${element.title} </h3>
//     <p class="note-text"> ${element.text}</p>
//     <button id="${index}"onclick="deleteNote(this.id)" class="note-btn">Delete Note</button>
// </div>

//     `;
//   });
//   let notesElm = document.getElementById("notes");
//   if (notesObj.length != 0) {
//     notesElm.innerHTML = html;
//   } else {
//     notesElm.innerHTML = `No Notes Yet! Add a note using the form above.`;
//   }

// }

// // Function to delete a note
// function deleteNote(index) {
//     //   console.log("I am deleting", index);
//         let confirmDel = confirm("Delete this note?");
//         if (confirmDel == true) {
//             let notes = localStorage.getItem("notes");
//             if (notes == null) {
//                 notesObj = [];
//             } else {
//                 notesObj = JSON.parse(notes);
//             }

//             notesObj.splice(index, 1);
//             localStorage.setItem("notes", JSON.stringify(notesObj));
//             showNotes();
//         }

//     }
//     showNotes();






















// let addBtn = document.getElementById("add-btn");

// addBtn.addEventListener("click", function (e) {
//   let addTxt = document.getElementById("note-text");

//   let notes = localStorage.getItem("notes");
//   if (notes == null) {
//     notesObj = [];
//   } else {
//     notesObj = JSON.parse(notes);
//   }
//   let myObj = {
//     addText:addTxt.value
//   }
//   notesObj.push(myObj);
//   localStorage.setItem("notes", JSON.stringify(notesObj));
//   addTxt.value = "";
//   console.log(notesObj)
//   addTxt.value = "";

//   showNotes();
// });

// function showNotes() {
//   let notes = localStorage.getItem("notes");
//   if (notes == null) {
//     notesObj = [];
//   } else {
//     notesObj = JSON.parse(notes);
//   }

//   let html = "";
//   notesObj.forEach(function(element,index) {
//     html += `
//     <div class="card-body">
//         <h5 class="card-title">Note ${index + 1}</h5>
//         <p class="card-text"> ${element}</p>
//         <button id="delete-btn  ">Delete Note</button>
//     </div>`;

//   });
// let notesElm = document.getElementById("notes")
//   if (notesObj.length != 0) {
//         notesElm.innerHTML = html;
//       } else {
//         notesElm.innerHTML = `No Notes Yet! Add a note using the form above.`;
//       }
// }

// showNotes();
