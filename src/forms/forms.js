import {bitcoin_price_api_url} from '../config.js';

export const getBitcoinPrice = async () => {

    const url = bitcoin_price_api_url;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    };
    // console.log(`Fetch url: ${url}`);
    const response = await fetch(url, options);
    const result = await response.json();
    // console.log(`Result: ${result}`);
    return result['bitcoin']['usd'];
};

export const getSatoshiPrice = async () => {
    const bitcoinPrice = await getBitcoinPrice();
    return parseInt( bitcoinPrice) / 100000000;
}

export async function submitBtcForm(btc) {
    const btcFromForm = btc['btc'];
    if (!isNaN(btcFromForm)){
        const bitcoinPrice = await getBitcoinPrice();
        const result = parseFloat(btcFromForm) * bitcoinPrice;
        document.getElementById("btcformoutput").innerText = result + ' $';
    } else {
        document.getElementById("btcformoutput").innerText = "Invalid Input";
    }
}

export async function submitSatsForm(satoshi) {
    const satoshiFromForm = satoshi['satoshi'];
    if (!isNaN(satoshiFromForm)){
        const satoshiPrice = await getSatoshiPrice();
        const result = parseFloat(satoshiFromForm) * satoshiPrice;
        document.getElementById("satsformoutput").innerText = result + ' $';
    } else {
        document.getElementById("satsformoutput").innerText = "Invalid Input";
    }
}