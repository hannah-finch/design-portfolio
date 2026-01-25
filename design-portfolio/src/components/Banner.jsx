function Banner() {
  return (
    <header className="flex-column center" style={{height:'340px'}}>
      <img src="./src/assets/flower-banner.png" className="header-img"></img>
      <div className="flex-row title-box center gap-40">
        <img
          src="./src/assets/flower-1-03.png"
          className="width-60 shadow-hug"
        ></img>
        <div className="flex-column center gap-10">
          <h1 className="shadow-text">Portfolio</h1>
          <h3>Hannah B Finch - Designer / Developer</h3>
        </div>
      </div>
    </header>
  );
}

export default Banner;
