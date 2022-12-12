let reg = new RegExp(
  "^([a-z0-9_-]+.)*[a-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+)*.[a-z]{2,6}$"
);
let form = document.querySelector(".form");
var fields = form.querySelectorAll(".field");

let firstname = form.querySelector(".first_name");
let lasttname = form.querySelector(".last_name");
let email = form.querySelector(".email");
let password = form.querySelector(".password");
var np = [];

function validateemail(val) {
  return reg.test(String(val).toLowerCase());
}

form.onsubmit = function () {
  np.forEach(function (n) {
    n.remove();
  });
  
  fields.forEach(function (field) {
    if (field.value === "") {
      field.classList.add("error");
      field.insertAdjacentHTML(
        "afterend",
        '<p class="new">cannot be empty</p>'
      );
    } else {
      field.classList.remove("error");      
    }
    np = form.querySelectorAll(".new");
  });

  if (!validateemail(email.value)) {
    email.classList.add("error");
    email.value = "";
    email.placeholder = "email@example.com";
    email.classList.add("placeHolder");
  } else {
    email.classList.remove("error");
  }
  return false;
};
