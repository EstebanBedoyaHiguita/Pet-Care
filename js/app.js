//Selectores

const urlBase = "http://localhost:3000/formulary-index";
const inputName = document.getElementById("inputName");
const inputEmail = document.getElementById("inputEmail");
const inputPhone = document.getElementById("inputPhone");
const inputTopic = document.getElementById("inputTopic");
const symptoms = document.getElementById("symptoms");
const submit = document.querySelector("#submit_form");
const menu = document.querySelector("#menu_hamburguesa");
const idVet = localStorage.getItem("isAuthenticatedVet");
const idUser = localStorage.getItem("isAuthenticatedUser");
const btnlogOutUser = document.querySelector("#btnLogOutUser");
const btnlogOutVet = document.querySelector("#btnLogOutVet");
const profileUser = document.querySelector("#profileUser");
const profileVet = document.querySelector("#profileVet");
const shop = document.querySelector("#shop");
const urlBaseVet = "http://localhost:3000/veterinarians";
const containerVet = document.querySelector(".containerVet");
let formulary;

//Eventos

shop.addEventListener("click",()=>{
  window.location.href="tienda.html"
})

document.addEventListener("DOMContentLoaded", () => {
  borrar_menu1();
  borrar_menu2();
  printCardVet();
});

submit.addEventListener("click", (event) => {
  formulary = {
    inputName: inputName.value,
    inputEmail: inputEmail.value,
    inputPhone: inputPhone.value,
    inputTopic: inputTopic.value,
    symptoms: symptoms.value,
  };
  event.preventDefault();
  addInfoFormulary();
});

//Funciones

async function printCardVet() {
  const response = await fetch(urlBaseVet);
  const user = await response.json();

  user.forEach((dataVet) => {
    containerVet.innerHTML += `

    <div class="cardVet">
      <img
        src=${dataVet.urlPhoto || imageDeafault}
        alt="Doctora"
      />
        <div class="vetContainerText">
          <h4 class="cardTitle">${dataVet.nameVet}</h4>
          <p class="cardText">${dataVet.descriptionVetEdit}</p>
          <div class="btnModal">
            <a
              class="btn btn-info"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#profil${dataVet.id}"
              id= "seeMoreInfoVet"
            >
              Ver perfil
            </a>
          </div>
        </div>
    </div>

    

    <div
      class="modal fade"
      id="profil${dataVet.id}"
      tabindex="-1"
      aria-labelledby="profileVet"
      aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body modalProfileVetBody">
            <div class="vetImagen">
              <img
                src=${dataVet.urlPhoto || imageDeafault}
                alt="Doctor"
              />
            </div>
            <div class="textModalVet">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
              ${dataVet.nameVet}
              </h1>
              <p>${dataVet.descriptionVetEdit}</p>
              <hr/>
              <ul class="list-group list-group-flush">
                <span>
                <strong>Especialización: </strong>${
                  dataVet.areaOfSpecialization
                }
                </span>
                <span>
                <strong>Numero de tarjeta: </strong>${dataVet.professionalCard}
                </span>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  });
  const seeMoreInfoVet = document.getElementById("seeMoreInfoVet");
}

async function addInfoFormulary() {
  try {
    await fetch(urlBase, {
      mode: "no-cors",
      method: "POST",
      headers: {
        contentType: "application/json",
      },
      body: JSON.stringify(formulary),
    });
  } catch {
    console.log("no entraron los datos");
  }
}

function borrar_menu2() {
  if (idVet == "true") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex-column";
  }
}

function borrar_menu1() {
  if (idUser == "true") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex-column";
  }
}

if (idUser == "true") {
  btnlogOutUser.addEventListener("click", () => {
    localStorage.removeItem("isAuthenticatedUser");
    // localStorage.setItem("isAuthenticated",true)
    window.location.href = "index.html";
    btnlogOutUser.style.display = "flex-column";
  });
} else {
  btnlogOutUser.style.display = "none";
}

if (idVet == "true") {
  btnlogOutVet.addEventListener("click", () => {
    localStorage.removeItem("isAuthenticatedVet");
    // localStorage.setItem("isAuthenticated",true)
    window.location.href = "index.html";
    btnlogOutVet.style.display = "flex-column";
  });
} else {
  btnlogOutVet.style.display = "none";
}

if (idUser == "true") {
  profileUser.addEventListener("click", () => {
    window.location.href = "userProfile.html";
    profileUser.style.display = "flex-column";
  });
} else {
  profileUser.style.display = "none";
}

if (idVet == "true") {
  profileVet.addEventListener("click", () => {
    window.location.href = "veterinaryProfile.html";
    profileVet.style.display = "flex-column";
  });
} else {
  profileVet.style.display = "none";
}
