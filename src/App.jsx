import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FlowerExtract from "./components/FlowerExtract";
import DisplaySection from "./components/DisplaySection";
import WebgiViewer from "./components/WebgiViewer";


function App() {

  return (
    <div className="App">
      <Navbar/>
      <Jumbotron/>
      <FlowerExtract/>
      <DisplaySection/>
      <WebgiViewer/>
    </div>
  );
}

export default App;
