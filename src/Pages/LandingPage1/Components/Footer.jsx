import "./Footer.css";
import Logo from "../../../assets/Lib_Logo_Main.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer() {
  const navigate = useNavigate();
  const { t } = useTranslation("translation"); // specify namespace explicitly

  return (
    <div className="footer">
      <div className="subfoot">
        <a href="#" className="logo">
          <img
            src={Logo}
            className="FootLogoImg d-inline-block align-text-top"
            alt={t("landingPage.footer.title")}
          />
        </a>
        <h3>{t("landingPage.footer.title")}</h3>
        <p>{t("landingPage.footer.description")}</p>

        {/* Button navigates to AdminLogin */}
        <button
          type="button"
          className="admin-btn"
          onClick={() => navigate("/adminlogin")}
        >
          {t("landingPage.footer.adminButton")}
        </button>

        <div className="details">
          <div className="contact-address">
            <div className="contact">
              <h4>{t("landingPage.footer.contact.title")}</h4>
              <p>
                {t("landingPage.footer.contact.phone")} <br /> {t("landingPage.footer.contact.email")}
              </p>
            </div>

            <div className="address">
              <h4>{t("landingPage.footer.address.title")}</h4>
              <p>{t("landingPage.footer.address.details")}</p>
            </div>
          </div>

          <div className="join-us">
            <h4>{t("landingPage.footer.joinUs.title")}</h4>
            <a className="link">{t("landingPage.footer.joinUs.facebook")}</a>
            <br />
            <a className="link">{t("landingPage.footer.joinUs.whatsapp")}</a>
          </div>
        </div>

        <div className="comp">{t("landingPage.footer.copyright")}</div>
      </div>
    </div>
  );
}

export default Footer;
