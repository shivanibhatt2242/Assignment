function convertCurrency(){
    let amount = parseFloat(document.getElementById("amount").value);
    let fromCurrency= document.getElementById("fromCurrency").value;
    let toCurrency = document.getElementById("toCurrency").value;
    if (isNaN(amount) || amont <= 0){
        document.getElementById("result").innerText="Please enter a valid amount.";
        return;
    }
    let exchangeRate = 83.20;
    let convertedAmount = amount*exchangeRate;

    document.getElementById("result").innerText=
    `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
}



    