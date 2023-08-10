import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { GiHamburgerMenu } from "react-icons/gi";
import brandLogo from "../../assets/images/brandLogo.png";
import classes from "./offcanvas.module.scss";
import { useNavigate } from "react-router-dom";

function OffcanvasContent() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={classes.canvas_container}>
      <button className="d-lg-none" onClick={handleShow}>
        <GiHamburgerMenu />
      </button>

      <Offcanvas show={show} onHide={handleClose} responsive="lg">
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <div onClick={() => navigate("/")} className={classes.brandLogo}>
            <img src={brandLogo} alt="brandLogo" />
          </div>
          <p className="mb-0">
            This is content within an <code>.offcanvas-lg</code>.
          </p>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default OffcanvasContent;
