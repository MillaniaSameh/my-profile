import "./Footer.css";
import CopyrightIcon from "@mui/icons-material/Copyright";

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-item1">
        <span className="footer-name">Millania Sameh</span>
      </div>
      <div className="footer-item2">
        <p className="footer-copyright">
          <span className="footer-icon">
            <CopyrightIcon />
          </span>{" "}
          2023 This website was designed and developed by Millania Sameh.
        </p>
      </div>
    </div>
  );
}

export default Footer;
