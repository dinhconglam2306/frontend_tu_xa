let btnDeleteStorage = document.getElementById("btn-delete-storage");
let btnSendContact = document.getElementById("btn-send-contact");
let fullname = document.getElementById("fullname");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let job = document.getElementById("job");
const CONTACT_INFO = "";

btnSendContact.addEventListener("click", () => {
  let data = {
    fullname: fullname.value,
    email: email.value,
    phone: phone.value,
    job: job.value,
  };
  console.log(data);
  toJson(CONTACT_INFO, data);
});
btnDeleteStorage.addEventListener("click", () => {
  let data = {
    fullname: "",
    email: "",
    phone: "",
    job: job.value,
  };
  localStorage.setItem(CONTACT_INFO, JSON.stringify(data));
});
function loadLocalStorage(key, data) {
  loadLocalStorage.getItem(key, JSON.parse(data));
}

function toJson(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
