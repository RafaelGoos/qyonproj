import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginForm/>} />
          <Route exact path="/register" element={<RegisterForm/>} />
          <Route exact path="/users" element={<UserList/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
