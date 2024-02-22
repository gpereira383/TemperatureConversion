function fahrenheit() {
  var tempC = document.getElementById("celsius");
  var temp = Number(tempC.value);
  var kelvin = temp + 273;
  var resultado = temp * 1.8 + 32;
  var final = `${resultado} °F e ${kelvin} °K`;

  document.getElementById("resultado").innerText = final;
}

// var celsius;
// var fah;
//  function fahrenheit() {
//   //receber o dado do documento
//   celsius = document.getElementById("celsius").value;
//   //operacao
//   fah = celsius * 1.8 + 32;
//   //escrevendo no documento o resultado
//   document.getElementById("resultado").value = fah;
// }
