function Banner() {
  return (
    <header className="height-360 flex-column center">
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
