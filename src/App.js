import './App.css';
import logo from "./logo.jpg";

function App() {
  return (
    <div className="App">

      {/* Simple image */}
      <img 
        src={logo}
        alt="My Banner"
        className="app-image"
      />

      <h1>hello guys!</h1>
      <p>SARAN's BLOG</p>

      <button>Click Me</button>
    </div>
  );
}

export default App;
