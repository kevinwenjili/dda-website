import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ScrollSpy.css";
import teamLists from "../../../public/db/teamList";
import HandleNavClick from "../HandleNavClick";
import Modal from "../Modal/Modal";

interface Props {
  fName: string;
  lName: string;
  imgLink?: string;
  refLink?: string;
  suffix?: string | null;
  altSuffix?: string | null;
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

  const [showModal, setShowModal] = useState(false);
  const [modalPerson, setModalPerson] = useState<Props | null>(null);

  const handleShow = (person: Props) => {
    setModalPerson(person);
    setShowModal(true);
  };
  const handleHide = () => setShowModal(false);

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
    <div className="team-container">
      <div className="row">
        <div className="column sidebar">
          <div className="page-title page-title-modified">Team</div>
          <nav
            id="team-directory"
            className="navbar flex-column align-items-stretch"
          >
            <nav className="flex-column">
              {teamGroups.map((group, groupIndex) => (
                <div key={"sidebar-group-" + groupIndex}>
                  <a
                    className="sidebar-link sidebar-group"
                    href={"#" + group.replace(/ /g, "-").toLowerCase()}
                    data-key={group.replace(/ /g, "-").toLowerCase()}
                    onClick={(e) =>
                      HandleNavClick({
                        event: e,
                        targetId: group.replace(/ /g, "-").toLowerCase(),
                        offset: 30,
                        navigate: navigate,
                      })
                    }
                  >
                    {group}
                  </a>
                  <nav className="flex-column">
                    {teamLists
                      .filter((teamMember) => teamMember.group === group)
                      .map((person, personIndex) => (
                        <div key={"sidebar-person-" + personIndex}>
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
                              HandleNavClick({
                                event: e,
                                targetId:
                                  person.fName[0].toLowerCase() +
                                  person.lName.toLowerCase(),
                                offset: 30,
                                navigate: navigate,
                              })
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
            <div key={"content-group-" + groupIndex}>
              <div
                id={group.replace(/ /g, "-").toLowerCase()}
                className="scroll-spy-tracked content-group"
              >
                {group}
                <div className="content-container">
                  {teamLists
                    .filter((teamMember) => teamMember.group === group)
                    .map((person, personIndex) => (
                      <div key={"content-person-" + personIndex}>
                        <span className="content-display">
                          <a
                            className="people-card"
                            onClick={() => handleShow(person)}
                          >
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
                          </a>
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showModal && (
        <Modal
          showModal={showModal}
          handleHide={handleHide}
          person={modalPerson}
        />
      )}
    </div>
  );
};

export default ScrollSpy;
