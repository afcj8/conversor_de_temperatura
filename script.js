var entrada = document.getElementById("entrada")
var sel = document.getElementById("sel")
var result = document.getElementById("result")
var resultado = document.getElementById("resultado")

entrada.addEventListener("input", temperatura)
sel.addEventListener("change", temperatura)
result.addEventListener("change", temperatura)

function temperatura() {
    var temp = entrada.value
    var celsius = (temp * 1.8 + 32).toFixed(1)
    var fahrenheit = ((temp - 32) / 1.8).toFixed(1)
	var kelvin = (temp + 273.15)

    if (temp == "") {
        resultado.innerHTML = ""
    } else {
        if (sel.value == result.value) {
            resultado.innerHTML = `<strong>Selecione unidades de temperatura diferentes!</strong>`
        } else {
            switch (sel.value) {
                case "fahrenheit":
                    calcularFahrenheit(temp, result.value)
                    break
                case "kelvin":
                    calcularKelvin(temp, result.value)
                    break
                case "celsius":
                    calcularCelsius(temp, result.value)
                    break
            }
        }
    }
}

function calcularCelsius(numero, unidade) {
	numero = Number(numero)
	if(unidade == "fahrenheit"){
		resultado.innerHTML = (numero * 1.8 + 32).toFixed(2) + " °F"
	}
	else if(unidade == "kelvin"){
		resultado.innerHTML = (numero + 273.15).toFixed(2) + " K"
	}
}

function calcularFahrenheit(numero, unidade) {
	numero = Number(numero)
	if(unidade == "celsius"){
		resultado.innerHTML = ((numero - 32) / 1.8).toFixed(2) + " °C"
	}
	else if(unidade == "kelvin"){
		resultado.innerHTML = ((numero - 32) * (5/9) + 273.15).toFixed(2) + " K"
	}
}

function calcularKelvin(numero, unidade) {
	numero = Number(numero)
	if(unidade == "fahrenheit"){
		resultado.innerHTML = ((numero - 273.15) * 1.8 + 32).toFixed(2) + " °F"
	}
	else if(unidade == "celsius"){
		resultado.innerHTML = (numero - 273.15).toFixed(2) + " °C"
	}
}