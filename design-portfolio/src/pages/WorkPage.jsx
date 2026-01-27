import H2 from "../components/H2";
import ImageFlex from "../components/ImageFlex";

function WorkPage() {
  return (
    <section className="flex-column start">
      <h3>Branding -&gt;</h3>
      <h3>Web Design -&gt;</h3>
      <h3>Code -&gt;</h3>
      <h3>Game Development -&gt;</h3>
      <h3>Visual Communication -&gt;</h3>
      <h3>Illustration -&gt;</h3>
<div className="spacer"></div>
      <H2 text="My Work" color="var(--purple-light)"></H2>
      <div className="spacer"></div>
      <ImageFlex></ImageFlex>
    </section>
  );
}

export default WorkPage;
