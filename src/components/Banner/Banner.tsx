import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import HandleNavClick from "../HandleNavClick";
import "./Banner.css";
import "./Banner-Std.css";
import "./Banner-Alt.css";

interface BannerProps {
  bannerStyle?: "std" | "alt";
}

const Banner: React.FC<BannerProps> = ({ bannerStyle = "std" }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = 280;
      let y = window.scrollY;
      const bannerElement = document.getElementById("banner");
      const logoElement = document.getElementById("logo");
      const logoComponents =
        document.querySelectorAll<HTMLElement>(".logo-container");
      const animations = [
        "move-left",
        "move-right",
        "move-up",
        "move-down",
        "move-diagonal",
        "transition-in",
      ];

      if (
        y >= scrollPos &&
        bannerElement?.classList.contains("banner-bg-transparent")
      ) {
        bannerElement.classList.remove("banner-bg-transparent");
        bannerElement.classList.add("banner-transition-dark");
        setTimeout(() => {
          bannerElement.classList.remove("banner-transition-dark");
          bannerElement.classList.add("banner-bg-dark");
        }, 300);
      } else if (
        y < scrollPos &&
        bannerElement?.classList.contains("banner-bg-dark")
      ) {
        bannerElement.classList.remove("banner-bg-dark");
        bannerElement.classList.add("banner-transition-transparent");
        setTimeout(() => {
          bannerElement.classList.remove("banner-transition-transparent");
          bannerElement.classList.add("banner-bg-transparent");
        }, 300);
      }

      if (y >= scrollPos && logoElement?.classList.contains("assemble-logo")) {
        setTimeout(() => {
          logoElement.classList.remove("assemble-logo");
          logoComponents.forEach((element) => {
            animations.forEach((animation) => {
              if (element.classList.contains(animation)) {
                element.classList.remove(animation);
                // Trigger reflow to restart animation
                element.offsetWidth; // This line will trigger a reflow
                element.classList.add(animation);
              }
            });
          });
          logoElement.classList.add("disassemble-logo");
        }, 0);
      } else if (
        y < scrollPos &&
        logoElement?.classList.contains("disassemble-logo")
      ) {
        setTimeout(() => {
          logoElement.classList.remove("disassemble-logo");
          logoComponents.forEach((element) => {
            animations.forEach((animation) => {
              if (element.classList.contains(animation)) {
                element.classList.remove(animation);
                // Trigger reflow to restart animation
                element.offsetWidth; // This line will trigger a reflow
                element.classList.add(animation);
              }
            });
          });
          logoElement.classList.add("assemble-logo");
        }, 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup scroll event on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={bannerStyle + "-banner"}>
      <div id="banner" className="banner-text banner-bg-transparent">
        <a href="#/" id="logo" className="assemble-logo">
          <img
            className="logo-container move-right"
            src="assets/logo/logo_frame_horizontal.png"
          />
          <img
            className="logo-container move-left"
            src="assets/logo/logo_a_horizontal.png"
          />
          <img
            className="logo-container move-down"
            src="assets/logo/logo_d_vertical.png"
          />
          <img
            className="logo-container move-up"
            src="assets/logo/logo_a_vertical.png"
          />
          <img
            className="logo-container move-diagonal"
            src="assets/logo/logo_a_diagonal.png"
          />
          <img
            className="logo-container transition-in"
            src="assets/logo/logo_d_curve.png"
          />
          <div className="logo-text">Doug Dixon & Associates</div>
        </a>

        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <a href="#/about">About</a>
          </li>
          <li>
            <a href="#/projects">Projects</a>
          </li>
          <li>
            <a href="#/team">Team</a>
          </li>
          <li>
            <a href="#/careers">Careers</a>
          </li>
          <li>
            <a
              href="#/footer"
              onClick={(e) =>
                HandleNavClick({
                  event: e,
                  targetId: "footer",
                  offset: -1000000,
                  navigate: navigate,
                })
              }
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Banner;
