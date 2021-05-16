const gridList = document.querySelector(".grid-list");
console.log(gridList);

function FizzConsole() {
  for (let i = 1; i < 20; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("fizzbuzz");
    } else if (i % 3 == 0) {
      console.log("fizz");
    } else if (i % 5 == 0) {
      console.log("buzz");
    } else console.log(i);
  }
}

function FizzArray(val1, val2) {
  let returnValue = [];
  returnValue[0] = `Fizz on mulitples of ${val1}, Buzz on multiples of ${val2}, FizzBuzz on multiples of both.`;
  for (let i = 1; i <= 20; i++) {
    returnValue[i] =
      (i % val1 == 0 ? "Fizz" : "") + (i % val2 == 0 ? "Buzz" : "") || i;
  }
  console.log(returnValue);

  showValues(returnValue);
}

function showValues(array) {
  array.forEach((item) => {
    let gridItem = document.createElement("div");
    gridItem.innerText = item;
    gridList.appendChild(gridItem);
    if (item === "Fizz") {
      gridItem.classList.add("fizz");
    }
    if (item === "Buzz") {
      gridItem.classList.add("buzz");
    }
    if (item === "FizzBuzz") {
      gridItem.classList.add("fizzbuzz");
    }
    if (typeof item === "number") {
      gridItem.classList.add("number");
    }
  });
}

FizzArray(3, 5);
