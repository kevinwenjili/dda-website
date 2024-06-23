
const Navbar = () => {
  return (
    <div id="banner" className="banner-text banner-bg-transparent">
      <a href="/" id="logo" className="assemble-logo">
        <img
          className="logo-container move-right"
          src="src/assets/logo_frame_horizontal.png"
        />
        <img
          className="logo-container move-left"
          src="src/assets/logo_a_horizontal.png"
        />
        <img
          className="logo-container move-down"
          src="src/assets/logo_d_vertical.png"
        />
        <img
          className="logo-container move-up"
          src="src/assets/logo_a_vertical.png"
        />
        <img
          className="logo-container move-diagonal"
          src="src/assets/logo_a_diagonal.png"
        />
        <img
          className="logo-container transition-in"
          src="src/assets/logo_d_curve.png"
        />
        <div className="logo-text">Doug Dixon & Associates</div>
      </a>

      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>
      <ul className="menu">
        <li>
          <a href="projects.html">Projects</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#careers">Careers</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
