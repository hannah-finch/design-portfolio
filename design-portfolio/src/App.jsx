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
      <main className="shadow-box-top flex-column" style={{marginTop: '-1px', padding: '60px 10%', alignItems: 'flex-start'}}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
