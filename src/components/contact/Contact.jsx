import React from "react";
import ContactForm from "./ContactForm";
import ContactIcons from "./ContactIcons";

export default () => {
  return (
    <section className="page-section" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Contact me</h2>
            <h3 className="section-subheading text-muted">
              Let your voice be heard!
            </h3>
          </div>
        </div>
        <div className="row">
          <ContactForm></ContactForm>
          {/* <ContactIcons></ContactIcons> */}
        </div>
      </div>
    </section>
  );
};
