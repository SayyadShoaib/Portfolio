import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import pro1 from "./../images/videos/spotifyclonecom.gif";
import pro1 from "../images/Project img/Hotstar.png";
import pro2 from "../images/Project img/Trivago.png";
import pro3 from "../images/Project img/Bluefly.png";
import pro4 from "../images/Project img/Skin_Store.png";
// import pro3 from "./../images/videos/gif3.gif"

const Projects = () => {
  return (
    <>
      <div id="project-parent">
        <div id="projects">
          <br /> <br />
          <h1>Projects</h1>
        </div>
        <div id="display">
          <div id="play">
            <img src={pro1} alt="p1" id="video-links" />
            <p
              style={{
                textAlign: "justify",
                marginLeft: "30%",
                border: "2px solid red",
                padding: "10px",
                width: "60%",
                // fontWeight:"500px"
              }}
            >
              Hotstar is a popular Indian streaming service that offers a
              variety of content,including TV shows, movies, sports, and news.In
              addition to Indian content, Hotstar also offers a selection of
              international movies and TV shows.
              <br />
              The tech stack is used here is{" "}
              <span style={{ color: "orangered" }}>
                {" "}
                Html, Css , JavaScript, React, Redux, ChakraUI and Firebase
              </span>
            </p>
            <div id="link">
              <p>
                {" "}
                <a
                  href="https://github.com/ritikraj07/Project_Disney-Hotstar.com/tree/main/hotstar"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub className="icon" />
                </a>
              </p>
              <p className="icon">|</p>
              <p>
                {" "}
                <a
                  href="https://hotstarclone07.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <FaExternalLinkAlt className="icon" />
                </a>
              </p>
            </div>
          </div>

          <div id="play">
            <img src={pro2} alt="p1" id="video-links2" />
            <p
              style={{
                textAlign: "justify",
                marginLeft: "10%",
                border: "2px solid red",
                padding: "10px",
                width: "60%",
              }}
            >
              Trivago is a German-based technology company.Trivago allows users
              to search for hotel rooms across multiple booking websites and
              compare prices and availability.The platform provides information
              and reviews about each hotel.
              <br />
              The tech stack is used here is{" "}
              <span style={{ color: "orangered" }}>
                {" "}
                Html, Css, Json-Server and JavaScript.
              </span>
            </p>
            <div id="link2">
              <p>
                {" "}
                <a
                  href="https://github.com/ArjoshwaDmello/trivago-Clone-Project"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub className="icon" />
                </a>
              </p>
              <p className="icon">|</p>
              <p>
                {" "}
                <a
                  href="https://trivago-clone0.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <FaExternalLinkAlt className="icon" />
                </a>
              </p>
            </div>
          </div>
          <div id="play">
            <img src={pro3} alt="p1" id="video-links3" />
            <p
              style={{
                textAlign: "justify",
                marginLeft: "30%",
                padding: "10px",
                border: "2px solid red",
                width: "60%",
              }}
            >
              Bluefly is a fashion and lifestyle e-commerce company that offers
              a wide range of designer fashion apparel and accessories for men,
              women, and kids.The company offers a wide range of clothing and
              accessories, including dresses, suits, shoes, handbags, jewelry,
              and beauty products.
              <br />
              The tech stack is used here is{" "}
              <span style={{ color: "orangered" }}>
                {" "}
                Html, Css and Javascript
              </span>
            </p>
            <div id="link3">
              <p>
                {" "}
                <a
                  href="https://github.com/Shreyashnaveenmasai/Team-Collaboration"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub className="icon" />
                </a>
              </p>
              <p className="icon">|</p>
              <p>
                {" "}
                <a
                  href="https://scintillating-treacle-437f71.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <FaExternalLinkAlt className="icon" />
                </a>
              </p>
            </div>
          </div>

          <div id="play">
            <img src={pro4} alt="p1" id="video-links2" />
            <p
              style={{
                textAlign: "justify",
                marginLeft: "10%",
                padding: "10px",
                border: "2px solid red",
                width: "60%",
              }}
            >
              Skin Store is an e-commerce platform that specializes in skincare,
              haircare, and beauty products.Skin Store offers a wide range of
              products from over 300 brands, including well-known brands like La
              Roche-Posay, Dermalogica, SkinCeuticals, and Obagi.
              <br />
              The tech stack is used here is{" "}
              <span style={{ color: "orangered" }}>
                {" "}
                Html, Css and Javascript
              </span>
            </p>
            <div id="link2">
              <p>
                {" "}
                <a
                  href="https://github.com/Prathamesh52-28/Skin_Care_Clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub className="icon" />
                </a>
              </p>
              <p className="icon">|</p>
              <p>
                {" "}
                <a
                  href="https://hilarious-donut-4d9a54.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <FaExternalLinkAlt className="icon" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
