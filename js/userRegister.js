//Selectores
const urlBase = "http://localhost:3000/users";
const emailUser = document.querySelector("#email");
const passwordUser = document.querySelector("#password");
const birthDate = document.querySelector("#birthdate");
const nameUser = document.querySelector("#name");
const documentNumberUser = document.querySelector("#idCard");
const cellphoneUser = document.querySelector("#telphone");
const directionUser = document.querySelector("#housingAddress");
const formUserResgister = document.querySelector("#form");
const btnRedirect = document.querySelector("#submitLogin");
const home = document.querySelector("#home");
const btnSubmitCreateAccount = document.querySelector("#submitCreateAccount");

//Eventos

home.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "index.html";
});

btnSubmitCreateAccount.addEventListener("click", (event) => {
  event.preventDefault();
  addUser();
  window.location.href = "userLogin.html";
});

btnRedirect.addEventListener("click", (event) => {
  event.preventDefault();
  formUserResgister.classList.remove("was-validated");
  window.location = "userLogin.html";
});

formUserResgister.addEventListener("submit", (event) => {
  event.preventDefault();
  createUser();
});
//Functions

async function addUser() {
  if (!validatePassword()) {
    showAlert("Contraseña no valida");
    return;
  }
  if (await validateEmail()) {
    showAlert("El email ya se encuentra registrado.");
    return;
  }
  console.log("Pasaste las validaciones");
  try {
    await fetch(urlBase, {
      mode: "no-cors",
      method: "POST",
      headers: {
        contentType: "application/json",
      },
      body: JSON.stringify({
        birthdate: birthDate.value,
        email: emailUser.value,
        passwordUser: passwordUser.value,
        nameUser: nameUser.value,
        documentNumberUser: documentNumberUser.value,
        cellphoneUser: cellphoneUser.value,
        directionUser: directionUser.value,
      }),
    });
  } catch {
    console.log("no entraron los datos");
  }
}

function validatePassword() {
  const regexp_password =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
  return regexp_password.test(passwordUser.value);
}

function showAlert() {
  Swal.fire({
    title: "Error!",
    text: "",
    icon: "error",
    confirmButtonText: "Cerrar",
    showConfirmButton: false,
    timer: 4000,
    toast: "true",
    position: "top",
  });
}

async function validateEmail() {
  try {
    //
    const response = await fetch(`${urlBase}?email=${emailUser.value}`);
    const data = await response.json();
    return data.length;
  } catch (error) {
    return true;
  }
}
