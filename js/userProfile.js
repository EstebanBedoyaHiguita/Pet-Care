//Selectorspets
const containerPet = document.querySelector(".containerPet");
const seeMyPets = document.getElementById("seeMyPets");
const formAddPet = document.getElementById("formAddPet");
const dataUser = document.querySelector(".dataUser");
const addVeterinaryConsultation = document.getElementById(
  "addVeterinaryConsultation"
);
const seeVetConsultation = document.querySelector("#seeVetConsultation");
const selectPet = document.querySelector(".selectPet");
let canceldVeterinaryConsultationBtn;
const URLveterinaryConsultation =
  "http://localhost:3000/veterinaryConsultations";
const URLPets = "http://localhost:3000/pets";
const closeSesion = document.getElementById("closeSesion");
const URLUser = "http://localhost:3000/users";
const URLUserPet = "http://localhost:3000/veterinaryConsultations?_embed=pet";
const URLUserVet = "http://localhost:3000/veterinarians";
const editInfoUser = document.getElementById("editInfoUser");
const shop = document.querySelector("#shop");
const bodyModalEditInfoUser = document.getElementById("bodyModalEditInfoUser");
const imageDeafault =
  "https://images.vexels.com/media/users/3/288005/isolated/preview/9f3761fa8ec2e9bd44893bfb8c88d170-huella-de-perro-color-de-la-nea-continua.png";
const pictureUserProfile = document.querySelector("#pictureUserProfile");
let id = localStorage.getItem("userid");

//Events
shop.addEventListener("click",()=>{
  window.location.href="tienda.html"
})

document.addEventListener("DOMContentLoaded", () => {
  fetchUser();
  paintInformationClient();
});

editInfoUser.addEventListener("click", (event) => {
  event.preventDefault();
  editInformationProfile();

  formEditUser.addEventListener("submit", (event) => {
    event.preventDefault();

    editInfo();
  });
});

seeMyPets.addEventListener("click", () => {
  displayMyPetsCard();
});

seeVetConsultation.addEventListener("click", () => {
  showVetConsultation();
});

formAddPet.addEventListener("click", () => {
  showForm();
});

addVeterinaryConsultation.addEventListener("click", () => {
  showPetForAddConsultation();
});

//Functions

async function fetchUser() {
  const response = await fetch(`${URLUser}/${id}`);
  const user = await response.json();

  pictureUserProfile.innerHTML += `
  <img src="${
    user.urlPhoto || imageDeafault
  }" class="rounded photoUser" alt="Cliente 1" />
`;
}

function showForm() {
  containerPet.innerHTML = `

                <form id="idfrmaddpet">
                    <h2 class="titleFormRegisterPet">Registrar mascota</h2>
                    <div class="mb-3">
                        <label for="formFile" class="form-label">Agrega una foto de tu mascota</label>
                        <input class="form-control" type="file" accept=".jpg, .png"  type="file" id="formFile">
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" id="typePetInput" placeholder="Tipo de mascota">
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" id="namePetInput" placeholder="Nombre mascota">
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" id="genderInput" placeholder=" Macho / Hembra">
                    </div>
                    <div class="mb-3">
                        <input type="number" class="form-control" id="ageInput" placeholder="Edad aproximada mascota en meses">
                    </div>
                    <div class="mb-3">
                        <input type="number" class="form-control" id="weightPetInput" placeholder="Peso aproximado">
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" id="foodInput" placeholder="¿Que concentrado consume?">
                    </div>
                    <button type="submit" class="btn btn-outline-success addPet">Agregar mascota</button>
                </form>

            `;

  const frmaddpet = document.querySelector("#idfrmaddpet");
  const formFile = document.getElementById("formFile");
  const nombrePet = document.querySelector("#namePetInput");
  const type = document.querySelector("#typePetInput");
  const ageInput = document.querySelector("#ageInput");
  const weightPetInput = document.querySelector("#weightPetInput");
  const foodInput = document.querySelector("#foodInput");
  const gender = document.querySelector("#genderInput");

  frmaddpet.addEventListener("submit", (event) => {
    event.preventDefault();

    addPet();
  });

  async function addPet() {
    let data = "";

    if (formFile.files[0]) {
      const file = formFile.files[0];

      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "eo8kkawj");

      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dlghqei9h/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      data = await response.json();
    }

    const newPet = {
      formFile: data.url,
      name: nombrePet.value,
      type: type.value,
      gender: gender.value,
      ageInput: ageInput.value,
      foodInput: foodInput.value,
      weightPetInput: weightPetInput.value,
      userId: id,
    };

    await fetch(URLPets, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPet),
    });
  }
}

async function displayMyPetsCard() {
  containerPet.innerHTML = "";
  const response = await fetch(`${URLPets}?userId=${id}`);

  const data = await response.json();

  data.forEach((pet) => {
    containerPet.innerHTML += `

              <div class="seeMyPetsContainer">

                  <div class="cardPet">
                      <div class="card cardAddPet">
                          <img src="${pet.formFile || imageDeafault}"
                          alt="Photo Pet">
                          <div class="card-body">
                              <h3 class="card-title" id="namePet">${
                                pet.name
                              }</h3>
                              <span class="card-text">
                                  <ul class="list-group list-group-flush">
                                  <li class="list-group-item" id="typePet"><strong>Tipo de mascota: </strong><span>${
                                    pet.type
                                  }</span></li>
                                  <li class="list-group-item" id="gender"><strong>Genero: </strong><span>${
                                    pet.gender
                                  }</span></li>
                                  <li class="list-group-item" id="age"><strong>Edad aprox: </strong><span>${
                                    pet.ageInput
                                  }</span></li>
                                  <li class="list-group-item" id="weightPet"><strong>Peso aproximado: </strong><span>${
                                    pet.weightPetInput
                                  }</span></li>
                                  <li class="list-group-item" id="food"><strong>Concentrado: </strong><span>${
                                    pet.foodInput
                                  }</span></li>
                                  </ul>
                              </span>
                          </div>
                      </div>
                  </div>
              </div>

          `;
  });
}

async function showPetForAddConsultation() {
  containerPet.innerHTML = "";
  const response = await fetch(`${URLPets}?userId=${id}`);

  const data = await response.json();

  data.forEach((pet) => {
    containerPet.innerHTML += `

              <div class="selectPet">

                  <div class="card">
                  <img src=${
                    pet.formFile || imageDeafault
                  } class="card-img-top" alt="Photo Pet">
                  <div class="card-body">
                      <h5 class="card-title" id="namePet"  ">${pet.name}</h5>
                      <button
                      pet-id = "${pet.id}"
                      type="button"
                      id="selectPetForConsultation"
                      class="btn btn-outline-success select"
                      >
                      Seleccionar
                      </button>
                  </div>

              </div>
          `;
  });

  const selectPetForConsultation = document.querySelectorAll(
    "#selectPetForConsultation"
  );

  selectPetForConsultation.forEach((selectpets) => {
    selectpets.addEventListener("click", (event) => {
      showPetForAddConsultationAdd(event.target.getAttribute("pet-id"));
    });
  });
}

async function showPetForAddConsultationAdd(id) {
  const responseVet = await fetch(URLUserVet);
  const response = await fetch(`${URLPets}/${id}`);

  const dataPet = await response.json();
  const dataVet = await responseVet.json();

  console.log(dataVet);

  containerPet.innerHTML = "";

  containerPet.innerHTML = `

              <form class="formAddVeterinaryConsultation" id="addConsultation">
                  <h3 class="namePet">${dataPet.name}</h3>
                  <h5 class="IdPet">ID Mascota: ${dataPet.id}</h5>
                  <h6 class="petSpecies">Especie: ${dataPet.type} </h6>
                  <h6 class="gender">Genero: ${dataPet.gender} </h6>
                  <div>
                  <select class="form-select" aria-label="Default select example" id="selectNameVeterinarians">
                    <option class = "optionIdVet" selected value = "" hidden>Selecciona el Veterinario</option>
                  </select>
                  <br>
                  <label for="date" class="form-label">Fecha de la consulta:</label>
                  <input type="date" class="form-control" id="date">
                  </div>
                  <div>
                  <label for="hour" class="form-label">Hora de consulta: </label>
                  <input type="time" class="form-control" id="hour">
                  </div>
                  <div>
                  <label for="addressCites" class="form-label">Dirección de consulta: </label>
                  <input type="text" class="form-control" id="addressCites">
                  </div>
                  <div>
                  <label for="petSymptoms" class="form-label">Sintomas: </label>
                  <textarea class="form-control" id="petSymptoms" rows="3"></textarea>
                  </div>
                  <br>
                  <button class="btn btn-outline-success" id="addConsultation2">Solicitar consulta</button>
              </form>
          `;

  dataVet.forEach((vet) => {
    const selectNameVeterinarians = document.getElementById(
      "selectNameVeterinarians"
    );
    const option = document.createElement("option");
    option.value = vet.id;
    option.textContent = vet.nameVet;
    selectNameVeterinarians.appendChild(option);
  });

  const petSymptoms = document.getElementById("petSymptoms");
  const addressCites = document.getElementById("addressCites");
  const hour = document.querySelector("#hour");
  const date = document.querySelector("#date");
  const addConsultation = document.querySelector("#addConsultation2");

  addConsultation.addEventListener("click", async (event) => {
    event.preventDefault();

    const selectedVetId = document.getElementById(
      "selectNameVeterinarians"
    ).value;
    const petId = dataPet.id;
    console.log(selectedVetId);
    const dateToday = new Date();

    const infpet = {
      vetId: selectedVetId,
      userId: dataPet.userId,
      namePet: dataPet.name,
      genderPet: dataPet.gender,
      typePet: dataPet.type,
      petSymptoms: petSymptoms.value,
      creationDate: dateToday.toLocaleDateString(),
      date: date.value,
      hour: hour.value,
      status: "Programada",
      addressCites: addressCites.value,
      petId: petId.value,
      photoPet: dataPet.formFile,
    };

    await fetch(URLveterinaryConsultation, {
      method: "POST",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify(infpet),
    });
  });
}

async function showVetConsultation() {
  containerPet.innerHTML = `

            <div class="tableVeterinaryConsultation">

                <table class="table tableVeterinaryConsultation">
                  <thead>
                    <tr>
                      <th scope="col">Mascota</th>
                      <th scope="col">Fecha</th>
                      <th scope="col">Hora</th>
                      <th scope="col">Dirección</th>
                      <th scope="col">Medico</th>
                      <th scope="col">Estado</th>
                      <th scope="col">Acciones</th>
                    </tr>
                  </thead>
                  <tbody class="table-group-divider"> </tbody>
                </table>
            </div>
        `;

  const responseConsltation = await fetch(
    `${URLveterinaryConsultation}?userId=${id}`
  );
  const data = await responseConsltation.json();
  const table = containerPet.querySelector(".table-group-divider");

  data.forEach(async (element) => {
    const responseVeterinary = await fetch(`${URLUserVet}?id=${element.vetId}`);
    const dataVet = await responseVeterinary.json();

    dataVet.forEach((elementVet) => {
      table.innerHTML += `
                            <tr>
                            <td>${element.namePet}</td>
                            <td>${element.date}</td>
                            <td>${element.hour}</td>
                            <td>${element.addressCites}</td>
                            <td>${elementVet.nameVet}</td>
                            <td>${element.status}</td>
                            <td><button class="canceldVeterinaryConsultation" data-cita ="${element.id}">Cancelar</button></td>
                            </tr>
                            `;

      canceldVeterinaryConsultationBtn = document.querySelectorAll(
        ".canceldVeterinaryConsultation"
      );

      canceldVeterinaryConsultationBtn.forEach((elementBtnCancel) => {
        elementBtnCancel.addEventListener("click", (event) => {
          event.preventDefault();
          const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: "btn btn-success",
              cancelButton: "btn btn-danger",
            },
            buttonsStyling: false,
          });

          swalWithBootstrapButtons
            .fire({
              title: "¿Deseas cancelar la consulta?",
              icon: "warning",
              showCancelButton: true,
              confirmButtonText: "Si, cancelar consulta",
              cancelButtonText: "No, no cancelar!",
              reverseButtons: true,
            })
            .then(async (result) => {
              if (result.isConfirmed) {
                console.log("entre");

                swalWithBootstrapButtons.fire({
                  title: "Cancelada!",
                  text: "Su consulta ha sido cancelada.",
                  icon: "success",
                });

                element.status = "Cancelada";

                const resp = await fetch(
                  `${URLveterinaryConsultation}/${elementBtnCancel.getAttribute(
                    "data-cita"
                  )}`
                );
                const pet = await resp.json();
                console.log("id ", elementBtnCancel.getAttribute("data-cita"));
                console.log("element ", pet);

                await fetch(
                  `${URLveterinaryConsultation}/${elementBtnCancel.getAttribute(
                    "data-cita"
                  )}`,
                  {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ ...pet, status: "Cancelada" }), //kevin
                  }
                );
              } else if (result.dismiss === Swal.DismissReason.cancel) {
                console.log("No se cancelo");
                swalWithBootstrapButtons.fire({
                  text: "Su consulta sigue agendada",
                  icon: "info",
                });
              }
            });
        });
      });
    });
  });
}

async function paintInformationClient() {
  const response = await fetch(`${URLUser}/${id}`);
  const data = await response.json();

  dataUser.innerHTML = `

            <h2 class="nameUser">${data.nameUser}</h2>
            <br>
            <div class="line"></div>
            <br>
            <p><strong>Telefono: </strong><span>${data.cellphoneUser}</span></p>
            <p><strong>Direccion: </strong><span>${data.directionUser}</span></p>
            <p id = "id-user" data-id = ${data.id}></p>
    `;

  const nameUserNavbar = document.getElementById("nameUserNavbar");
  nameUserNavbar.textContent = `Bienvenido, ${data.nameUser}`;
}

async function editInformationProfile() {
  const responseUser = await fetch(`${URLUser}/${id}`);
  const dataUser = await responseUser.json();

  const formFileUser = document.getElementById("formFileUser");
  const telphoneEditUser = document.getElementById("telphoneEditUser");
  const addressEditUser = document.getElementById("addressEditUser");
  const editInfoUser = document.getElementById("#editInfoUser");
  const formEditUser = document.getElementById("formEditUser");

  bodyModalEditInfoUser.innerHTML = `
  
                  <label for="formFileUser" class="form-label">Agrega tu foto de perfil</label>
                  <input class="form-control" type="file" type="file" id="formFileUser">

                  <label for="telphoneEditUser" class="form-label">Edita tu numero celular</label>
                  <input type="number" value= "${dataUser.cellphoneUser}" id="telphoneEditUser"/>

                  <label for="addressEditUser" class="form-label">Edita la direccion de residencia</label>
                  <input type="text" value= "${dataUser.directionUser}" id="addressEditUser" placeholder="Ingrese su di"/>
                `;
}

async function editInfo() {
  let data = "";

  if (formFileUser.files[0]) {
    const file = formFileUser.files[0];

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "eo8kkawj");

    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dlghqei9h/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    data = await response.json();
  }

  const responseUser = await fetch(`${URLUser}/${id}`);
  const dataUser = await responseUser.json();
  dataUser.urlPhoto = data.url;
  dataUser.cellphoneUser = telphoneEditUser.value;
  dataUser.directionUser = addressEditUser.value;

  await fetch(`${URLUser}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dataUser),
  });
}

////////////////////////////////////////////////////////////////////

const idUser = localStorage.getItem("isAuthenticatedUser");
function borrar_menu() {
  if (idUser == "true") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex-column";
  }
}

const btnlogOutUser = document.querySelector("#btnLogOutUser");

if (idUser == "true") {
  btnlogOutUser.addEventListener("click", () => {
    localStorage.removeItem("isAuthenticatedUser");
    window.location.href = "index.html";
    btnlogOutUser.style.display = "flex-column";
  });
} else {
  btnlogOutUser.style.display = "none";
}
