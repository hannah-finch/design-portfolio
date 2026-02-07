// ToDo: Rewrite the about me paragraph to something I like

import H2 from "../components/H2";
import IconBox from "../components/IconBox";

function AboutPage() {
  return (
    <>
      <section className="flex-row center" style={{ gap: "20px" }}>
        <div className="flex-column start">
          <H2 text="Hannah B Finch" color="var(--purple-light)"></H2>
          <h3 style={{ paddingTop: "8px", fontWeight: "500" }}>
            {"<"} Graphic Designer and Full-Stack Developer {">"}
          </h3>
          <p style={{ marginTop: "30px" }}>
            I’m a multidisciplinary designer and developer with a strong
            foundation in both visual design and logic-driven problem solving.
          </p>
          <p>
            I began my education in graphic design at a top university, where I
            developed a natural eye for composition, branding, and visual
            communication. Although personal circumstances led me to leave the
            program early, I continued building my skills through freelance work
            in graphic design and web development. I co-ran a small creative
            business with my sister, producing digital graphics, calendars, and
            downloadable resources offered freely to the public through a
            donation-based model—driven purely by a love of design and helping
            others. Recently, I completed an online program and earned my
            certificate in full stack development. I enjoy translating ideas and
            information into clear, approachable visuals, and I’m especially
            passionate about branding, website design and development, and
            creating engaging graphics that clients and users can easily
            understand.
          </p>
        </div>
        <div
          style={{
            maxWidth: "400px",
            minWidth: "280px",
            position: "relative",
            marginLeft: "80px",
          }}
        >
          <img
            src="/src/assets/profile-photo.jpg"
            className="shadow-box"
            style={{ width: "100%", transform: "rotate(2deg)" }}
          ></img>
          <div
            className="shadow-box flex-column center"
            style={{
              backgroundColor: "var(--off-white",
              height: "120px",
              width: "120px",
              borderRadius: "20px",
              transform: "rotate(-3deg)",
              position: "absolute",
              top: "36px",
              left: "-86px",
            }}
          >
            <img
              src="/src/assets/graphic-flower-2.png"
              className="shadow-hug"
              style={{ width: "50px", transform: "scaleX(-1)" }}
            ></img>
          </div>
          <img
            src="/src/assets/graphic-tape.png"
            style={{
              width: "50%",
              position: "absolute",
              top: "-4px",
              right: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          ></img>
        </div>
      </section>

      <section className="shadow-box flex-row center" style={{ gap: "10px" }}>
        <IconBox
          image="/src/assets/icons/icon-19.png"
          text="web development"
          link="/webdevelopment"
        ></IconBox>
        <IconBox
          image="/src/assets/icons/icon-18.png"
          text="game development"
          link="/gamedevelopment"
        ></IconBox>
        <IconBox
          image="/src/assets/icons/icon-15.png"
          text="the text"
          link="/webdevelopment"
        ></IconBox>
        <IconBox
          image="/src/assets/icons/icon-16.png"
          text="branding"
          link="/branding"
        ></IconBox>
        <IconBox
          image="/src/assets/icons/icon-17.png"
          text="the text"
          link="/webdevelopment"
        ></IconBox>
      </section>
    </>
  );
}

export default AboutPage;
