import "./Banner.css";

function Banner() {
  return (
    <header className="flex-column center" style={{ height: "340px" }}>
      <img src="./src/assets/flower-banner.png" className="header-img"></img>
      <div
        className="flex-row center"
        style={{ gap: "40px", paddingRight: "70px", marginTop: "60px" }}
      >
        <img
          src="./src/assets/flower-1-03.png"
          className="shadow-hug"
          style={{ width: "60px" }}
        ></img>
        <div className="flex-column center" style={{ gap: "10px" }}>
          <h1 className="shadow-text">Portfolio</h1>
          <h3>Hannah B Finch - Designer / Developer</h3>
        </div>
      </div>
    </header>
  );
}

export default Banner;
