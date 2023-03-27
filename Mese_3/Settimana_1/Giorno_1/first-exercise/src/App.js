import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./componets/ButtonComponent";
import ClassImageComponent from "./componets/ClassImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
        <ButtonComponent name="invia i dati" />
      </header>
      <ClassImageComponent
        src="https://th.bing.com/th/id/OIP.YAGXgVgcUDYcfjMLazZfbgHaE7?pid=ImgDet&rs=1"
        alt="Kitten Image"
      />
      <ClassImageComponent
        src="https://th.bing.com/th/id/OIP.FMrjTxrWPYeoFVqc9DME7gHaF7?pid=ImgDet&rs=1"
        alt="Dog Image"
      />
      <ClassImageComponent
        src="https://th.bing.com/th/id/OIP.XTOmyqISjZ06j7CluU24GQHaE8?pid=ImgDet&rs=1"
        alt="Rabbit Image"
      />
    </div>
  );
}

export default App;
