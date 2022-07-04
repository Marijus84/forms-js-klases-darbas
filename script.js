document.querySelector("form").addEventListener("submit", validateForm);

function validateForm(e) {
  e.preventDefault();

  const username = document.querySelector("#username");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");
  const hometown = document.querySelector("#hometown");
  const errorElements = document.querySelectorAll(".error");

  validateInput(username, errorElements[0], "Please enter username");
  validateInput(email, errorElements[1], "Please enter email");
  validateInput(password, errorElements[2], "Please enter password");
  validateInput(hometown, errorElements[3], "Please enter hometown");

  //   if (username.value === "") {
  //     username.style.border = "2px solid red";
  //     errorElements[0].innerText = "Please, enter username";
  //   } else {
  //     username.style.border = "";
  //     errorElements[0].innerText = "";
  //   }

  function validateInput(input, errorElement, message) {
    if (input.value === "") {
      errorElement.innerText = message;
      input.style.border = "2px solid red";
    } else {
      errorElement.innerText = "";
      input.style.border = "";
    }
  }
}

/* Užduotis:
sukurti dar viena laukeli (input field), kuriame butu pakartotinai ivedamas slaptazodis; 
sukurti validacija, kad tikrintu ar slaptazodziai sutampa, o jei ne, tai 
po antru slaptazodziu padaryti pranesima: passwords don't match; ir paraudoninti abu pass
laukeliu remelius;  
 */
