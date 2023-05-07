import './App.css';
import DayList from './component/DayList';
import Header from './component/Header';
import Day from './component/Day';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NotFound from './component/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
      
        <Routes>
          <Route path="/" element={<DayList/>}/>
          <Route path="/day/:inputDay" element={<Day/>}/>
          <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
