// Main image sits to the left
import BrandingCard from "./BrandingCard";

function BrandingSectionLeft(props) {
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
        <img
          src={imageMain}
          style={{ width: "100%" }}
          className="shadow-hug"
        ></img>
        <img src="../src/assets/arrows.png" style={{ width: "100%" }}></img>
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
      </section>
    </>
  );
}

export default BrandingSectionLeft;
