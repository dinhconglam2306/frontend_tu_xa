let btnDeleteStorage = document.getElementById("btn-delete-storage");
let btnSendContact = document.getElementById("btn-send-contact");
let fullname = document.getElementById("fullname");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let job = document.getElementById("job");
const CONTACT_INFO = "HELLo";

let contactInfo = loadStorage(CONTACT_INFO);

loadInfo(contactInfo);

btnSendContact.addEventListener("click", () => {
  let data = {
    fullname: fullname.value,
    email: email.value,
    phone: phone.value,
    job: job.value,
  };
  toJson(CONTACT_INFO, data);
});
btnDeleteStorage.addEventListener("click", () => {
  loadLocalStorage.removeItem(CONTACT_INFO);
  fullname.value = "";
  email.value = "";
  phone.value = "";
  job.value = "Student";
});
function loadLocalStorage(key) {
  var data = loadLocalStorage.getItem(key);
  if (data) {
    data = JSON.parse(data);
  }
  return data;
}

function toJson(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
function loadInfo(data) {
  if (data) {
    fullname.value = data.fullname;
    email.value = data.email;
    phone.value = data.phone;
    job.value = data.job;
  }
}
