// Main image sits to the left
import BrandingCard from "./BrandingCard";

function BrandingSectionRight(props) {
  const name = props.name;
  const industry = props.industry;
  const vibe = props.vibe;
  const notes = props.notes;

  const imageMain = props.imageMain;
  const imageSecond = props.imageSecond;

  return (
    <>
      <section
        className="center"
        style={{ display: "grid", gridTemplateColumns: "1fr .30fr 1fr" }}
      >
        <div className="flex-column center">
          <BrandingCard
            name={name}
            industry={industry}
            vibe={vibe}
            notes={notes}
          ></BrandingCard>
          <img
            src={imageSecond}
            className="shadow-box"
            style={{
              width: "80%",
              marginTop: "60px",
              boxSizing: "border-box",
            }}
          ></img>
        </div>
        <img src="../src/assets/arrows.png" style={{ width: "100%", transform: "scaleX(-1)" }}></img>
      <img
        src={imageMain}
        style={{ width: "100%" }}
        className="shadow-hug"
      ></img>
      </section>
    </>
  );
}

export default BrandingSectionRight;
