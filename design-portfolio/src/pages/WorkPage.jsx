import H2 from "../components/H2";
import ImageFlex from "../components/ImageFlex";

function WorkPage() {
  return (
    <section className="flex-column start">
      <H2 text="My Work" color="var(--purple-light)"></H2>
      <div className="spacer"></div>
      <ImageFlex></ImageFlex>
    </section>
  );
}

export default WorkPage;
