import "./styles.css";

if (document.readyState !== "loading") {
  console.log("Document is ready!");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document is ready after waiting!");
    initializeCode();
  });
}

function initializeCode() {
  const myButton = document.getElementById("my-button");

  myButton.addEventListener("click", function () {
    console.log("hello world");
    document.getElementById("h1").innerHTML = "My notebook";
  });

  const addData = document.getElementById("add-data");

  addData.addEventListener("click", function () {
    const list = document.getElementById("list");

    let newListItem = document.createElement("li");

    newListItem.innerText = document.getElementById("text").value;

    list.appendChild(newListItem);
  });
}
