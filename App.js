import "./App.css";
import SideBar from "./SideBar";
import Feed from "./Feed";
import Widgets from "./Widgets";

function App() {
  return (
    <div className="app">
      {/**sidebar */}
      <SideBar />
      {/**feed */}
      <Feed />
      {/**widgets */}
      <Widgets />
    </div>
  );
}

export default App;
