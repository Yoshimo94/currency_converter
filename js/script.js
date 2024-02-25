{   
    const calculateResult = (event) => {
        event.preventDefault();
        const moneyElement = document.querySelector(".js-money");
        const resultElement = document.querySelector(".js-result");
        const money = moneyElement.value;
        const currencyRate = setExchangeRate();

        let result = money * currencyRate;

        resultElement.innerText = result.toFixed(2);
    };

    const setExchangeRate = () => {
        const euroRate = 4.33;
        const usdRate = 4.01;
        const chrRate = 4.54;
        const gbpRate = 5.07;
        const selectCurrency = document.querySelector(".js-currency");
        const exchangeRateElement = document.querySelector(".js-exchangeRate");

        switch (selectCurrency.value) {
            case "euro":
                return exchangeRateElement.value = euroRate
            case "dolar":
                return exchangeRateElement.value = usdRate               
            case "frank":
                return exchangeRateElement.value = chrRate               
            case "funt":
                return exchangeRateElement.value = gbpRate               
            case "currency":
                return exchangeRateElement.value = ""               
        }
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", calculateResult);
        formElement.addEventListener("input", setExchangeRate);
    };

    init();
}
