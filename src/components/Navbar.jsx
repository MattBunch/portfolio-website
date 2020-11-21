import React from "react";

export default ({ navbarLinks }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          Matt Bunch
        </a>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fa fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ml-auto">
            {navbarLinks &&
              navbarLinks.map(({ title, link }, index) => (
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href={link}>
                    {title}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
