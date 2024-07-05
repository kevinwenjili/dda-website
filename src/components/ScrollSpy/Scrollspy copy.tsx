import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Scrollspy.css";

const teamGroup = {
  Leadership: ["Doug Dixon, P.Eng.", "Jigish Naik, P.Eng."],
  "Senior Professionals": [
    "Chris Middleton, P.Eng.",
    "Charlotte Bond, P.Eng.",
    "Lolo Tsung, P.Eng.",
  ],
  Professionals: [
    "Jamie Yeung, P.Eng.",
    "Sach Jayasuria, P.Eng.",
    "Kevin Li, P.Eng.",
  ],
};

const Scrollspy = () => {
  const navigate = useNavigate();

  //   const handleNavClick = (
  //     event: React.MouseEvent<HTMLAnchorElement>,
  //     targetId: string
  //   ) => {
  //     event.preventDefault();
  //     navigate(`#${targetId}`);
  //     const element = document.getElementById(targetId);
  //     if (element) {
  //       element.scrollIntoView({ behavior: "smooth" });
  //     }
  //   };

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    event.preventDefault();
    navigate(`#${targetId}`);
    const element = document.getElementById(targetId);
    if (element) {
      // Get the height of the navbar
      const navbarHeight = document.getElementById("banner")?.clientHeight || 0;

      // Adjust scroll position to account for the navbar after the scrollIntoView animation
      setTimeout(() => {
        const elementRect = element.getBoundingClientRect();
        const offsetPosition = window.scrollY + elementRect.top - navbarHeight;

        window.scrollTo({
          top: offsetPosition - 20,
          behavior: "smooth",
        });
      }, 10); // Adjust timeout duration if needed
    }
  };

    useEffect(() => {
      // Initialize Bootstrap's Scrollspy
      const scrollSpyElement = document.querySelector('[data-bs-spy="scroll"]');
      if (scrollSpyElement) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const scrollSpy = new bootstrap.ScrollSpy(scrollSpyElement, {
          target: "#team-directory",
          rootMargin: "0px 0px 300px 0px",
        });
        return () => {
            // Clean up ScrollSpy instance
            scrollSpy.dispose();
          };
      }
    }, []);

  return (
    <>
      <div className="row">
        <div className="column sidebar">
          <nav
            id="team-directory"
            className="navbar flex-column align-items-stretch"
          >
            {/* <a className="navbar-brand">
              Navbar
            </a> */}
            <nav className="nav flex-column">
              {Object.entries(teamGroup).map(([group, people], groupIndex) => (
                <div>
                  <a
                    className="nav-link sidebar-link sidebar-group"
                    href={"#group-" + groupIndex}
                    key={groupIndex}
                    onClick={(e) => handleNavClick(e, "group-" + groupIndex)}
                  >
                    {group}
                  </a>
                  <nav className="nav flex-column">
                    {people.map((person, peopleIndex) => (
                      <div>
                        <a
                          className="nav-link sidebar-link sidebar-member"
                          href={"#group-" + groupIndex + "-" + peopleIndex}
                          key={groupIndex + "-" + peopleIndex}
                          onClick={(e) =>
                            handleNavClick(
                              e,
                              "group-" + groupIndex + "-" + peopleIndex
                            )
                          }
                        >
                          {person}
                        </a>
                      </div>
                    ))}
                  </nav>
                </div>
              ))}
            </nav>
          </nav>
        </div>

        <div
          data-bs-spy="scroll"
          data-bs-target="#team-directory"
          data-bs-root-margin="0px 0px 300px 0px"
          tabIndex={0}
          className="column content"
        >
          <h4 id="group-0">Leadership</h4>
          <h5 id="group-0-0">
            Doug Dixon
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
          </h5>
          <h5 id="group-0-1">
            Jigish Naik
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
          </h5>
          <div>&nbsp;</div>
          <h4 id="group-1">Senior Professionals</h4>
          <h5 id="group-1-0">
            Chris Middleton
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
          </h5>
          <h5 id="group-1-1">
            Charlotte Bond
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
          </h5>
          <h5 id="group-1-2">
            Lolo Tsung
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
          </h5>
          <div>&nbsp;</div>
          <h4 id="group-2">Professionals</h4>
          <h5 id="group-2-0">
            Jamie Yeung
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
          </h5>
          <h5 id="group-2-1">
            Sach Jayasuria
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
          </h5>
          <h5 id="group-2-2">
            Kevin Li
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
          </h5>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
        </div>
      </div>
    </>
  );
};

export default Scrollspy;
