const celsiusInput = document.querySelector('#celsius > input');
const kelvinInput = document.querySelector('#kelvin > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');

function roundNum(num){
    return Math.round(num*100)/100;
}
function celsius(){
    const cTemp =parseFloat(celsiusInput.value)
    const fTemp = (cTemp * (9/5)) + 32;
    const kTemp = cTemp + 273.15
    fahrenheitInput.value = roundNum(fTemp);
    kelvinInput.value = roundNum(kTemp);
    };


function fahrenheit(){
    const fTemp = parseFloat(fahrenheitInput.value);
    const cTemp = (fTemp - 3) * (5/9);
    const kTemp = (fTemp - 3) * (5/9) + 273.15;
    celsiusInput.value = roundNum(cTemp);
    kelvinInput.value = roundNum(kTemp);
}


function kelvin(){
    const kTemp = parseFloat(kelvinInput.value);
    const cTemp = kTemp - 273.15;
    const fTemp = (kTemp * (9/5)) - 459.67;
    celsiusInput.value = roundNum(cTemp);
    fahrenheitInput.value = roundNum(fTemp);
};


function main() {
    celsiusInput.addEventListener('input', celsius)
    fahrenheitInput.addEventListener("input", fahrenheit)
    kelvinInput.addEventListener("input", kelvin)
}
main();
