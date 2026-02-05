// ToDo: Rewrite the about me paragraph to something I like

import H2 from "../components/H2";

function AboutPage() {
  return (
    <>
      <section className="flex-row start" style={{ gap: "40px" }}>
        <div className="flex-column start">
          <H2 text="Hannah B Finch" color="var(--purple-light)"></H2>
          <h3 style={{paddingTop: '8px', fontWeight: '500'}}>{'<'} Graphic Designer and Full-Stack Developer {'>'}</h3>
          <p style={{ marginTop: "30px" }}>
            I’m a multidisciplinary designer and developer with a strong
            foundation in both visual design and logic-driven problem solving.
          </p>
          <p>
            I began my education in graphic design at a top university, where I
            developed a natural eye for composition, branding, and visual
            communication. Although personal circumstances led me to leave the
            program early, I continued building my skills through freelance work
            in graphic design and web development. I co-ran a small
            creative business with my sister, producing digital graphics,
            calendars, and downloadable resources offered freely to the public
            through a donation-based model—driven purely by a love of design and
            helping others. Recently, I completed an online program and earned
            my certificate in full stack development. I enjoy translating ideas
            and information into clear, approachable visuals, and I’m especially
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
            marginRight: "50px",
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
              height: "140px",
              width: "140px",
              borderRadius: "20px",
              transform: "rotate(-3deg)",
              position: "absolute",
              top: "12px",
              right: "-50px",
            }}
          >
            <img
              src="/src/assets/graphic-flower-2.png"
              className="shadow-hug"
              style={{ width: "60px" }}
            ></img>
          </div>
          <img
            src="/src/assets/graphic-paperclip.png"
            className="shadow-hug"
            style={{
              width: "36px",
              position: "absolute",
              top: "-4px",
              right: "40px",
            }}
          ></img>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
