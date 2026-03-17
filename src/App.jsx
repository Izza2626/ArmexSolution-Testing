import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./styles/global.css";
import ScrollTop from "./components/Button/ScrollTop";

function App() {
  return (
<>
  <Navbar />

  <main>
    <Outlet />
  </main>

  <Footer />
  <ScrollTop/>
</>
  );
}

export default App;