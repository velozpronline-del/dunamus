const pantallaEdad = document.getElementById("edad");
const pagina = document.getElementById("pagina");

const botonEntrar = document.getElementById("entrar");
const botonSalir = document.getElementById("salir");

const troll = document.getElementById("troll");
const botonCerrar = document.getElementById("cerrar");

const perfiles = document.querySelectorAll(".ver-perfil");


/* ENTRAR */

botonEntrar.addEventListener("click", function () {

    pantallaEdad.classList.add("oculto");

    pagina.classList.remove("oculto");

});


/* SALIR */

botonSalir.addEventListener("click", function () {

    alert("Acceso denegado 💀");

});


/* PERFIL */

perfiles.forEach(function (boton) {

    boton.addEventListener("click", function () {

        troll.classList.remove("oculto");

    });

});


/* CERRAR TROLL */

botonCerrar.addEventListener("click", function () {

    troll.classList.add("oculto");

});