import "./Navbar.css";
import Tab from "./Tab";

function Navbar() {
  return (
    <>
      <nav
        className="flex-row"
        style={{
          height: "60px",
          padding: "0 6%",
          alignItems: "flex-end",
          justifyContent: "flex-start",
        }}
      >
        <Tab text="work" link="/"></Tab>
        <Tab text="about" link="/about"></Tab>
        <Tab text="contact" link="/contact" accent></Tab>
      </nav>
    </>
  );
}

export default Navbar;
