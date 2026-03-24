import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollTop from "./components/Button/ScrollTop";
import Loader from "./components/Loader/Loader";
import usePageLoader from "./hooks/usePageLoader";
import "./styles/global.css";

function App() {
  const loading = usePageLoader();

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}

export default App;