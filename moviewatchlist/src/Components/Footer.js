import { CardFooter } from "reactstrap";
import { useEffect, useState } from "react";
import img1 from "../Images/Kalki.png"
import img2 from "../Images/3Idiots.png"
import img3 from "../Images/InfinityWar.png"
import img4 from "../Images/RaOne.png"
import img5 from "../Images/Sholay.png"


const Footer = () => {
  return (
    <footer className="footer">
      <div className="image-collage">
        <img src={img1} className="img img1" alt="design" />
        <img src={img2} className="img img2" alt="design" />
        <img src={img3} className="img img3" alt="design" />
        <img src={img4} className="img img4" alt="design" />
        <img src={img5} className="img img5" alt="design" />
      </div>

      <p className="footer-text">Contact us : 9106058804</p>
    </footer>
  );
};

export default Footer;
