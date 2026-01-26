import "./ImageFlex.css";

const ImageFlex = () => {
  const imagesCol1 = [
    "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
    "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
    "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
  ];

  const imagesCol2 = [
    "https://community.softr.io/uploads/db9110/original/2X/7/74e6e7e382d0ff5d7773ca9a87e6f6f8817a68a6.jpeg",
    "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
    "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
  ];

  return (
    <div className="flex-container">
      <div className="flex-img-col">
        {imagesCol1.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`Description ${index + 1}`}
              className="shadow-box"
            />
          </div>
        ))}
      </div>
      <div className="flex-img-col">
        {imagesCol2.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`Description ${index + 1}`}
              className="shadow-box"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageFlex;
