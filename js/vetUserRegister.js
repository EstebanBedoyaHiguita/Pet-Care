//Selectores
const urlBase = "http://localhost:3000/veterinarians";
const emailVet = document.querySelector("#email");
const birthDate = document.querySelector("#birthdate");
const passwordVet = document.querySelector("#password");
const nameVet = document.querySelector("#name");
const documentNumberVet = document.querySelector("#idCard");
const cellphoneVet = document.querySelector("#telphone");
const formVet = document.querySelector("#form");
const btnRedirect = document.querySelector("#submitLogin");
const professionalCard = document.querySelector("#professionalCard");
const areaOfSpecialization = document.querySelector("#areaOfSpecialization");

//Eventos

formVet.addEventListener("submit", (event) => {
  event.preventDefault();
  addVet();
});

btnRedirect.addEventListener("click", (event) => {
  event.preventDefault();
  formVet.classList.remove("was-validated");
  window.location = "vetUserLogin.html";
});

async function addVet() {
  try {
    await fetch(urlBase, {
      mode: "no-cors",
      method: "POST",
      headers: {
        contentType: "application/json",
      },
      body: JSON.stringify({
        emailVet: emailVet.value,
        passwordVet: passwordVet.value,
        birthDate: birthDate.value,
        nameVet: nameVet.value,
        documentNumberVet: documentNumberVet.value,
        cellphoneVet: cellphoneVet.value,
        professionalCard: professionalCard.value,
        areaOfSpecialization: areaOfSpecialization.value,
      }),
    });
  } catch {
    console.log("no entraron los datos");
  }
}
