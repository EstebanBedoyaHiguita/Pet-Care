(() => {
  //Logica
  //Obtenemos la sesión del usuario del localStorage
  const isAuthenticatedUser = localStorage.getItem("isAuthenticatedUser");
  const isAuthenticatedVet = localStorage.getItem("isAuthenticatedVet");

  //Obteno la ruta donde el usuario quiere acceder
  const path = window.location.pathname;

  //Corto el path para acceder solamente al archivo que esta intentando acceder el usuario
  const routeActu = path.substring(path.lastIndexOf("/") + 1);

  //Creo una lista con todos los nombre de los archivos que yo quiero proteger
  const privateRoutesGuest = ["veterinaryProfile.html", "userProfile.html"];
  const privateRoutesUsers = [
    "userLogin.html",
    "userRegister.html",
    "vetLogin.html",
    "vetRegister.html",
    "veterinaryProfile.html",
  ];
  const privateRoutesVet = [
    "userLogin.html",
    "userRegister.html",
    "vetLogin.html",
    "vetRegister.html",
    "userProfile.html",
  ];

  //Si la ruta acutal se encuentra dentro de las privadas Y el usuario no está autenticado entonces lo redirigimos al login
  if (
    privateRoutesGuest.includes(routeActu) &&
    !(isAuthenticatedUser || isAuthenticatedVet)
  ) {
    console.log("NO TIENES PERMISOS");
    window.location.href = "index.html";
  }

  if (privateRoutesUsers.includes(routeActu) && isAuthenticatedUser) {
    console.log("No tienes acceso a estas paginas");
    window.location.href = "index.html";
  }

  if (privateRoutesVet.includes(routeActu) && isAuthenticatedVet) {
    console.log("No tienes acceso a estas paginas");
    window.location.href = "index.html";
  }
})();
