import {bitcoin_block_count_api_url} from '../config.js';

export const getBitcoinBlockCount = async () => {

    const url = bitcoin_block_count_api_url;
    const options = {
        method: 'GET'
    };
    // console.log(`Fetch url: ${url}`);
    const response = await fetch(url, options);
    const result = await response.json();
    // console.log(`Result: ${result}`);
    return result;
};