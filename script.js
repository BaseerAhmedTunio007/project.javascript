form = document.querySelector("form");

username = document.querySelector("#uname");
email = document.querySelector("#email");
pass = document.querySelector("#pass");

unordered = document.querySelector("#error");

const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

form.addEventListener("submit", (e) => {
  error_list = [];
  if (username.value == "") {
    error_list.push("username is empty");
  }

  if (re.test(email.value) == false) {
    error_list.push("eamil is not valid");
  }

  if (pass.value.length < 6) {
    error_list.push("password is weak! choose an other password");
  }

  if (error_list.length > 0) {
    e.preventDefault();
    error_list.forEach((element) => {
      console.log(element);
      list_item = document.createElement("li");
      list_item.innerText = element;
      unordered.appendChild(list_item);
    });
  }
});
