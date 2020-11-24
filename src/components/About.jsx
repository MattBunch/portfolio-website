import React from "react";

export default ({ aboutLinks }) => {
  return (
    <section className="page-section" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">About</h2>
            <h3 className="section-subheading text-muted">My story</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul className="timeline">
              {aboutLinks &&
                aboutLinks.map(
                  ({ date, imageLink, subheading, bodytext }, index) => (
                    <li>
                      <div className="timeline-image">
                        <img
                          className="rounded-circle img-fluid"
                          src={imageLink}
                          alt=""
                        />
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <h4>{date}</h4>
                          <h4 className="subheading">{subheading}</h4>
                        </div>
                        <div className="timeline-body">
                          <p className="text-muted">{bodytext}</p>
                        </div>
                      </div>
                    </li>
                  )
                )}
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <h4>
                    The Story
                    <br />
                    Continues!
                  </h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
