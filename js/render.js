"use strict";

import * as field from "./field.js";

const container = document.querySelector("#container");
let startField = field.generateField(10, 10);

updateTable(startField);

function updateTable(arr) {
  showTable(arr);
  let prevField = JSON.parse(JSON.stringify(arr));
  let refreshField = field.updateCeilsState(arr);
  if (JSON.stringify(refreshField) === JSON.stringify(prevField)) {
    return;
  } else {
    console.table(refreshField);
    setTimeout(function () {
      updateTable(refreshField);
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
  console.log(table);
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

export { showTable };
