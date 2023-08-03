const API_URL = `https:/quotes.rest/qod?language=en&api_key=${process.env.REACT_APP_QUOTE_API_KEY}`; //quote/random?language=en&limit=1

export const getQuote = async () => {
    console.log("Quote Key", process.env.REACT_APP_QUOTE_API_KEY)
    const response = await fetch(API_URL, {
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
