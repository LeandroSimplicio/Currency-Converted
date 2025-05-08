const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".select-currency");

function convertValues() {
    const inptuCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueToConveted = document.querySelector(".currency-value");

    

    const dolarToday = 5.25;
    
    const convertedValue = inptuCurrencyValue / dolarToday;
    
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inptuCurrencyValue); 
    currencyValueToConveted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(convertedValue);
    
    
    console.log(dollarValue);
}

convertButton.addEventListener("click", convertValues);