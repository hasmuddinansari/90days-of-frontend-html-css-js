const addTxt = document.getElementById("noteText");
const addTitle = document.getElementById("noteTitle");

let storeData = document.getElementById("note");

const local = localStorage.getItem('store')
const store = local ? JSON.parse(local) : []


window.addEventListener("load", () => {
    renderUi(store);
});


const btn = document.getElementById("add-btn");
btn.addEventListener("click", function (e) {
  e.preventDefault();
  const note = {
    title: addTitle.value,
    text: addTxt.value,
  };

  
  store.push(note);
  addTitle.value = "";
  addTxt.value = "";
  addTitle.focus()
  renderUi(store);
  localStorage.setItem("store", JSON.stringify(store));
});

function renderUi(store) {
  let dom = "";
  store.forEach((elem,index) => {
    dom += `
            <div>
                <h2>Note ${index + 1} </h2>
                <h3>${elem.title}</h3>
                <p> ${elem.text}</p>
            </div>
        `;
  });
  storeData.innerHTML = dom;
}
console.log(store);
