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
  saveLocalStorage(CONTACT_INFO, data);
  console.log(data.fullname);
});

function saveLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
