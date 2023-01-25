import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Reminders from './pages/reminders/Reminders';
import Layout from './layout/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import SecurityProvider from './security/SecurityProvider';
import SecureRoute from './security/SecureRoute';
import User from './pages/user/User';

function App() {
  return (
    <BrowserRouter>
      <SecurityProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="/" element={<SecureRoute />} >
                <Route path="/" element={<Reminders />} />
                <Route path="/user" element={<User />} />
              </Route>
            </Route>
          </Routes>
      </SecurityProvider>
    </BrowserRouter>
  );
}

export default App;
