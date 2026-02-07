import { Link } from "react-router-dom";

function IconBox(props) {
  const image = props.image;
  const text = props.text;
  const link = props.link;
  return (
    <Link to={link}>
      <div
        className="shadow-box flex-column center"
        style={{
          width: "200px",
          height: "140px",
          borderRadius: "12px",
          gap: "6px",
          fontSize: "11px",
        }}
      >
        <img src={image} style={{ width: "30px" }}></img>
        {text}
      </div>
    </Link>
  );
}

export default IconBox;
