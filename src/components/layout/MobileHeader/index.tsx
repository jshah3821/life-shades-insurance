import classes from "./mobileheader.module.scss";
import OffcanvasContent from "../../Offcanvas";
import brandLogo from "../../../assets/images/brandLogo.png";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";

const MobileHeader = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.mobileheader_container}>
      <OffcanvasContent />
      <div onClick={() => navigate("/")} className={classes.brandLogo}>
        <img src={brandLogo} alt="brandLogo" />
      </div>
      <TfiHeadphoneAlt />
    </div>
  );
};

export default MobileHeader;
