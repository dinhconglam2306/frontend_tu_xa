let btnDeleteStorage = document.getElementById("btn-delete-storage");
let btnSendContact = document.getElementById("btn-send-contact");
let fullname = document.getElementById("fullname");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let job = document.getElementById("job");
const CONTACT_INFO = "CONTACT_INFO";

// let contactInfo = loadStorage(CONTACT_INFO);
// console.log(contactInfo);
// loadInfo(contactInfo);

btnSendContact.addEventListener("click", function () {
  let data = {
    fullname: fullname.value,
    email: email.value,
    phone: phone.value,
    job: job.value,
  };

  console.log(data);
  saveStorage(CONTACT_INFO, data);
});

// btnDeleteStorage.addEventListener("click", function () {
//   localStorage.removeItem(CONTACT_INFO);
//   fullname.value = "";
//   email.value = "";
//   phone.value = "";
//   job.value = "student";
// });

// function loadStorage(key) {
//   let data = localStorage.getItem(key);

//   if (data) {
//     data = JSON.parse(data);
//   }

//   return data;
// }

function saveStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// function loadInfo(data) {
//   if (data) {
//     fullname.value = data.fullname;
//     email.value = data.email;
//     phone.value = data.phone;
//     job.value = data.job;
//   }
// }
