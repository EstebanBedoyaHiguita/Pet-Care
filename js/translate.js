//Selectores
const btnEs = document.getElementById("btnEs");
const btnEn = document.getElementById("btnEn");

btnEs.addEventListener("click", () => {
  changeLanguage("es");
});

btnEn.addEventListener("click", () => {
  changeLanguage("en");
});

document.addEventListener("DOMContentLoaded", function () {
  i18next.init(
    {
      lng: "en",
      debug: true,
      resources: {
        //English
        en: {
          translation: {
            menu: "Menu",
            inicio: "Home page",
            tienda: "Store",
            inicioSesion: "LogIn",
            cliente: "Client",
            veterinario: "Veterinary",
            irAlPerfil: "Go to profile",
            cerrarSesion: "Log out",
            nuestrosServicios: "Our Services",
            nuestrosVeterinarios: "Our Veterinaries",
            consultasVeterinarias: "Veterinary Consultation",
            text1ConsultasVeterinarias:
              "Because your furry friend's health deserves the closest attention! close attention! Our in-home veterinarians are ready to provide personalized consultations and solve all your pet's health concerns about your pet's health.",
            text2ConsultasVeterinarias:
              "Your furry friend deserves the best, and we're here to provide it! here to provide it!",
            servicio2: "Vaccination and deworming of your pet",
            text1servicio2:
              "Protect your four-legged companion with our home vaccination and deworming service. Keeping your pet healthy is our priority, and we do it in the most convenient way for you.",
            text2servicio2:
              "Your love for them, combined with our expert care, is the perfect recipe for a happy and healthy life!",
            servicio3: "Vaccination and deworming of your pet",
            text1servicio3:
              "At PetCare, we understand that some tests are necessary to ensure your pet's to ensure your pet's optimal health. Our our sampling service is done in the comfort of your home, minimizing your home, minimizing stress for your furry friend.",
            text2servicio3:
              "We take care of every detail to make you and your pet feel safe and secure. feel safe and secure!",
            servicio4: "Radiography and Ultrasound",
            text1servicio4:
              "State-of-the-art technology is now at your doorstep. With our home x-ray and ultrasound services, get accurate diagnoses without having to leave your home. Your peace of mind and your pet's health are our priority.",
            text2servicio4:
              "Trust us to provide advanced veterinary care with the comfort you deserve! care with the comfort you deserve!",
            servicio5: "Travel Certificates",
            text1servicio5:
              "Planning an adventure with your furry friend? At PetCare, we make the process smooth and hassle-free. Our travel certificates ensure that your pet is ready to embark is ready to embark on any journey with you.",
            text2servicio5:
              "Travel with confidence, knowing that we are taking care of your companion's health and your companion's health and well-being throughout the journey!",
            servicio6: "Euthanasia Service",
            text1servicio6:
              "In difficult times, PetCare is here to provide compassionate support. Our home euthanasia service is performed with the utmost empathy and respect, allowing you to say goodbye to your to say goodbye to your beloved friend in familiar surroundings.",
            text2servicio6:
              "Your pet deserves to say goodbye with dignity and love, and we'll make sure we'll make sure they do.",
            tituloTextoInformativo: "Save Time and Money",
            textoInformativo:
              "Are you worried about the cost of transportation or don't have time to take your pet to the vet? time to take your pet to the vet? Discover the advantages of our home visits. Save money on transportation and valuable valuable time, allowing our expert veterinarians to care for your pet veterinarians to care for your pet in the familiar surroundings of your home. Simplify veterinary care and maximize convenience.",
            tituloTextoInformativo2:
              "Take Care of Your Pets without Leaving Home",
            textoInformativo2:
              "Discover the convenience of veterinary care at home. We invite all pet owners to enjoy consultations from the comfort of their home. comfort of your home. With just a few clicks, you will have access to veterinary professionals, eliminating the need to travel. Make your pets' well-being as easy as being at home! as easy as being at home!",
            tituloTextoInformativo3: "Be the Veterinarian of the Future",
            textoInformativo3:
              "Are you worried about the cost of transportation or don't have time to take your pet to the vet? time to take your pet to the vet? Discover the advantages of our home visits. Save money on transportation and valuable valuable time by allowing our veterinarians to care for your pet in the familiar your pet in the familiar surroundings of your home. Simplify veterinary veterinary care and maximize convenience.",
            contactanos: "Contact us at",
            contactanosNombre: "Full name",
            contactanosEmail: "Email",
            contactanosTelefono: "Cell Phone",
            contactanosAsunto: "subject",
            contactanosMensaje: "Message",
            contactanosBtnEnviar: "Send",
            tituloInicioSesion: "Log in",
            tituloInicioSesion: "Log in client PetCare",
            saludoDeBienvenida: "Welcome back!",
            logInEmail: "Enter your email address",
            logInContraseña: "Enter your password",
            logInBoton: "Log In",
            logInCrearCuentaBtn: "Create a new account",
            logInHomeBtn: "Home",
            tituloPerfilCliente: "Client profile",
            bienvenidaUsuario: "Welcome, ",
            editarPerfil: "Edit info",
            editarPerfilCerrar: "Close",
            editarPerfilGuardar: "Save changes",
            misMascotas: "My pets",
            verMisMascotas: "See my pets",
            agregarMascota: "Add pets",
            agendarCita: "Agendar Consulta",
            citasAgendadas: "Scheduled Consultations",
            tituloResgistroPestaña: "User Registration",
            tituloResgistro: "Sign up!",
            registroFecha: "Enter your birth date",
            registroNombre: "Please enter your full name",
            registroCedula: "Please enter your ID number",
            registroEmail: "Enter your e-mail address",
            registroCelular: "Enter your cell phone number",
            registroDireccion: "Enter your home address",
            registroYaTienesCuentaBtn:
              "Already have an account? Log in to your account",
            tituloPerfilVeterinario: "Veterinary Profile",
            tituloPerfilVeterinarioBienvenida: "Welcome back, Doc ",
            tituloLogInVet: "Login Veterinarian",
            tituloLogInVetBienvenida: "Welcome back, Doc!",
            tituloPerfilVeterinarioRegistro: "Veterinary Registration",
            tituloResgistroVet: "Register Doc!",
            registroEspecializacion: "Enter your specialization",
            registroTarjetaProf: "Enter your professional card number",
          },
        },

        //Español
        es: {
          translation: {
            menu: "Menú",
            inicio: "Inicio",
            tienda: "Tienda",
            inicioSesion: "Iniciar sesión",
            cliente: "Cliente",
            veterinario: "Veterinario",
            irAlPerfil: "Ir al perfil",
            cerrarSesion: "Cerrar sesión",
            nuestrosServicios: "Nuestros Servicios",
            nuestrosVeterinarios: "Nuestros Veterinarios",
            consultasVeterinarias: "Consultas Veterinarias",
            text1ConsultasVeterinarias:
              "¡Porque la salud de tu peludo merece la atención más cercana! Nuestros  veterinarios a domicilio están listos para brindar consultas personalizadas y resolver todas las inquietudes sobre la salud de tu mascota.",
            text2ConsultasVeterinarias:
              "¡Tu amigo peludo se merece lo mejor, y nosotros estamos aquí para proporcionarlo!",
            servicio2: "Vacunación y desparasitación de tu mascota",
            text1servicio2:
              "Protege a tu compañero de cuatro patas con nuestro servicio de vacunación y desparasitación a domicilio. Mantener a tu mascota sana es nuestra prioridad, y lo hacemos de la manera más conveniente para ti.",
            text2servicio2:
              "¡Tu amor por ellos, combinado con nuestra atención experta, es la receta perfecta para una vida feliz y saludable!",
            servicio3: "Vacunación y desparasitación de tu mascota",
            text1servicio3:
              "En PetCare entendemos que algunas pruebas son necesarias para garantizar la salud óptima de tu mascota. Nuestro servicio de toma de muestras se realiza en la comodidad de tu hogar, minimizando el estrés para tu peludo.",
            text1servicio3:
              "¡Cuidamos de cada detalle para que tú y tu mascota se sientan tranquilos y seguros!",
            servicio4: "Radiografía y Ecografía",
            text1servicio4:
              "La tecnología de vanguardia se encuentra ahora en la puerta de tu casa. Con nuestros servicios de radiografía  y ecografía a domicilio, obtén diagnósticos precisos sin tener que salir. Tu tranquilidad y la salud de tu mascota son nuestra prioridad.",
            text2servicio4:
              "¡Confía en nosotros para proporcionar atención veterinaria avanzada con la comodidad que te mereces!",
            servicio5: "Certificados de viaje",
            text1servicio5:
              "¿Planeando una aventura con tu amigo peludo? En PetCare, hacemos que el proceso sea suave y sin complicaciones. Nuestros certificados de viaje garantizan que tu mascota esté lista para embarcarse en cualquier travesía contigo.",
            text2servicio5:
              "¡Viaja con confianza, sabiendo que cuidamos de la salud y bienestar de tu compañero durante todo el trayecto!",
            servicio6: "Servicio de Eutanasia",
            text1servicio6:
              "En momentos difíciles, PetCare está aquí para brindar apoyo compasivo. Nuestro servicio de eutanasia a domicilio se realiza con la máxima empatía y respeto, permitiéndote despedirte de tu querido amigo en un entorno familiar.",
            text2servicio6:
              "Tu mascota merece despedirse con dignidad y amor, y nosotros nos aseguramos de que así sea.",
            tituloTextoInformativo: "Ahorra Tiempo y Dinero",
            textoInformativo:
              "¿Te preocupa el costo del transporte o no tienes tiempo para llevar a tu mascota a la veterinaria? Descubre las ventajas de nuestras consultas domiciliarias. Ahorra dinero en transporte y tiempo valioso, permitiendo que nuestros veterinarios expertos atiendan a tu mascota en el entorno familiar de tu hogar. Simplifica la atención veterinaria y maximiza la comodidad.",
            tituloTextoInformativo2: "Cuida a tus Mascotas sin Salir de Casa",
            textoInformativo2:
              "Descubre la comodidad del cuidado veterinario en casa. Invitamos a todos los dueños de mascotas a disfrutar de consultas desde la comodidad de su hogar. Con solo unos clics, tendrás acceso a profesionales veterinarios, eliminando la necesidad de desplazamientos. ¡Haz que el bienestar de tus mascotas sea tan fácil como estar en casa!",
            tituloTextoInformativo3: "Sé el Veterinario del Futuro",
            textoInformativo3:
              "¿Te preocupa el costo del transporte o no tienes tiempo para llevar a tu mascota a la veterinaria? Descubre las ventajas de nuestras consultas domiciliarias. Ahorra dinero en transporte y tiempo valioso, permitiendo que nuestros veterinarios atiendan a tu mascota en el entorno familiar de tu hogar. Simplifica la atención veterinaria y maximiza la comodidad.",
            contactanos: "Contactanos",
            contactanosNombre: "Nombre completo",
            contactanosEmail: "Correo electrónico",
            contactanosTelefono: "Celular",
            contactanosAsunto: "Asunto",
            contactanosMensaje: "Mensaje",
            contactanosBtnEnviar: "Enviar",
            tituloInicioSesion: "Iniciar sesión",
            tituloInicioSesion: "Inicio de sesión cliente PetCare",
            saludoDeBienvenida: "¡Bienvenido de nuevo!",
            logInEmail: "Ingrese su correo electronico",
            logInContraseña: "Ingrese su contraseña",
            logInBoton: "Iniciar sesión",
            logInCrearCuentaBtn: "Crear una nueva cuenta",
            logInHomeBtn: "Inicio",
            tituloPerfilCliente: "Perfil Cliente",
            bienvenidaUsuario: "Bienvenido, ",
            editarPerfil: "Editar informacion",
            editarPerfilCerrar: "Cerrar",
            editarPerfilGuardar: "Guardar cambios",
            misMascotas: "Mis mascotas",
            verMisMascotas: "Ver mis mascotas",
            agregarMascota: "Agregar mascota",
            agendarCita: "Agendar Consulta",
            citasAgendadas: "Consultas Agendadas",
            tituloResgistroPestaña: "Registro del Usuario",
            tituloResgistro: "¡Registrate!",
            registroFecha: "Ingrese la fecha de nacimiento",
            registroNombre: "Ingrese su nombre completo",
            registroCedula: "Ingrese su numero de cedula",
            registroEmail: "Ingrese su correo electronico",
            registroCelular: "Ingrese su numero celular",
            registroDireccion: "Ingrese la direccion de su vivienda",
            registroYaTienesCuentaBtn: "¿Ya tienes cuenta? Iniciar sesión",
            tituloPerfilVeterinario: "Perfil Veterinario",
            tituloPerfilVeterinarioBienvenida: "Bienvenido, Doc ",
            tituloLogInVet: "Iniciar sesión Veterinario",
            tituloLogInVetBienvenida: "¡Bienvenido de nuevo, Doc!",
            tituloPerfilVeterinarioRegistro: "Registro de Veterinario",
            tituloResgistroVet: "!Registrate Doc!",
            registroEspecializacion: "Ingrese su especializacion",
            registroTarjetaProf: "Ingrese el numero de su tarjeta profesional",
          },
        },
      },
    },
    function (err, t) {
      updateContent();
    }
  );

  function updateContent() {
    const elements = document.querySelectorAll(".translate");
    elements.forEach((el) => {
      const key = el.getAttribute("data-i18n");
      el.innerHTML = i18next.t(key);
    });
  }

  window.changeLanguage = function (lng) {
    i18next.changeLanguage(lng, updateContent);
  };
});
