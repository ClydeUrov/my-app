import './App.css';
import BackgroundImage from './bgImage/BackgroudImage';
import BgImageLeftControl from './bgImage/components/BgImageLeftControl';
import BgImageRightControl from './bgImage/components/BgImageRightControl';
import Journal from './journal/Journal';
import Quote from './quote/Quote';
import Weather from "./weather/Weather"

function App() {
  return (
    <div className="App">
      <BackgroundImage />
      <header className="">
        <Weather />
        <Quote />
      </header>
      <aside className="left-wallpaper-control wallpaper-control">
        <BgImageLeftControl />
      </aside>
      <main>
        <Journal />
      </main>
      <aside className="right-wallpaper-control wallpaper-control">
        <BgImageRightControl />
      </aside>
      <footer>
        <Quote />
      </footer>
    </div>
  );
}

export default App;
