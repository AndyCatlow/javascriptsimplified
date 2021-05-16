//1.select all elements

const form = document.querySelector("#new-item-form");
const list = document.querySelector("#list");
const input = document.querySelector("#item-input");

//2.when i submit the form, add new element

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //1. create new item

  const item = document.createElement("div");
  item.innerText = input.value;
  item.classList.add("list-item");

  //2. add that item to the list

  list.appendChild(item);

  //3. clear input

  input.value = "";

  //4. setup event listener to delete item when clicked
  item.addEventListener("click", () => {
    list.removeChild(item);
  });
});
