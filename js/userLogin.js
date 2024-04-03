//Selectores
const emailUser = document.querySelector("#email");
const passwordUser = document.querySelector("#password");
const btnSubmit = document.querySelector("#submitLogin");
const submitCreateAccount = document.querySelector("#submitCreateAccount");
const usuario = {
  emailUser,
  passwordUser,
};

const URL = "http://localhost:3000/users";

//Events

btnSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  userLogin();
});

submitCreateAccount.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "userRegister.html";
});

//Funciones

async function userLogin() {
  const response = await fetch(`${URL}?email=${email.value}`);
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

  if (data[0].passwordUser == passwordUser.value) {
    localStorage.clear();
    localStorage.setItem("isAuthenticatedUser", true);
    localStorage.setItem("userid", data[0].id);
    window.location.href = "userProfile.html";
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
