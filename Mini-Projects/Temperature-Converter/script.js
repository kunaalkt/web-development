const formElement = document.forms["temperature-convert"];
const tempInputElement = document.querySelector(".js-input-temperature");
const inputUnitElement = document.querySelector(".js-input-unit");
const tempDisplayElement = document.querySelector(".js-display-text");
const convertUnitElement = document.querySelector(".js-convert-unit");
const convertBtnElement = document.querySelector(".js-convert-btn");

formElement.onsubmit = function getTemperature(event) {
  event.preventDefault();

  const temperature = Number(tempInputElement.value);
  const inputUnit = this.input.value;
  const convertUnit = this.convert.value;

  if (inputUnit == "") {
    alert("Please select valid options!");
  } else {
    switch (convertUnit) {
      case "celsius":
        convertTemperature(temperature, inputUnit, convertUnit);
        break;
      case "fahrenheit":
        convertTemperature(temperature, inputUnit, convertUnit);
        break;
      case "kelvin":
        convertTemperature(temperature, inputUnit, convertUnit);
        break;
      default:
        alert("Please select valid options!");
        break;
    }
  }
};

function convertTemperature(temperature, fromUnit, toUnit) {
  let temp = 0,
    unit = "";
  switch (fromUnit) {
    case "celsius":
      if (toUnit === "fahrenheit") {
        temp = (temperature * 9) / 5 + 32;
        unit = "F";
      } else if (toUnit == "kelvin") {
        temp = temperature + 273.15;
        unit = "K";
      } else {
        temp = temperature;
        unit = "C";
      }
      break;

    case "fahrenheit":
      if (toUnit === "celsius") {
        temp = ((temperature - 32) * 5) / 9;
        unit = "C";
      } else if (toUnit === "kelvin") {
        temp = ((temperature - 32) * 5) / 9 + 273.15;
        unit = "K";
      } else {
        temp = temperature;
        unit = "F";
      }
      break;

    case "kelvin":
      if (toUnit === "celsius") {
        temp = temperature - 273.15;
        unit = "C";
      } else if (toUnit === "fahrenheit") {
        temp = ((temperature - 32) * 5) / 9 - 273.15;
        unit = "F";
      } else {
        temp = temperature;
        unit = "K";
      }
      break;
  }
  displayTemp(temp, unit);
}

function displayTemp(temp, unit) {
  let html = "";
  if (Number.isInteger(temp)) {
    html = `
      <p class="temp-text">${temp}&deg;${unit}</p>
    `;
  } else {
    html = `
      <p class="temp-text">${temp.toFixed(3)}&deg;${unit}</p>
    `;
  }
  tempDisplayElement.innerHTML = html;
}
