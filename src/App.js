import logo from './logo.svg';
import './App.css';
import TodoTemplate from "./component/todo/TodoTemplate";
import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";
import Join from "./component/user/Join";
import {Routes, Route} from "react-router-dom";
import Login from "./component/user/Login";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={ <TodoTemplate /> } />
        <Route path='/join' element={ <Join /> }/>
        <Route path='/login' element={ <Login /> }/>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
