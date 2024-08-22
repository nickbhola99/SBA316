//Elements from list.html
//submission buttons
var ebutton = document.getElementById("enter");
var nbutton = document.getElementById("nenter");
//inputs for list items and the User's name
var input = document.getElementById("input");
var ninput = document.getElementById("ninput");
//the shopping list
var list = document.querySelector("ul");
var item = document.getElementsByTagName("li");
var title = document.getElementById("specialtitle"); //title being changed
var logger = document.getElementById("logger");
//the three different websites
let bjswindow;
let instacartwindow;
let walmartwindow;

//function links to the BJs website, the other 2 follow the same pattern
function BJWindow() {
  bjswindow = window.open(
    "https://www.bjs.com/",
    "bjs",
    "width=800, height=800, resizable=yes, scrollbars=yes, location=yes"
  );
  bjswindow.focus();
}

//closes the window, all three websites have their own
function closeBJWindow() {
  bjswindow.close();
}

//Event Listerners for the buttons that open and close the websites, all three websites have their own sets
document.getElementById("BJWindowBtn").addEventListener("click", BJWindow);
document
  .getElementById("closeWindowBtn")
  .addEventListener("click", closeBJWindow);

function InstaWindow() {
  instacartwindow = window.open(
    "https://www.instacart.com/",
    "bjs",
    "width=800, height=800, resizable=yes, scrollbars=yes, location=yes"
  );
  instacartwindow.focus();
}

function closeInstaWindow() {
  instacartwindow.close();
}

document
  .getElementById("InstaWindowBtn")
  .addEventListener("click", InstaWindow);
document
  .getElementById("closeInstaBtn")
  .addEventListener("click", closeInstaWindow);

function WalWindow() {
  walmartwindow = window.open(
    "https://www.walmart.com/cp/food/976759",
    "bjs",
    "width=800, height=800, resizable=yes, scrollbars=yes, location=yes"
  );
  walmartwindow.focus();
}

function closeWalWindow() {
  walmartwindow.close();
}

document.getElementById("WalWindowBtn").addEventListener("click", WalWindow);
document
  .getElementById("closeWalBtn")
  .addEventListener("click", closeWalWindow);

//this method populates the shopping list
function addList() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value)); //User input is added into li, which is then added to the list
  list.appendChild(li);
  input.value = ""; //input is rest back to default

  var XBTN = document.createElement("button"); //the X button to delete entries
  XBTN.appendChild(document.createTextNode("X"));
  li.appendChild(XBTN);
  XBTN.addEventListener("click", deleteList); //Event Listener calling the function to delete Entries

  function deleteList() {
    li.style.display = "none"; //Entry is  completely removed by using style
  }
}

//click function for Event Listener
function clicked() {
  if (input.value.length > 0) {
    addList();
  } else {
    window.alert("Error: Must Input Something"); //alerts when User tries to add nothing to the List
  }
}

//function for Event Lister that changes the Title
function changeTitle() {
  if (ninput.value.length > 0) {
    title.textContent = `${ninput.value}'s Shopping List`; //title's textContent is updated to the new title with the User's name
    ninput.value = "";
  } else {
    window.alert("Error: Must Input Something");
  }
}

//log function to print out everything added to the list using nextElementSibling
function log() {
  let l = list;
  while (l) {
    console.log(l.innerText + "\n");
    l = l.nextElementSibling;
  }
}

ebutton.addEventListener("click", clicked);
nbutton.addEventListener("click", changeTitle);
logger.addEventListener("click", log);
