// https://calculator.swiftutors.com/terminal-velocity-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const terminalVelocityRadio = document.getElementById('terminalVelocityRadio');
const massoftheobjectRadio = document.getElementById('massoftheobjectRadio');
const densityRadio = document.getElementById('densityRadio');
const projectedAreaRadio = document.getElementById('projectedAreaRadio');
const dragCoefficientRadio = document.getElementById('dragCoefficientRadio');

let terminalVelocity;
const g = 9.80665;
let massoftheobject = v1;
let density = v2;
let projectedArea = v3;
let dragCoefficient = v4;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');

terminalVelocityRadio.addEventListener('click', function() {
  variable1.textContent = '(m) Mass of the object (kg)';
  variable2.textContent = '(ρ) Density (kg/m³)';
  variable3.textContent = '(A) Projected Area (m²)';
  variable4.textContent = '(C) Drag Coefficient';
  massoftheobject = v1;
  density = v2;
  projectedArea = v3;
  dragCoefficient = v4;
  result.textContent = '';
});

massoftheobjectRadio.addEventListener('click', function() {
  variable1.textContent = '(V) Terminal Velocity (m/s)';
  variable2.textContent = '(ρ) Density (kg/m³)';
  variable3.textContent = '(A) Projected Area (m²)';
  variable4.textContent = '(C) Drag Coefficient';
  terminalVelocity = v1;
  density = v2;
  projectedArea = v3;
  dragCoefficient = v4;
  result.textContent = '';
});

densityRadio.addEventListener('click', function() {
  variable1.textContent = '(V) Terminal Velocity (m/s)';
  variable2.textContent = '(m) Mass of the object (kg)';
  variable3.textContent = '(A) Projected Area (m²)';
  variable4.textContent = '(C) Drag Coefficient';
  terminalVelocity = v1;
  massoftheobject = v2;
  projectedArea = v3;
  dragCoefficient = v4;
  result.textContent = '';
});

projectedAreaRadio.addEventListener('click', function() {
  variable1.textContent = '(V) Terminal Velocity (m/s)';
  variable2.textContent = '(m) Mass of the object (kg)';
  variable3.textContent = '(ρ) Density (kg/m³)';
  variable4.textContent = '(C) Drag Coefficient';
  terminalVelocity = v1;
  massoftheobject = v2;
  density = v3;
  dragCoefficient = v4;
  result.textContent = '';
});

dragCoefficientRadio.addEventListener('click', function() {
  variable1.textContent = '(V) Terminal Velocity (m/s)';
  variable2.textContent = '(m) Mass of the object (kg)';
  variable3.textContent = '(ρ) Density (kg/m³)';
  variable4.textContent = '(A) Projected Area (m²)';
  terminalVelocity = v1;
  massoftheobject = v2;
  density = v3;
  projectedArea = v4;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(terminalVelocityRadio.checked)
    result.textContent = `Terminal Velocity = ${computeTerminalVelocity().toFixed(2)} m/s`;

  else if(massoftheobjectRadio.checked)
    result.textContent = `Mass of the object = ${computeMassoftheobject().toFixed(2)} kg`;

  else if(densityRadio.checked)
    result.textContent = `Density = ${computeDensity().toFixed(2)} kg/m³`;

  else if(projectedAreaRadio.checked)
    result.textContent = `Projected Area = ${computeProjectedArea().toFixed(2)} m²`;

  else if(dragCoefficientRadio.checked)
    result.textContent = `Drag Coefficient = ${computeDragCoefficient().toFixed(2)}`;
})

// calculation

function computeTerminalVelocity() {
  return Math.sqrt((2 * Number(massoftheobject.value) * g) / (Number(density.value) * Number(projectedArea.value) * Number(dragCoefficient.value)));
}

function computeMassoftheobject() {
  return (Math.pow(Number(terminalVelocity.value), 2) * Number(density.value) * Number(projectedArea.value) * Number(dragCoefficient.value)) / (2 *g);
}

function computeDensity() {
  return (2 * Number(massoftheobject.value) * g) / (Math.pow(Number(terminalVelocity.value), 2) * Number(projectedArea.value) * Number(dragCoefficient.value));
}

function computeProjectedArea() {
  return (2 * Number(massoftheobject.value) * g) / (Number(density.value) * Math.pow(Number(terminalVelocity.value), 2) * Number(dragCoefficient.value));
}

function computeDragCoefficient() {
  return (2 * Number(massoftheobject.value) * g) / (Number(density.value) * Number(projectedArea.value) * Math.pow(Number(terminalVelocity.value), 2));
}