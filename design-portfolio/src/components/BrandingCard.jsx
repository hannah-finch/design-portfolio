import H2 from "./H2";

function BrandingCard(props) {
  const name = props.name;
  const industry = props.industry;
  const vibe = props.vibe;
  const notes = props.notes;

  return (
    <div
      className="shadow-box flex-column start"
      style={{ padding: "20px 26px", gap: "10px", width: '100%', boxSizing:'border-box'}}
    >
      <H2 text={name} color="var(--purple-light)"></H2>
      <div>
        <h3 className="bold">INDUSTRY: </h3>
        <h3>{industry}</h3>
      </div>
      <div>
        <h3 className="bold">VIBE: </h3>
        <h3>{vibe}</h3>
      </div>
      <div>
        <h3 className="bold">NOTES: </h3>
        <h3>{notes}</h3>
      </div>
    </div>
  );
}

export default BrandingCard;
