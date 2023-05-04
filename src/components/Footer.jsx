import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";

//     class="button-82-front text" style="background-color:#25d366 ;">
//     <span><i class="fa-brands fa-whatsapp"
//             style="color:white; font-size: 20px;"></i> Whatsapp</span>
// </a>
export const Footer = () => {
  return (
    <>
      <div
        id="footer-parent"
        style={{
          margin: "-50px 0",
        }}
      >
        <div id="footer">
          <div>
            <b>Email :</b> aspiringshoaibsayyad@gmail.com
          </div>
          <br />
          <div>
            <b>Phone :</b> 8197198022
          </div>
          <br />
          <div id="icons">
            <a
              href="https://github.com/SayyadShoaib"
              id="ref"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="footer-icons" />
            </a>
            <a
              href="https://linkedin.com/in/shoaib-sayyad-7964701b3"
              id="ref"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn className="footer-icons" />{" "}
            </a>
            <a
              href="https://wa.me/8197198022"
              id="ref"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp className="footer-icons" />
            </a>
          </div>

          <br />

          <h3>
            Made By{" "}
            <span style={{ color: "red" }}>
              <AiFillHeart />{" "}
            </span>{" "}
            Shoaib Sayyad
          </h3>
        </div>
      </div>
    </>
  );
};
