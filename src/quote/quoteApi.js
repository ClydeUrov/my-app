const API_URL = "https://quotes.rest/qod.json";
const apiKey = process.env.REACT_APP_QUOTE_API_KEY;
console.log("apiKey", apiKey)

export const getQuote = async () => {
    const response = await fetch(`${API_URL}?api_key=${apiKey}`, {
        mode: 'no-cors',
    });
    
    const json = await response.json();
    console.log("json", json)
    const quote = json.contents.quotes[0];

    return {
        quote: quote.quote,
        author: quote.author
    }
}

const quotesApi = {
    getQuote
};

export default quotesApi;
