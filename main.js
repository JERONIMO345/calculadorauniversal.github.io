var selectUser = document.getElementById("temperatura");
var selectOutput = document.getElementById("temperaturaSalida");
var opcionSelect = selectUser.options[selectUser.selectedIndex].value;
var opcionSelectOutput = selectOutput.options[selectOutput.selectedIndex].value;
var inputSalida = document.getElementById("salida");
var input = document.getElementById("entradaUser");

var result = 0;

var index = 2;

function Temperatura(){

    index = 1;

    opcionSelect = selectUser.options[selectUser.selectedIndex].value;
    opcionSelectOutput = selectOutput.options[selectOutput.selectedIndex].value;
 
    if (opcionSelect == opcionSelectOutput){
        console.log(opcionSelect)
        inputSalida.value = "Las unidades de medida son iguales.";
    }
    else{
        if (opcionSelect == "centigrados" && opcionSelectOutput == "farenheit"){
            result = (input.value * 1.8) + 32
            console.log(result)
            inputSalida.value = result.toString()
        }
        else if (opcionSelect == "farenheit" && opcionSelectOutput == "centigrados"){
            result = (input.value - 32) / 1.8
            console.log(result)
            inputSalida.value = result.toString()
        }
        else if (opcionSelect == "centigrados" && opcionSelectOutput == "kelvin"){
            result = Number(input.value) + 273.15
            console.log(result)
            inputSalida.value = result.toString()
        }
        else if (opcionSelect == "kelvin" && opcionSelectOutput == "centigrados"){
            result = (input.value - 273.15)
            console.log(result)
            inputSalida.value = result.toString()
        }
    }

    console.log(opcionSelect);
}

function Longitud(){

    index = 2;

    selectUser = document.getElementById("longitud");
    selectOutput = document.getElementById("longitudSalida");
    opcionSelect = selectUser.options[selectUser.selectedIndex].value;
    opcionSelectOutput = selectOutput.options[selectOutput.selectedIndex].value;
 
    if (opcionSelect == opcionSelectOutput){
        console.log(opcionSelect)
        inputSalida.value = "Las unidades de medida son iguales.";
    }

    if (opcionSelect.length > opcionSelectOutput.length){
        console.log("Mayor");
        console.log(opcionSelect);
        console.log(opcionSelectOutput);
    }

    if (opcionSelect.length < opcionSelectOutput.length){
        console.log("Menor");
        console.log(opcionSelect);
        console.log(opcionSelectOutput);
    }

    if (opcionSelect.length == opcionSelectOutput.length){
        console.log("Igual");
        console.log(opcionSelect);
        console.log(opcionSelectOutput);
    }

    /*else{
        if (opcionSelect == "metros" && opcionSelectOutput == "centimetros"){
            result = (input.value * 100)
            console.log(result)
            inputSalida.value = result.toString()
        }
        else if (opcionSelect == "centimetros" && opcionSelectOutput == "metros"){
            result = (input.value / 100)
            console.log(result)
            inputSalida.value = result.toString()
        }
        else if (opcionSelect == "metros" && opcionSelectOutput == "milimetros"){
            result = (input.value * 1000)
            console.log(result)
            inputSalida.value = result.toString()
        }
        else if (opcionSelect == "milimetros" && opcionSelectOutput == "metros"){
            result = (input.value / 1000)
            console.log(result)
            inputSalida.value = result.toString()
        }
        else if (opcionSelect == "metros" && opcionSelectOutput == "kilometros"){
            result = (input.value / 1000)
            console.log(result)
            inputSalida.value = result.toString()
        }
        else if (opcionSelect == "kilometros" && opcionSelectOutput == "metros"){
            result = (input.value * 1000)
            console.log(result)
            inputSalida.value = result.toString()
        }
    }*/

    //console.log(opcionSelect);
}

function OutputButton(){
    if (index == 1){
        Temperatura();
    }
    else if (index == 2){
        Longitud();
    }

}