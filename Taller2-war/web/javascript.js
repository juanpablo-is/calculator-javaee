var numeros = document.getElementsByClassName("numero");
var operaciones = document.getElementsByClassName("operacion");
var operaciones = document.getElementsByClassName("operacion");
var resultado = document.getElementById("resultado");
var borrarTotal = document.getElementById("ac");
var borrar = document.getElementById("borrar");

var valor1 = document.getElementById("valor1");
var valor2 = document.getElementById("valor2");
var operacion = document.getElementById("operacion");

var opcion = false;
var valorTotal1 = "";
var valorTotal2 = "";


for (let i = 0; i < numeros.length; i++) {
    numeros[i].addEventListener('click', numero, true);
}

for (let i = 0; i < operaciones.length; i++) {
    operaciones[i].addEventListener('click', operacionF, true);
}

resultado.addEventListener('click', function () {
    if (valorTotal1 === "" || valorTotal2 === "") {
        alert("Debe Rellenar los campos");
    } else {
        document.getElementById("myForm").submit();
    }
}, true);

borrarTotal.addEventListener('click', function () {
    valor1.value = "";
    valor2.value = "";
    operacion.value = "";
    valorTotal1 = "";
    valorTotal2 = "";
    opcion = false;
    document.getElementById("resultadoValor").innerHTML = "";
}, true);

borrar.addEventListener('click', function () {
    if (!opcion) {
        if (valorTotal1.length > 0) {
            valorTotal1 = valorTotal1.substring(0, valorTotal1.length - 1);
            valor1.value = valorTotal1;
        }
    } else {
        if (valorTotal2.length > 0) {
            valorTotal2 = valorTotal2.substring(0, valorTotal2.length - 1);
            valor2.value = valorTotal2;
        }
    }

}, true);

function numero(e) {
    if (!opcion) {
        document.getElementById("resultadoValor").innerHTML = "";
        if (e.target.innerHTML === '0' && valorTotal1 === "") {
        } else {
            valorTotal1 += e.target.innerHTML;
            valor1.value = valorTotal1;
        }
    } else {
        if (e.target.innerHTML === '0' && valorTotal2 === "") {
        } else {
            valorTotal2 += e.target.innerHTML;
            valor2.value = valorTotal2;
        }
    }
}

function operacionF(e) {
    var valorResultado = document.getElementById("resultadoValor").innerHTML;
    if (valorResultado !== "") {
        valorTotal1 = valorResultado;
        valor1.value = valorResultado;
    }
    operacion.value = e.target.innerHTML;
    opcion = true;
}