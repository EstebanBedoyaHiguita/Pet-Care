//Selectores
const emailVetUser = document.querySelector("#email");
const passwordVetUser = document.querySelector("#password");
const btnSubmit = document.querySelector("#submitLogin");
const submitCreateAccount = document.querySelector("#submitCreateAccount");
const home = document.querySelector("#home");
const usuario = {
  emailVetUser,
  passwordVetUser,
};

const URL = "http://localhost:3000/veterinarians";

//Events

home.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "index.html";
});

btnSubmit.addEventListener("click", (event) => {
  event.preventDefault();

  userVetLogin();
});

submitCreateAccount.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "vetUserRegister.html";
});

//Funciones

async function userVetLogin() {
  const response = await fetch(`${URL}?emailVet=${emailVetUser.value}`);
  const data = await response.json();

  if (!data.length) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Email no registrado",
      showConfirmButton: false,
      timer: 5000,
      toast: "true",
    });
    console.log("Email no registrado");
    return;
  }

  if (data[0].passwordVet == passwordVetUser.value) {
    localStorage.clear();
    localStorage.setItem("isAuthenticatedVet", true);
    localStorage.setItem("userid", data[0].id);
    window.location.href = "index.html";
    document.querySelector("#menu_hamburguesa").hidden = false;
  } else {
    Swal.fire({
      icon: "error",
      text: "contraseña incorrecta",
      showConfirmButton: false,
      timer: 5000,
      toast: "true",
    });
  }
}
