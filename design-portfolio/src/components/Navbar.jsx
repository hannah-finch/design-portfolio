function Navbar() {
  return (
    <>
      <nav className="flex-row padding-h-10per tab-line shadow-box-top">
        <div className="tab shadow-box-top">one</div>
        <div className="tab shadow-box-top tab-active">two</div>
        <div className="tab tab-accent shadow-box-top">three</div>
      </nav>
    </>
  );
}

export default Navbar;
