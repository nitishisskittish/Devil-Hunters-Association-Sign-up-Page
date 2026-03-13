const phoneNumber = document.querySelector('input[name="phone"]');
const maskOptions = {
  mask: '(000)-000-0000'
};
const mask = IMask(phoneNumber, maskOptions);

phoneNumber.addEventListener("input", validatePhoneNumber);
function validatePhoneNumber() {
  if (phoneNumber.value == "" && phoneNumber.classList.contains("invalid") || phoneNumber.value.length == 14) phoneNumber.classList.remove("invalid");
  if (phoneNumber.value.length < 14) phoneNumber.classList.add("invalid");
  else phoneNumber.classList.remove("invalid");
}

const password = document.querySelector('input[name="password"]');
const confirm_password = document.querySelector('input[name="confirm_password"]');
password.addEventListener("blur", comparePasswords);
confirm_password.addEventListener("blur", comparePasswords);
function comparePasswords() {
  if ((password.value != "" && confirm_password.value != "") && (password.value != confirm_password.value)
    && document.activeElement != password && document.activeElement != confirm_password) {
    password.classList.add("invalid2"), confirm_password.classList.add("invalid2");
  }
  else {
    password.classList.remove("invalid2");
    confirm_password.classList.remove("invalid2");
  }
}

const my_form = document.getElementById("my_form");
const error = document.getElementById("error");
my_form.addEventListener("submit", validateForm);
function validateForm(submission) {
  submission.preventDefault();
  let isValid = true;
  error.textContent = "";

  for (const input of my_form.elements) {
    if (input.type == "submit") continue;
    if (input.value == "") {
      error.textContent = "Please fill out all the fields";
      isValid = false;
      return;
    }
  }

  for (const input of my_form.elements) {
    if (input.type == "submit") continue;
    if (input.labels != null && (input.matches(":invalid") || input.classList.contains("invalid") || input.classList.contains("invalid2"))) {
      isValid = false;
      switch (input.labels[0].textContent) {
        case "EMAIL":
          error.textContent = "Invalid Email";
          break;
        case "PHONE NUMBER":
          error.textContent = "Invalid Phone Number";
          break;
        case "PASSWORD":
          error.textContent = "Passwords do not match";
          break;
      }
      break;
    }
  }
  if (isValid) my_form.submit();
}