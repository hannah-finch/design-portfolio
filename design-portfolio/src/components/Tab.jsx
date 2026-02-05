import { NavLink } from "react-router-dom";

function Tab(props) {
  const text = props.text;
  const link = props.link;
  const accent = props.accent;

  return (
    <NavLink
      to={link}
      className="tab shadow-box-top flex-column"
      style={{
        backgroundColor: accent ? "var(--green-dark)" : "var(--off-white)",
        marginLeft: accent ? "auto" : "none",
      }}
    >
      <div style={{ margin: "14px 16px 0px 16px", lineHeight: '1', whiteSpace: 'nowrap', color: accent ? 'var(--off-white)' : null }}>{text}</div>
      <div
        className={
          accent ? "hide shadow-top-line-green" : "hide shadow-top-line"
        }
        style={{ marginTop: "auto" }}
      ></div>
    </NavLink>
  );
}

export default Tab;
