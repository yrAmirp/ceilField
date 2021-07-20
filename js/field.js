"use strict";

function generateField(M = 3, N = 3) {
  const field = [];
  for (let i = 0; i < N; i++) {
    field.push([]);
    for (let j = 0; j < M; j++) {
      field[i][j] = Math.round(Math.random());
    }
  }

  return field;
}

function updateCeilsState(fieldCeils) {
  let tmpArr = JSON.parse(JSON.stringify(fieldCeils));
  let arr = JSON.parse(JSON.stringify(fieldCeils));

  for (let i = 0; i < tmpArr.length; i++) {
    for (let j = 0; j < tmpArr[i].length; j++) {
      let ceil = {
        x: j,
        y: i,
        ceilState: tmpArr[i][j],
        aliveNeighbors: 0,
        deadNeighbors: 0,
      };
      checkNeighbors(ceil);
      refreshState(ceil);
      arr[i][j] = ceil.ceilState;
    }
  }

  return arr;

  function checkNeighbors(ceil) {
    let i = ceil.y;
    let j = ceil.x;

    if (arr[i - 1]?.[j]) {
      ceil.aliveNeighbors++;
    } else {
      ceil.deadNeighbors++;
    }
    if (arr[i + 1]?.[j]) {
      ceil.aliveNeighbors++;
    } else {
      ceil.deadNeighbors++;
    }
    if (arr[i - 1]?.[j - 1]) {
      ceil.aliveNeighbors++;
    } else {
      ceil.deadNeighbors++;
    }
    if (arr[i - 1]?.[j + 1]) {
      ceil.aliveNeighbors++;
    } else {
      ceil.deadNeighbors++;
    }
    if (arr[i + 1]?.[j - 1]) {
      ceil.aliveNeighbors++;
    } else {
      ceil.deadNeighbors++;
    }
    if (arr[i + 1]?.[j + 1]) {
      ceil.aliveNeighbors++;
    } else {
      ceil.deadNeighbors++;
    }
    if (arr[i][j - 1]) {
      ceil.aliveNeighbors++;
    } else {
      ceil.deadNeighbors++;
    }
    if (arr[i][j + 1]) {
      ceil.aliveNeighbors++;
    } else {
      ceil.deadNeighbors++;
    }
  }
  function refreshState(ceil) {
    if (ceil.ceilState) {
      if (ceil.aliveNeighbors < 2) {
        ceil.ceilState = 0;
      }
      if (ceil.aliveNeighbors > 3) {
        ceil.ceilState = 0;
      }
    } else {
      if (ceil.aliveNeighbors === 3) {
        ceil.ceilState = 1;
      }
    }
  }
}

// function updateField(field) {
//   let prevField = JSON.parse(JSON.stringify(field));
//   let refreshField = updateCeilsState(field);
//   let count = 1;
//   if (JSON.stringify(refreshField) === JSON.stringify(prevField)) {
//     return;
//   } else {
//     setTimeout(function () {
//       updateField(refreshField);
//     }, 2000);
//   }
// }
