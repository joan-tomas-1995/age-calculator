let inputDay = document.getElementById("input-day");
let inputMonth = document.getElementById("input-month");
let inputYear = document.getElementById("input-year");
let mainBtn = document.getElementById("main-btn");
let outputYear = document.getElementById("out-years");
let outputMonth = document.getElementById("out-months");
let outputDay = document.getElementById("out-days");
let contError = document.getElementById("con-err");

mainBtn.addEventListener("click", calculaAño);
mainBtn.addEventListener("click", calculaMes);
mainBtn.addEventListener("click", calculaDia);
mainBtn.addEventListener("click", errores);

function calculaAño() {
  const d = new Date();
  let year = d.getFullYear();
  let añosPersona = year - inputYear.value - 1;
  console.log(añosPersona);
  outputYear.innerHTML = "";
  outputYear.innerHTML = añosPersona;
}

function calculaMes() {
  let mesesPersona = 12 - inputMonth.value;
  outputMonth.innerHTML = "";
  outputMonth.innerHTML = mesesPersona;
  console.log(mesesPersona);
}

function calculaDia() {
  let mes = parseInt(inputMonth.value);
  let dias = 0;

  if (
    mes === 1 ||
    mes === 3 ||
    mes === 5 ||
    mes === 7 ||
    mes === 8 ||
    mes === 10 ||
    mes === 12
  ) {
    dias = 31;
  }
  if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
    dias = 30;
  }
  if (mes === 2) {
    dias = 28;
  }
  let diasPersona = dias - parseInt(inputDay.value);
  console.log(diasPersona);
  outputDay.innerHTML = "";
  outputDay.innerHTML = diasPersona;
}

/* ERRORES */
function errores() {
  if (
    inputDay.value === "" ||
    inputMonth.value === "" ||
    inputYear.value === ""
  ) {
    console.log("no ok");
    outputDay.innerHTML = "--";
    outputMonth.innerHTML = "--";
    outputYear.innerHTML = "--";
    contError.style.visibility = "visible";
  } else {
    contError.style.visibility = "hidden";
    console.log("ok");
  }
}

/* PODER DAR ENTER AL BOTON */

inputDay.addEventListener("keydown", activaBoton);
inputMonth.addEventListener("keydown", activaBoton);
inputYear.addEventListener("keydown", activaBoton);

function activaBoton(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    mainBtn.click();
  }
}
