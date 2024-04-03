const vetEmail = document.querySelector("#email");
const vetPassword = document.querySelector("#password");
const btnSubmit = document.querySelector("#submitLogin");
const home = document.querySelector("#home");
const btnLogin = document.querySelector("#submitLogin");
const createVetAccount = document.querySelector("#submitCreateAccount");
const URL = "http://localhost:3000/veterinary";

home.addEventListener("click", () => {
  window.location.href = "index.html";
});

createVetAccount.addEventListener("click", () => {
  window.location.href = "vetUserRegister.html";
});

btnLogin.addEventListener("click", (event) => {
  event.preventDefault();

  vetUserLogin();
});

async function vetUserLogin() {
  const response = await fetch(`${URL}?emailVet=${vetEmail.value}`);
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
  if (data[0].passwordVet == vetPassword.value) {
    localStorage.setItem("isAuthenticated", true);
    window.location.href = "veterinaryProfile.html";
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
