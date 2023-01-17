let todoData = [
  { name: "Buy grocery", checked: false },
  { name: "Practice more programming", checked: false },
  { name: "Read book", checked: false },
  { name: "Excercise Yoga at night", checked: false },
  { name: "Dentist appointment reminder", checked: false },
];
function focusInput() {
  const todoElement = document.getElementById("todoInput");
  todoElement.focus();
}

function printData(arr) {
  const listContainerNode = document.getElementById("listItems"); // get <Ul> parent element
  listContainerNode.innerHTML = ""; // for earasing all listItems in <ul>

  for (let i = 0; i < arr.length; i++) {
    const itemObj = arr[i];
    const itemStr = itemObj.name;
    const checkedRule = itemObj.checked;

    const listItem = document.createElement("li"); // for creat li <li><li>
    listItem.classList.add("list"); // for adding class to li <li class="list"><li>

    if (checkedRule) {
      listItem.classList.add("checked"); // <li class="list checked"><li>
    }

    const checkBtn = document.createElement("button"); // <button></button>
    checkBtn.classList.add("btn"); // <button class="btn"></button>
    checkBtn.classList.add("check-btn"); // <button class="btn check-btn"></button>
    checkBtn.innerHTML = "✓"; //  <button class="btn check-btn">✓</button>

    checkBtn.addEventListener("click", () => {
      const newData = checkItem(todoData, i);
      todoData = newData;
      printData(todoData);
    }); // for adding click event to the check botton

    const delBtn = document.createElement("button");
    delBtn.classList.add("btn");
    delBtn.classList.add("delete-btn");
    delBtn.innerHTML = "X";

    delBtn.addEventListener("click", () => {
      const newData = deleteItem(todoData, i);
      todoData = newData; // for assign newdata to main data
      printData(todoData);
    });

    listItem.innerHTML = itemStr;
    listItem.appendChild(delBtn);
    listItem.appendChild(checkBtn);
    const listContainerNode = document.getElementById("listItems");
    listContainerNode.appendChild(listItem);
  }
}

printData(todoData);
focusInput();

const addBtnElm = document.getElementById("addBtn"); // for getting the add button
addBtnElm.addEventListener("click", addInput);

function addInput() {
  const todoInputElm = document.getElementById("todoInput"); // for getting input
  const value = todoInputElm.value; // for getting value of the input
  let result = {
    // for making obj structurs
    name: value,
    checked: false,
  };
  if (value === "") {
    return;
  } else {
    todoData.unshift(result);
  }
  printData(todoData); // for printing the whole new list
  todoInputElm.value = ""; // to clear input after adding item to todo list
  focusInput();
}

// for making tike button work
function checkItem(arr, index) {
  // 1. find item and make checked true
  // 2. save item in a variable
  // 3. delete item
  // 4. push variable to the end of array
  // 5. print new data

  const itemObj = arr[index];
  const checkedRule = itemObj.checked;
  if (!checkedRule) {
    itemObj.checked = true;
  }

  const newData = deleteItem(arr, index); // 3. delete item
  newData.push(itemObj); // 4. push variable to the end of array
  return newData;
}

function deleteItem(arr, index) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== index) {
      // if i === index do not push in new array
      result.push(arr[i]);
    }
  }
  return result;
}
