import './App.css';
import BackgroundImage from './bgImage/BackgroudImage';
import Quote from './quote/Quote';
import Weather from "./weather/Weather"

const apiKey = process.env.REACT_APP_API_KEY;
const apiKey_1 = process.env.REACT_APP_UNSPLASH_SECRET_KEY
const apiKey_5 = process.env.REACT_APP_UNSPLASH_ACCESS_KEY
console.log(apiKey, apiKey_1, apiKey_5);

function App() {
  return (
    <div className="">
      <header className="">
        <Weather />
        <Quote />
        <BackgroundImage />
      </header>
    </div>
  );
}

export default App;
