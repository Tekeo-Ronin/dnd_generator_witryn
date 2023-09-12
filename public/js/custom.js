function validateForm(e) {
  "use strict";
  e.preventDefault();

  const form = document.getElementById("create-page");
  if (!form.checkValidity()) {
    e.stopPropagation();
    form.classList.add("was-validated");
    return false;
  }
  return submitForm();
}

function submitForm() {
  console.log("form content");
  const nameField = document.getElementById("name");
  nameValue = nameField.value;
  console.log("name value: ", nameValue);
  clearForm();
  return true;
}

function clearForm() {
  const nameField = document.getElementById("name");
  const form = document.getElementById("create-page");

  nameField.value = "";
  form.classList.remove("was-validated");
}
