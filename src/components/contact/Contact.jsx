import React, { Fragment, useState } from "react";

import {
  FaRegAddressBook,
  FaRegEnvelope,
  FaRegUser,
  FaRegMap,
} from "react-icons/fa";
import ShapeOne from "../../assets/shape-1.png";

// css
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Fragment>
      <section className="contact section" id="contact">
        <h2 className="section__title text-cs">Contact Me</h2>
        <p className="section__subtitle">
          Let's <span>Talk About Ideas</span>
        </p>

        <div className="contact__container container grid">
          <div className="contact__content">
            <div className="contact__card">
              <span className="contact__card-icon">
                <FaRegMap />
              </span>
              <h3 className="contact__card-title">Address</h3>
              <p className="contact__cate-data">North Tower, Toronto Canada</p>
            </div>

            <div className="contact__card">
              <span className="contact__card-icon">
                <FaRegUser />
              </span>
              <h3 className="contact__card-title">Freelance</h3>
              <p className="contact__cate-data">Available Right Now</p>
            </div>

            <div className="contact__card">
              <span className="contact__card-icon">
                <FaRegEnvelope />
              </span>
              <h3 className="contact__card-title">Email</h3>
              <p className="contact__cate-data">2712chandra@gmail.com</p>
            </div>

            <div className="contact__card">
              <span className="contact__card-icon">
                <FaRegAddressBook />
              </span>
              <h3 className="contact__card-title">Phone</h3>
              <p className="contact__cate-data">+91 735-1754-927</p>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-group grid">
              <div className="contact__form-div">
                <label className="contact__form-tag text-cs">
                  Your full Name <b>*</b>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="contact__form-input"
                />
              </div>

              <div className="contact__form-div">
                <label className="contact__form-tag text-cs">
                  Your Email Address <b>*</b>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="contact__form-input"
                />
              </div>
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag text-cs">
                Your Subject <b>*</b>
              </label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="contact__form-input"
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag text-cs">
                Your Message <b>*</b>
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="contact__form-input"
              ></textarea>
            </div>

            <div className="contact__submit">
              <p>* Accept terms & conditions.</p>
              <button type="submit" className="btn text-cs">
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="section__deco deco__left">
          <img src={ShapeOne} alt="shape one" className="shape" />
        </div>
      </section>
    </Fragment>
  );
};

export default Contact;
