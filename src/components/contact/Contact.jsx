import React from "react";
// import ContactForm from "./ContactForm";
import ContactIcons from "./ContactIcons";

export default () => {
  return (
    <section class="page-section" id="contact">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <h2 className="section-heading text-uppercase">Contact me</h2>
            <h2 class="mt-0 text-muted">Let's Get In Touch!</h2>
            <hr class="divider my-4" />
            <p class="text-light mb-5">
              Ready to start your next project with me? Give me a call or send
              me an email and I will get back to you as soon as possible!
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
            <i class="fa fa-phone fa-3x mb-3 text-muted"></i>
            <div class="text-success">027 461 5521</div>
          </div>
          <div class="col-lg-4 mr-auto text-center">
            <i class="fa fa-envelope fa-3x mb-3 text-muted"></i>
            <a class="d-block" href="mailto:mattbunch@protonmail.com">
              mattbunch@protonmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
