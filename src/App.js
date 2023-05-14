import './App.css';
import DayList from './component/DayList';
import Header from './component/Header';
import Day from './component/Day';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NotFound from './component/NotFound';
import CreateWord from './component/CreateWord';
import CreateDay from './component/CreateDay';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
      
        <Routes>
          <Route path="/" element={<DayList/>}/>
          <Route path="/day/:inputDay" element={<Day/>}/>
          <Route path="/create_word" element={<CreateWord/>} />
          <Route path="/create_day" element={<CreateDay/>} />
          <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
