import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar"; // Navbar 위치에 맞게 수정
import "./styles/App.scss";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
