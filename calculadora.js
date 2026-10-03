let numero1 = 0;
let operacion = "";
let nuevoNumero = true;

function numero(valor) {
    let pantalla = document.getElementById("pantalla");

    if (nuevoNumero || pantalla.value === "0") {
        pantalla.value = valor;
        nuevoNumero = false;
    } else {
        pantalla.value = pantalla.value + valor;
    }
}

function punto() {
    let pantalla = document.getElementById("pantalla");

    if (nuevoNumero) {
        pantalla.value = "0.";
        nuevoNumero = false;
    } else if (!pantalla.value.includes(".")) {
        pantalla.value = pantalla.value + ".";
    }
}

function guardarOperacion(op) {
    let pantalla = document.getElementById("pantalla");

    numero1 = parseFloat(pantalla.value);
    operacion = op;
    nuevoNumero = true;

    document.getElementById("operacionAnterior").textContent =
        numero1 + " " + op;
}

function calcular() {
    let pantalla = document.getElementById("pantalla");
    let numero2 = parseFloat(pantalla.value);
    let resultado;

    if (operacion === "+") {
        resultado = numero1 + numero2;
    } else if (operacion === "-") {
        resultado = numero1 - numero2;
    } else if (operacion === "*") {
        resultado = numero1 * numero2;
    } else if (operacion === "/") {
        if (numero2 === 0) {
            pantalla.value = "Error";
            return;
        }

        resultado = numero1 / numero2;
    } else if (operacion === "^") {
        resultado = numero1 ** numero2;
    } else {
        return;
    }

    pantalla.value = resultado;
    document.getElementById("operacionAnterior").textContent =
        numero1 + " " + operacion + " " + numero2 + " =";

    nuevoNumero = true;
    operacion = "";
}

function raiz() {
    let pantalla = document.getElementById("pantalla");
    let numero = parseFloat(pantalla.value);

    if (numero < 0) {
        pantalla.value = "Error";
        return;
    }

    pantalla.value = Math.sqrt(numero);
    nuevoNumero = true;
}

function borrar() {
    let pantalla = document.getElementById("pantalla");

    pantalla.value = "0";
    numero1 = 0;
    operacion = "";
    nuevoNumero = true;

    document.getElementById("operacionAnterior").textContent = "";
}

function borrarUltimo() {
    let pantalla = document.getElementById("pantalla");

    if (pantalla.value.length > 1) {
        pantalla.value = pantalla.value.slice(0, -1);
    } else {
        pantalla.value = "0";
    }
}