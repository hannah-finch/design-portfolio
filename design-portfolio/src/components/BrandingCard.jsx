import H2 from "./H2";

function BrandingCard(props) {
  const name = props.name;
  const industry = props.industry;
  const vibe = props.vibe;
  const notes = props.notes;

  return (
    <div
      className="shadow-box flex-column start"
      style={{ padding: "26px", width: '100%', boxSizing:'border-box'}}
    >
      <H2 text={name} color="var(--gray-light)"></H2>
      <div>
        <h3 style={{marginTop: '16px'}}>INDUSTRY: </h3>
        {industry}
        <h3 style={{marginTop: '10px'}}>VIBE: </h3>
        {vibe}
        <h3 style={{marginTop: '10px'}}>NOTES: </h3>
        {notes}
      </div>
    </div>
  );
}

export default BrandingCard;
