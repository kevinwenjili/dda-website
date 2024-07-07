import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ScrollSpy.css";
import teamLists from "../../../public/db/teamList";

interface Props {
  fName: string;
  lName: string;
  imgLink?: string;
  refLink?: string;
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

const ScrollSpy = () => {
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
    const setupObserver = () => {
      // Create a new Intersection Observer instance
      const observer = new IntersectionObserver(
        (entries) => {
          // Loop over the entries
          entries.forEach((entry) => {
            // If the element is in the viewport
            const entryId = entry.target.id;
            const element = document.querySelector(`[data-key="${entryId}"]`);
            if (entry.isIntersecting && element) {
              // Add the "active" class
              // console.log("Intersected entry:", entryId, element);
              element.classList.add("active");
              // console.log("Added entry:", element);
            } else if (element) {
              element.classList.remove("active");
              // console.log("Removed entry:", element);
            }
          });
        },
        {
          rootMargin: "0px 0% -80% 0%", // Adjust this to change the "viewport"
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
    };

    setTimeout(() => setupObserver(), 100);
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
                    href={"#" + group.replace(/ /g, "-").toLowerCase()}
                    data-key={group.replace(/ /g, "-").toLowerCase()}
                    onClick={(e) =>
                      handleNavClick(e, group.replace(/ /g, "-").toLowerCase())
                    }
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
                            href={
                              "#" +
                              person.fName[0].toLowerCase() +
                              person.lName.toLowerCase()
                            }
                            data-key={
                              person.fName[0].toLowerCase() +
                              person.lName.toLowerCase()
                            }
                            onClick={(e) =>
                              handleNavClick(
                                e,
                                person.fName[0].toLowerCase() +
                                  person.lName.toLowerCase()
                              )
                            }
                          >
                            {person.fName + " " + person.lName}
                          </a>
                        </div>
                      ))}
                  </nav>
                </div>
              ))}
            </nav>
          </nav>
        </div>

        <div className="column content">
          {teamGroups.map((group, groupIndex) => (
            <>
              {" "}
              <div
                id={group.replace(/ /g, "-").toLowerCase()}
                className="scroll-spy-tracked content-group"
              >
                {group}
                <div className="content-container">
                  {teamLists
                    .filter((teamMember) => teamMember.group === group)
                    .map((person, personIndex) => (
                      <>
                        <span className="content-display">
                          <img
                            id={
                              person.fName[0].toLowerCase() +
                              person.lName.toLowerCase()
                            }
                            className="scroll-spy-tracked content-image"
                            src={person.imgLink}
                          />
                          <div className="content-member name">
                            {person.fName +
                              " " +
                              person.lName +
                              (person.suffix ? ", " + person.suffix : "")}
                          </div>
                          <div className="content-member title">
                            {person.title}
                          </div>
                        </span>
                      </>
                    ))}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default ScrollSpy;
