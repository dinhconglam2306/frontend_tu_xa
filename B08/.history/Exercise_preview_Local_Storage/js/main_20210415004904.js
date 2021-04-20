let btnDeleteStorage = document.getElementById("btn-delete-storage");
let btnSendContact = document.getElementById("btn-send-contact");
let fullname = document.getElementById("fullname");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let job = document.getElementById("job");
const CONTACT_INFO = "CONTACT_INFO";

btnSendContact.addEventListener("click", () => {
  let data = {
    fullname: fullname.value,
    email: email.value,
    phone: phone.value,
    job: job.value,
  };
  localStorage.setItem(CONTACT_INFO, JSON.stringify(data));
});

var str = JSON.parse(localStorage.getItem(CONTACT_INFO));
console.log(str.fullname);
btnDeleteStorage.addEventListener("click", () => {
  let data = {
    fullname: "",
    email: "",
    phone: "",
    job: job.value,
  };
  localStorage.setItem(CONTACT_INFO, JSON.stringify(data));
});
