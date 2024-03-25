import './App.css';
import ElementTransfer from './Pages/ElementTransfer/ElementTransfer';
import { data } from './data';
import NestedList from './Pages/NestedList/NestedList';
import Game from './Pages/Game/Game';
import InfiniteScroll from './Pages/InfiniteScroll/InfiniteScroll';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <div className="App">
       <NavBar/>
       <Routes>
     <Route exact path="/" element={<NestedList items={data}/>}/>
     <Route path="/game" element={<Game/>}/>
     <Route path="/element-transfer" element={<ElementTransfer/>}/>
     <Route path="/infinite-scroll" element={<InfiniteScroll/>}/>
     </Routes>
    </div>
  );
}

export default App;
