"use strict";

const container = document.querySelector("#container");
let stopUpdate = false;

function updateTable(arr) {
  showTable(arr);
  let prevField = JSON.parse(JSON.stringify(arr));
  let refreshField = updateCeilsState(arr);
  if (stopUpdate) {
    setTimeout(() => {
      stopUpdate = !stopUpdate;
    }, 1000);
    return;
  }
  if (JSON.stringify(refreshField) === JSON.stringify(prevField)) {
    refreshBtnState(btnStart);
    stopUpdate = !stopUpdate;
    return;
  } else if (!stopUpdate) {
    let timeoutID = setTimeout(function () {
      if (!stopUpdate) {
        updateTable(refreshField);
      } else {
        clearTimeout(timeoutID);
      }
    }, 2000);
  }
}

function fillTable(table, arr) {
  for (let i = 0; i < arr.length; i++) {
    let tr = document.createElement("tr");
    for (let j = 0; j < arr[i].length; j++) {
      let td = document.createElement("td");
      td.textContent = arr[i][j];

      deadOrAlive(td);
      tr.append(td);
    }
    table.append(tr);
  }
}

function showTable(arr) {
  container.innerHTML = "";
  const table = document.createElement("table");
  container.append(table);
  fillTable(table, arr);
}

function deadOrAlive(td) {
  td.classList.add("appearance");
  if (td.textContent == 1) {
    td.classList.add("aliveCeil");
  } else {
    td.classList.add("deadCeil");
  }
}
