//Selectores
const dataVetContainer = document.querySelector(".dataVet");
const vetName = document.querySelector(".nameVet");
const vetSpeciality = document.querySelector(".vetSpeciality");
const professionalNumber = document.querySelector(".professionalNumber");
const emailVet = document.querySelector(".emailVet");
const urlBaseVet = "http://localhost:3000/veterinarians";
const urlBaseMasc = "http://localhost:3000/pets";
const urlBaseConsult = "http://localhost:3000/veterinaryConsultations";
const urlBaseUsers = "http://localhost:3000/users";
const shop = document.querySelector("#shop");
const petAppointmentsTable = document.querySelector(".petAppointmentsTable");
const editInfoUser = document.getElementById("editInfoUser");
const bodyModalEditInfoVet = document.getElementById("bodyModalEditInfoVet");
const imageDeafault =
  "https://images.pexels.com/photos/5733422/pexels-photo-5733422.jpeg?auto=compress&cs=tinysrgb&w=400";
const pictureUserProfile = document.querySelector(".pictureUserProfile");
let id = localStorage.getItem("userid");
const formEditUserVet = document.getElementById("formEditUserVet");

//Eventos
shop.addEventListener("click",()=>{
  window.location.href="tienda.html"
})

document.addEventListener("DOMContentLoaded", () => {
  pintarHTML();
  pintarTabla();
  fetchUser();
});

editInfoUser.addEventListener("click", (event) => {
  event.preventDefault();
  editInformationProfile();

  formEditUserVet.addEventListener("submit", (buttonSubmit) => {
    buttonSubmit.preventDefault();

    editInfo();
  });
});

//Funciones

async function fetchUser() {
  const response = await fetch(`${urlBaseVet}/${id}`);
  const user = await response.json();
  pictureUserProfile.innerHTML += `
    <img src="${
      user.urlPhoto || imageDeafault
    }" class="rounded photoUser"   alt="Cliente 1" />
`;
}

async function editInformationProfile() {
  const responseVet = await fetch(`${urlBaseVet}/${id}`);
  const dataVet = await responseVet.json();
  const formFileVet = document.getElementById("formFileVet");
  const emailVetEdit = document.getElementById("emailVetEdit");
  const editInfoUserVet = document.getElementById("editInfoUserVet");
  const descriptionVetEdit = document.getElementById("descriptionVetEdit");
  const formEditUserVet = document.getElementById("formEditUserVet");

  bodyModalEditInfoVet.innerHTML = `
  
                  <label for="formFileVet" class="form-label">Agrega tu foto de perfil</label>
                  <input class="form-control" type="file" type="file" id="formFileVet">

                  <label for="emailVetEdit" class="form-label">Edita tu correo electronico</label>
                  <input type="text" value= "${dataVet.emailVet}" id="emailVetEdit"/>

                  <label for="descriptionVetEdit" class="form-label">Edita la descripcion de tu perfil</label>
                  <input type="text" value= "${dataVet.descriptionVetEdit}" id="descriptionVetEdit"/>
                `;
}

async function editInfo() {
  console.log(id);
  let data = "";

  if (formFileVet.files[0]) {
    const file = formFileVet.files[0];
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
  const responseUserVet = await fetch(`${urlBaseVet}/${id}`);
  const dataUserVet = await responseUserVet.json();
  dataUserVet.urlPhoto = data.url;
  dataUserVet.emailVet = emailVetEdit.value;
  dataUserVet.descriptionVetEdit = descriptionVetEdit.value;
  await fetch(`${urlBaseVet}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dataUserVet),
  });
}

async function pintarHTML() {
  const response = await fetch(`${urlBaseVet}/${id}`);
  const data = await response.json();
  dataVetContainer.innerHTML = `
    <h2 class="nameVet">${data.nameVet}</h2>
    <h6 class="vetSpeciality">${data.areaOfSpecialization}</h6>
    <div class="line"></div>
    <br />

    <p>
      <strong
        >Correo:
        <p class="emailVet">${data.emailVet}</p>
      </strong>
    </p>
    <p>
      <strong
        >Numero tarjeta profesional:
        <p class="professionalNumber">${data.professionalCard}</p
      ></strong>
    </p>
    <p>
      ${data.descriptionVetEdit}
    </p>
  `;
  const nameVetNavbar = document.getElementById("nameVetNavbar");
  nameVetNavbar.textContent = `Bienvenido, ${data.nameVet}`;
}

async function pintarTabla() {
  const responseConsltation = await fetch(`${urlBaseConsult}?vetId=${id}`);
  const dataResponseConsltation = await responseConsltation.json();

  const responseUser = await fetch(urlBaseUsers);
  const dataUser = await responseUser.json();

  dataResponseConsltation.forEach((element) => {
    dataUser.forEach((elementUser) => {
      if (element.userId == elementUser.id) {
        petAppointmentsTable.innerHTML += `
            <table class="table">
              <thead class="text-center">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nombre de mascota</th>
                  <th scope="col">Fecha de consulta</th>
                  <th scope="col">Hora de consulta</th>
                  <th scope="col">Info consulta</th>
                </tr>
              </thead>
              <tbody class="table-group-divider">
                <tr>
                  <th scope="row">1</th>
                  <td>${element.namePet}</td>
                  <td>${element.date}</td>
                  <td>${element.hour}</td>
                  <td>
                    <button class="btn btn-primary" data-bs-target="#seeMoreInfo" data-bs-toggle="modal">
                      Ver mas
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
    
            <div class="modal fade" id="seeMoreInfo" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
              aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">${
                      element.namePet
                    }</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <img src="${
                      element.photoPet || imageDeafault
                    }" class="petPhoto" alt="" 
                    />
                    <div class="dataPet">
                    <p><strong>Nombre del propietario: </strong>${
                      elementUser.nameUser
                    }</p>
                    <p><strong>Telefono de la contacto: </strong>${
                      elementUser.cellphoneUser
                    }</p>
                    <p><strong>Fecha de la consulta: </strong>${
                      element.date
                    }</p>
                    <p><strong>Hora de consulta: </strong>${element.hour}</p>
                    <p><strong>Especie: </strong>${element.typePet}</p>
                    <p><strong>Genero: </strong>${element.genderPet}</p>
                    <p><strong>Sintomas: </strong>${element.petSymptoms}</p>
                    <p><h6>Estado de consulta: ${element.status}</h6></p>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          `;
      }
    });
  });
}

const btnlogOutVet = document.querySelector("#btnLogOutVet");
const idVet = localStorage.getItem("isAuthenticatedVet");

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
