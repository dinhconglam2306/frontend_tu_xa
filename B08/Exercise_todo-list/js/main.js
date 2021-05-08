const LEVELS = [
  { name: "Small", color: "bg-dark", level: 0 },
  { name: "Medium", color: "bg-warning", level: 1 },
  { name: "High", color: "bg-danger", level: 2 },
];
let elmAreaListTask = document.getElementById("area-list-task");
let elmAreaForm = document.getElementById("area-form");
let btnToggleForm = document.getElementById("btn-toggle-form");
let btnCancelForm = document.getElementById("btn-cancel");
let btnSubmitForm = document.getElementById("btn-submit");
let btnSaveForm = document.getElementById("btn-save");
let elmInputName = document.getElementById("input-name");
let elmInputLevel = document.getElementById("input-level");
let elmInputHidden = document.getElementById("input-hidden");

let items = loadLocalStorage();
showItems(items);

console.log(items);

// Sau khi delete lần đầu thì NodeList delete không còn là những phần từ bản đầu nữa.
// Nên sau khi ấn delete lần 2 thì sẽ không được!!!!
// document.querySelectorAll(".btn-delete").forEach(btnDelete =>{
//     btnDelete.addEventListener("click",()=>{
//         let id = btnDelete.getAttribute("data-id");
//         let items= deleteItem(id)
//         showItems(items);
//     })
// })

//EVENT

// ==============DELETE-ITEM START==================
// Nhận sự kiện từ document, khi click vào phần từ có class = btn-delete thì khi đó mới thự hiện xóa!!!
document.addEventListener("click", (e) => {
  let elm = e.target;
  // DELETE
  if (elm.classList.contains("btn-delete")) {
    if (confirm("Bạn có chắc chắn xóa item này")) {
      let id = elm.getAttribute("data-id");
      let items = deleteItem(id);
      showItems(items);
      elmInputName.value = "";
    }
  }
  if (elm.classList.contains("btn-edit")) {
    let id = elm.getAttribute("data-id");
    let item = getItem(id);
    console.log(item);
    elmInputHidden.value = item.id;
    elmInputName.value = item.name;
    elmInputLevel.value = item.level;
    toggleForm();
  }
  if (elm.classList.contains("sort-value")) {
    let sortValue = elm.getAttribute("data-value");
    document.getElementById(
      "dropdownMenu2"
    ).innerText = sortValue.toUpperCase();
    document.getElementById("sort-title").innerText = sortValue.toUpperCase();
  }
});
// ==============DELETE-ITEM END==================

// ==============TOGGLE-FORM START==================

btnToggleForm.addEventListener("click", () => {
  if (elmAreaForm.classList.contains("d-none")) {
    toggleForm(1);
    resetForm();
  } else {
    toggleForm(0);
    resetForm();
  }
});

btnCancelForm.addEventListener("click", () => {
  toggleForm(0);
  resetForm();
});
// ==============TOGGLE-FORM END==================

// ==============CREAT-ITEM START================

btnSubmitForm.addEventListener("click", () => {
  if (elmInputName.value.trim()) {
    let item = {
      id: elmInputHidden.value ? elmInputHidden.value : makeID(),
      name: elmInputName.value,
      level: elmInputLevel.value,
    };
    let items = elmInputHidden.value ? editItem(item) : addItem(item);
    toggleForm();
    resetForm();
    showItems(items);
  } else {
    alert("Vui lòng nhập Task Name");
  }
});
// ==============CREAT-ITEM END==================

//FUNCTION

// Random ID => keyword: random string generator javascript
function makeID(length = 5) {
  let result = [];
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result.push(
      characters.charAt(Math.floor(Math.random() * charactersLength))
    );
  }
  return result.join("");
}

// Show LEVEL
function showItemLevel(value) {
  let item = LEVELS.find((elm) => elm.level == value);
  return `<span class="badge ${item.color}">${item.name}</span>`;
}

// Show ITEM
function showItems(items) {
  let content = "";
  items.forEach((item, idx) => {
    let index = idx + 1;
    let id = item.id;
    let name = item.name;
    let level = showItemLevel(item.level);
    content += `
        <tr>
            <td>${index}</th>
            <td>${name}</td>
            <td>${level}</td>
            <td>
                <button class="btn btn-warning btn-edit" data-id="${id}">Edit</button>
                <button class="btn btn-danger btn-delete" data-id="${id}">Delete</button>
            </td>
        </tr>
        `;
  });
  elmAreaListTask.innerHTML = content;
}

function saveLocalStorage(items) {
  localStorage.setItem("TODO_LISTS", JSON.stringify(items));
}

function loadLocalStorage() {
  let items = JSON.parse(localStorage.getItem("TODO_LISTS"));
  if (items) {
    return items;
  } else {
    return [];
  }
}

function deleteItem(id) {
  items = items.filter((item) => item.id != id);
  saveLocalStorage(items);
  return items;
}
function resetForm() {
  elmInputHidden.value = "";
  elmInputName.value = "";
  elmInputLevel.value = 0;
}
function toggleForm(showForm = 1) {
  if (showForm) {
    elmAreaForm.classList.remove("d-none");
    btnToggleForm.innerHTML = "Close";
    btnToggleForm.classList.remove("btn-info");
    btnToggleForm.classList.add("btn-danger");
  } else {
    elmAreaForm.classList.add("d-none");
    btnToggleForm.innerHTML = "Add";
    btnToggleForm.classList.remove("btn-danger");
    btnToggleForm.classList.add("btn-info");
  }
}

function addItem(item) {
  items.push(item);
  saveLocalStorage(items);
  return items;
}
function editItem(item) {
  let idx = items.findIndex((element) => element.id == item.id);
  items[idx] = item;
  saveLocalStorage(items);
  return items;
}
function getItem(id) {
  return items.find((elm) => (elm.id = id));
}
