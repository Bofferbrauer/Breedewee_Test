const editData = document.querySelector(".EditEntry");
const deleteData = document.querySelector(".DeleteEntry");
const dataItems = document.querySelector(".DataList");
const importData = "firebase-data";

deleteData.addEventListener("click", () =>{
  console.log("Test successful");
});
editData.addEventListener("click", () =>{
  console.log("Test successful");
});

const newItem = document.createElement("ion-item");
newItem.textContent = importData
