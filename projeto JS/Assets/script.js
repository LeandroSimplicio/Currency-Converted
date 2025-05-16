const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".select-currency");

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValueToConvert = document.querySelector(
    ".currency-value-to-convert"
  );
  const currencyValueToConverted = document.querySelector(".currency-value");

  const dolarToday = 5.2;
  const euroToday = 7.2;

  if (currencySelect.value == "dolar") {
    // Se o selecionado for dolar, converte o valor para dolar
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }
  if (currencySelect.value == "euro") {
    // Se o selecionado for euro, converte o valor para euro
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);
}

function changeCurrency() {
  const currencyName = document.getElementById("currency-name");
  const currencyImage = document.getElementById("currency-img");

  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar";
    currencyImage.src = "Assets/img/usa.png";
  }
  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro";
    currencyImage.src = "Assets/img/euro.png";
  }
}

currencySelect.addEventListener("change", convertValues);
convertButton.addEventListener("click", convertValues);
