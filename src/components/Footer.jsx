import React from "react";

export default ({ footerLinks }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <span className="copyright">
              Copyright &copy; Matthew Bunch 2020
            </span>
          </div>
          <div className="col-md-4">
            <ul className="list-inline social-buttons">
              {footerLinks &&
                footerLinks.map(({ link, icon }, index) => (
                  <li className="list-inline-item">
                    <a href={link}>
                      <i className={icon}></i>
                    </a>
                  </li>
                ))}
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="list-inline quicklinks">
              <li className="list-inline-item">
                <a href="#something">Privacy Policy</a>
              </li>
              <li className="list-inline-item">
                <a href="#something">Terms of Use</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
