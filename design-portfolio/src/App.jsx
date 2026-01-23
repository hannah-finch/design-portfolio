import { Outlet } from "react-router-dom";


import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Banner />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
