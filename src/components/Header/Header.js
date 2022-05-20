import Container from "@mui/material/Container";
import "./header.scss";

const Header = () => (
  <header className="header">
    <Container className="header-wrap" maxWidth="lg">
      <div className="header-logo">
        <a href="#">
          <img
            src="https://cdn.rcstatic.com/images/site_graphics/newsite/mobile/logos/rc-logo-small--white.svg"
            alt="Rentalcars.com Brand Logo"
            className="header__logo"
          />
        </a>
      </div>
    </Container>
  </header>
);

export default Header;
