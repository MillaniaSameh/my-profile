import "../App.css";
import CopyrightIcon from "@mui/icons-material/Copyright";

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-name">
        <h3>
          <span className="my-name">Millania Sameh</span>
        </h3>
      </div>
      <div className="footer-icon">
        <CopyrightIcon />
      </div>
      <div className="footer-copyright">
        2023 This website was designed and developed by Millania Sameh.
      </div>
    </div>
  );
}

export default Footer;
