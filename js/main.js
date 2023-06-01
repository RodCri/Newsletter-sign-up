const registerBtn = document.querySelector('.register__cta');
const stayForm = document.querySelector('.stay');
const email = document.querySelector('#email');
const message = document.querySelector('.message');
const messageBtn = document.querySelector('.message__cta');
const messageEmail = document.querySelector('.success__correo');
const errorRegister = document.querySelector('.register__error');

registerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (validate(email.value)) {
    stayForm.style.display = "none";
    message.style.display = "flex";
    messageEmail.textContent = email.value;
  } else {
    errorRegister.style.display = "block";
    email.style.borderColor = "#ff6257";
  }

});

messageBtn.addEventListener("click", () => {
  stayForm.style.display = "flex";
  message.style.display = "none";
  email.value = ""
  errorRegister.style.display = "none";
  email.style.borderColor = "#9294a0";
})

const validate = (email) => {
  let validator = false;
  if (email != "") {
    if (isValidEmail(email)) {
      validator = true;
    } else {
      errorRegister.innerText = "This email is not valid";
      return validator;
    }
  }
  else {
    errorRegister.innerText = "Email is required ";
    return validator;
  }
  return validator;
}

const isValidEmail = (email) => {
  return /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email);
}