//Components
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

//Styles
import "./style/components/app.sass";


function App() {
  return (
    <div className="portfolio leFadeInRight">
      <h1>Renan Domiciano</h1>
      <Sidebar/>
      <MainContent/>
    </div>

    );
}

export default App;