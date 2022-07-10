import './App.scss';
import Sidebar from "./components/layouts/Sidebar/Sidebar";
import MenuAside from "./components/layouts/MenuAside/MenuAside"
import ContentWrapper from "./components/layouts/ContentWrapper/ContentWrapper"
import "./assets/globals.scss"



function App() {
  return (
    <div className='app'>
          <Sidebar />  
          <ContentWrapper />
          <MenuAside />
    </div>
  );
}

export default App;
