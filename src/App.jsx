import './App.css'
import Todo from './Components/Todos/Todo';
import Login from './Components/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/todo' element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
