import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // form.current = state;

    emailjs
      .sendForm(
        "service_frmytcq",
        "template_eaz81uf",
        e.target,
        "oxurZqot6Z7Kn3y7T"
      )
      .then(
        (result) => {
          console.log("message sent");
          alert(
            "Thankyou for connecting to Shoaib Sayyad, your message has been send to him."
          );
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div id="form-parent">
      <h1>Lets's Connect</h1>

      <div id="c-parent">
        <div>
          {/* <img id="icona" src={icona} alt="email box image" /> */}
          <img
            id="icona"
            src="https://www.somaiya.edu.in/assets/university/img/hostel/contact.svg"
            alt="email box"
          />
        </div>
        <div id="child">
          <form ref={form} onSubmit={sendEmail} id="form">
            <p>Name</p>
            <input type="text" name="user_name" />
            <p>Enter Number</p>
            <input type="text" name="user_number" />
            <p>Enter Email</p>
            <input type="email" name="user_email" />
            <p>Message</p>
            <textarea name="message" /> <br />
            <input type="submit" id="button" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
};
