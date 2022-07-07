const addTxt = document.getElementById("noteText");
const addTitle = document.getElementById("noteTitle");

let storeData = document.getElementById("note");

const btn = document.getElementById("add-btn");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  const div = document.createElement("div");

  div.style.width = "200px";
  div.style.height = "200px";
  div.style.border = "2px solid black";


  const h1 = document.createElement("h1");
  h1.setAttribute("class", "heading");
  h1.innerHTML = addTitle.value;
  h1.style.fontWeight = "bold";
  h1.style.color = "red";
  h1.style.fontSize = "40px";

const hr = document.createElement("hr")


  const p = document.createElement("p");
  p.setAttribute("class", "para");
  p.innerHTML = addTxt.value;
  p.style.fontSize = "15px";




  div.appendChild(h1);
  div.appendChild(hr)
  div.appendChild(p);

  storeData.appendChild(div);
});
