function H2(props) {
  const text = props.text;
  const color = props.color;

  return (
    <>
      <div
        className="shadow-box"
        style={{ backgroundColor: color, padding: "4px 8px", borderRadius: '3px'}}
      >
        <h2 className="shadow-text-negative">{text}</h2>
      </div>
    </>
  );
}

export default H2;
