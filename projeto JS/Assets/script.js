// Seleção de elementos do DOM
const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".select-currency");
const inputCurrency = document.querySelector(".input-currency");
const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
const currencyValueConverted = document.querySelector(".currency-value");
const currencyName = document.getElementById("currency-name");
const currencyImage = document.querySelector(".currency-img");

// Objeto contendo informações das moedas
const currencyData = {
  dolar: {
    name: "Dólar Americano",
    image: "./Assets/img/usa.png",
    locale: "en-US",
    currency: "USD",
  },
  euro: {
    name: "Euro",
    image: "./Assets/img/euro.png",
    locale: "de-DE",
    currency: "EUR",
  },
};

// Função para formatar valores monetários
function formatCurrency(value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
}

// Função assíncrona para obter as cotações atualizadas
async function getExchangeRates() {
  try {
    const response = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL");
    const data = await response.json();
    return {
      dolar: parseFloat(data.USDBRL.bid),
      euro: parseFloat(data.EURBRL.bid),
    };
  } catch (error) {
    console.error("Erro ao buscar cotações:", error);
    return null;
  }
}

// Função para converter os valores
async function convertValues() {
  const amount = parseFloat(inputCurrency.value);
  if (isNaN(amount)) {
    currencyValueConverted.innerHTML = "Valor inválido";
    currencyValueToConvert.innerHTML = "";
    return;
  }

  const rates = await getExchangeRates();
  if (!rates) {
    currencyValueConverted.innerHTML = "Erro ao obter cotações.";
    currencyValueToConvert.innerHTML = "";
    return;
  }

  const selectedCurrency = currencySelect.value;
  const rate = rates[selectedCurrency];
  const { locale, currency } = currencyData[selectedCurrency];

  const convertedAmount = amount / rate;

  currencyValueConverted.innerHTML = formatCurrency(convertedAmount, locale, currency);
  currencyValueToConvert.innerHTML = formatCurrency(amount, "pt-BR", "BRL");
}

// Função para alterar as informações da moeda selecionada
function changeCurrency() {
  const selectedCurrency = currencySelect.value;
  const { name, image } = currencyData[selectedCurrency];

  currencyName.innerHTML = name;
  currencyImage.src = image;

  convertValues();
}

// Adição de event listeners
currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
