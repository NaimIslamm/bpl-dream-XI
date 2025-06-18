import "./App.css";
import Header from "./components/header/header";
import Players from "./components/Players/Players";
function App() {
  return (
    <>
      <div className="p-5 max-w-7xl mx-auto">
        <Header></Header>
        <Players></Players>
      </div>
    </>
  );
}

export default App;
