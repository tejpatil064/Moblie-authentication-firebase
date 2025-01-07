import { Routes,Route } from 'react-router-dom';
import './App.css';
import Form from "./components/Form"
import Dashboard from './components/Dashboard';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Form/>} />
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </>
  );
}

export default App;
