import './styles/style.css';
import './styles/style2.css';
import './styles/inlinefolder.css';
import Header from "./components/Header";
import Body from "./components/Body";
import Folder from "./components/Folder";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Folder id="st0" />
      <Folder id="st1" />
      <Folder id="st2" />
      <Folder id="st3" />
      <Folder id="st4" />
      <Folder id="st5" />
      <Folder id="st6" />
      <Folder id="st7" />
      <Folder id="st8" />
    </div>
  );
}

export default App;
