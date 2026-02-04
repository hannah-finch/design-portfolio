import BrandingSectionLeft from "../../components/BrandingSectionLeft";
import BrandingSectionRight from "../../components/BrandingSectionRight";

function BrandingPage() {
  return (
    <>
      <BrandingSectionLeft
        name="Erin Home Cleaning"
        industry="Residential cleaning services"
        vibe="Friendly, bright, and clean"
        notes="Caters to local homeowners, so should feel friendly and approachable. Include a cleaning themed graphic with a bright, floral feel."
        imageMain="./src/assets/work/logo_erin_3.png"
        imageSecond="./src/assets/work/logo_erin_2.png"
      ></BrandingSectionLeft>

      <div className="shadow-box-top" style={{ height: "10px" }}></div>

      <BrandingSectionRight
        name="Name"
        industry="the industry"
        vibe="the vibe"
        notes="the notes"
        imageMain="https://community.softr.io/uploads/db9110/original/2X/7/74e6e7e382d0ff5d7773ca9a87e6f6f8817a68a6.jpeg"
        imageSecond="https://community.softr.io/uploads/db9110/original/2X/7/74e6e7e382d0ff5d7773ca9a87e6f6f8817a68a6.jpeg"
      ></BrandingSectionRight>

      <div className="shadow-box-top" style={{ height: "10px" }}></div>

      <BrandingSectionLeft
        name="Name"
        industry="the industry"
        vibe="the vibe"
        notes="the notes"
        imageMain="https://community.softr.io/uploads/db9110/original/2X/7/74e6e7e382d0ff5d7773ca9a87e6f6f8817a68a6.jpeg"
        imageSecond="https://community.softr.io/uploads/db9110/original/2X/7/74e6e7e382d0ff5d7773ca9a87e6f6f8817a68a6.jpeg"
      ></BrandingSectionLeft>
    </>
  );
}

export default BrandingPage;
