import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import ForgotPage from "./components/ForgotPage";
import RegisterPage from "./components/RegisterPage";
import UserList from "./components/UserList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/register-page" element={<RegisterPage />} />
          <Route exact path="/forgot-page" element={<ForgotPage />} />
          <Route exact path="/user-list" element={<UserList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
