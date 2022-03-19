import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import GlobalStyle from "./global/styles";
import "react-toastify/dist/ReactToastify.css";
import Account from "./pages/Account";
import PageNotFound from "./components/PageNotFound";
import LoginRegister from "./components/LoginRegister";
import LoginScreen from "./components/LoginScreen";
import { UserStorage } from "./contexts/UserContext";

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <GlobalStyle />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/cadastro" element={<LoginRegister />} />
          <Route path="/conta/*" element={<Account />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
