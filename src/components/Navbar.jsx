import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const onResumeClick = () => {
    fetch("Shoaib Sayyad.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Shoaib Sayyad.pdf";
        alink.click();
      });
    });
  };
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Nav.Link href="#home">Shoaib Sayyad</Nav.Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href='#' className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link> */}
            <Nav.Link
              href="#about-parent"
              className={
                activeLink === "about" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("about-parent")}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#project-parent"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("project-parent")}
            >
              Projects
            </Nav.Link>

            <Nav.Link
              id="cont"
              href="#form-parent"
              className={
                activeLink === "form-parent"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("form-parent")}
            >
              Contact
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://github.com/SayyadShoaib"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <p>
                  <FaGithub className="img" />
                </p>
              </a>
              <a
                href="https://linkedin.com/in/shoaib-sayyad-7964701b3/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <p>
                  <FaLinkedinIn className="img" />
                </p>{" "}
              </a>
              <a
                href="https://wa.me/919368155634"
                target="_blank"
                rel="noreferrer"
              >
                <p>
                  <FaWhatsapp className="img" />
                </p>
              </a>
            </div>
            <button className="vvd" onClick={() => console.log("connect")}>
              <Nav.Link id="cont" href="#form-parent">
                Let's Connect
              </Nav.Link>
            </button>
            <button id="resume" onClick={onResumeClick} type="button">
              Resume
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
