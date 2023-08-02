import './App.css';
import Quote from './quote/Quote';
import Weather from "./weather/Weather"

const apiKey = process.env.REACT_APP_API_KEY;
const apiKey_1 = process.env.REACT_APP_WEATHER_API_KEY
const apiKey_5 = process.env.REACT_APP_QUOTE_API_KEY
console.log(apiKey, apiKey_1, apiKey_5);

function App() {
  return (
    <div className="">
      <header className="">
        <Weather />
        <Quote />
      </header>
    </div>
  );
}

export default App;
