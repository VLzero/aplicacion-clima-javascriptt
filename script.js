let urlBase = "https://api.openweathermap.org/data/2.5/weather";
let api_key = "8feeff5f09cc444e0912d35bf6911357";
let difkelvin = 273.15;
let ciudad = "Tijuana";

document.getElementById("botonBusqueda").addEventListener("click", () => {
  const ciudad = document.getElementById("ciudadEntrada").value;
  if (ciudad) {
    fetchDatosClima(ciudad);
  }
});

function fetchDatosClima(ciudad) {
  fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then((data) => data.json())
    .then((data) => mostrarDatosClima(data));
}

function mostrarDatosClima(data) {
  const divDatosClima = document.getElementById("datosClima");
  divDatosClima.innerHTML ='';

  const ciudadNombre = data.name;
  const paisNombre = data.sys.country;
  const temperatura = data.main.temp;
  const humedad = data.main.humidity;
  const descripcion = data.weather[0].description;
  const icono = data.weather[0].icon;

  const ciudadTitulo = document.createElement("h2");
  ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`;

  const temperaturaInfo = document.createElement("p");
  temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura - difkelvin)}°C`;

  const humedadInfo = document.createElement("p");
  humedadInfo.textContent = `La humedad es: ${humedad}%`;

  const iconoInfo = document.createElement("img");
  iconoInfo.src = `https:\\openweathermap.org/img/wn/${icono}@2x.png`;

  const descripcionInfo = document.createElement("p");
  descripcionInfo.textContent = `La descripcion meteorologica es: ${descripcion}`;

  divDatosClima.appendChild(ciudadTitulo);
  divDatosClima.appendChild(temperaturaInfo);
  divDatosClima.appendChild(humedadInfo);
  divDatosClima.appendChild(iconoInfo);
  divDatosClima.appendChild(descripcionInfo);
}
