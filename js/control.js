"use strict";

const inputFieldX = document.querySelector("#fieldSizeX");
const inputFieldY = document.querySelector("#fieldSizeY");
const btnStart = document.querySelector(".btn-start");

const field = document.querySelector("#container");

btnStart.addEventListener("click", btnStartHandler);

function clearField(field) {
  field.innerHTML = "";
}
function refreshBtnState(btn) {
  btn.classList.toggle("btn-start");
  btn.classList.toggle("btn-stop");
  if (btn.classList.contains("btn-stop")) {
    btn.state = "START";
    btn.innerHTML = "Остановить";
  } else {
    btn.state = "STOP";
    btn.innerHTML = "Запустить";
  }
  if (btn.state === "START") {
    btn.disabled = true;
    setTimeout(() => {
      btn.disabled = false;
    }, 2000);

    startField();
  } else if (btn.state === "STOP") {
    btn.disabled = true;
    setTimeout(() => {
      btn.disabled = false;
    }, 2000);
    stopField();
  }
}
function btnStartHandler() {
  refreshBtnState(this);
}
function startField() {
  stopUpdate = false;

  let generatedField = generateField(
    inputFieldX.value == 0 ? 3 : inputFieldX.value,
    inputFieldY.value == 0 ? 3 : inputFieldY.value
  );
  updateTable(generatedField);
}
function stopField() {
  stopUpdate = true;
}

function checkValid() {
  if (
    inputFieldX.value < 3 ||
    inputFieldX.value > 50 ||
    inputFieldY.value < 3 ||
    inputFieldY.value > 50
  ) {
    alert("Пожалуйста, введите значения в диапазоне [3 - 50]");
    return false;
  } else return true;
}
