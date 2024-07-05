import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ScrollSpy.css";
import teamLists from "../../../public/db/teamList";

interface Props {
  name: string;
  refLink: string;
  suffix?: string | null;
  title: string;
  group: string;
}

let teamGroupsSet = new Set<string>();
teamLists.forEach((teamMember: Props) => {
  teamGroupsSet.add(teamMember.group);
  // console.log("team member", teamMember.group)
});

const teamGroups: string[] = [...teamGroupsSet];

const Scrollspy = () => {
  const navigate = useNavigate();

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
          top: offsetPosition - 30,
          behavior: "smooth",
        });
      }, 5); // Adjust timeout duration if needed
    }
  };

  useEffect(() => {
    // Create a new Intersection Observer instance
    const observer = new IntersectionObserver(
      (entries) => {
        // Loop over the entries
        entries.forEach((entry) => {
          // If the element is in the viewport
          const entryId = entry.target.id;
          const element = document.querySelector(`a[data-key="${entryId}"]`);
          if (entry.isIntersecting) {
            // Add the "active" class
            // console.log("Intersected entry:", entryId, element);
            if (element) {
              element.classList.add("active");
              // console.log("Added entry:", element);
            }
          } else {
            if (element) {
              element.classList.remove("active");
              // console.log("Removed entry:", element);
            }
          }
        });
      },
      {
        rootMargin: "0px 0% -75% 0%", // Adjust this to change the "viewport"
      }
    );

    // Observe each element
    let elements = document.querySelectorAll(".scroll-spy-tracked");
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <>
      <div className="row">
        <div className="column sidebar">
          <div className="page-title page-title-modified">Team</div>
          <nav
            id="team-directory"
            className="navbar flex-column align-items-stretch"
          >
            <nav className="flex-column">
              {teamGroups.map((group, groupIndex) => (
                <div>
                  <a
                    className="sidebar-link sidebar-group"
                    href={"#group-" + groupIndex}
                    data-key={"group-" + groupIndex}
                    onClick={(e) => handleNavClick(e, "group-" + groupIndex)}
                  >
                    {group}
                  </a>
                  <nav className="flex-column">
                    {teamLists
                      .filter((teamMember) => teamMember.group === group)
                      .map((person, personIndex) => (
                        <div>
                          <a
                            className="sidebar-link sidebar-member"
                            href={"#group-" + groupIndex + "-" + personIndex}
                            data-key={"group-" + groupIndex + "-" + personIndex}
                            onClick={(e) =>
                              handleNavClick(
                                e,
                                "group-" + groupIndex + "-" + personIndex
                              )
                            }
                          >
                            {person.name}
                          </a>
                        </div>
                      ))}
                  </nav>
                </div>
              ))}
            </nav>
          </nav>
        </div>

        <div data-bs-target="#team-directory" className="column content">
          <div id="group-0" className="scroll-spy-tracked content-group">
            Leadership
            <div id="group-0-0" className="scroll-spy-tracked content-member">
              Doug Dixon
            </div>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <div id="group-0-1" className="scroll-spy-tracked content-member">
              Jigish Naik
            </div>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
          </div>
          <div>&nbsp;</div>
          <div id="group-1" className="scroll-spy-tracked">
            Professionals
            <h5 id="group-1-0" className="scroll-spy-tracked">
              Chris Middleton
            </h5>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <h5 id="group-1-1" className="scroll-spy-tracked">
              Charlotte Bond
            </h5>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <h5 id="group-1-2" className="scroll-spy-tracked">
              Lolo Tsung
            </h5>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <h5 id="group-1-3" className="scroll-spy-tracked">
              Jamie Yeung
            </h5>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <h5 id="group-1-4" className="scroll-spy-tracked">
              Sach Jayasuria
            </h5>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <h5 id="group-1-5" className="scroll-spy-tracked">
              Kevin Li
            </h5>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
          </div>
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
