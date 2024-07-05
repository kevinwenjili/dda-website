import { useState } from "react";
import React from "react";

import Card from "../Card/Card";
import Filter from "../Filter";
import Search from "../Search/Search";
import Project from "../Card/Project";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import projectLists from "../../../public/db/projectList";
import "../Card/ProjectCard.css";
import "../Search/ProjectSearch.css";

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Search Filter
  const [query, setQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const filteredItems = projectLists.filter((projectLists) => {
    // projectLists.projectTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
    const projectTitleMatch = projectLists.projectTitle
      .toLowerCase()
      .includes(query.toLowerCase());
    const cityMatch = projectLists.city
      .toLowerCase()
      .includes(query.toLowerCase());
    const clientMatch = projectLists.client
      .toLowerCase()
      .includes(query.toLowerCase());
    return projectTitleMatch || cityMatch || clientMatch;
  });

  // Radio Filtering
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(event.target.value);
  };

  // Filter Function
  function filteredData(
    projects: {
      img: string;
      refLink: string;
      projectTitle: string;
      city: string;
      province: string;
      client: string;
      projectType: string;
    }[],
    selected: string | null,
    query: string
  ) {
    let filteredProjects = projects;

    // Filtering Input Items
    if (query) {
      filteredProjects = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProjects = filteredProjects.filter(
        ({ projectTitle, city, projectType }) =>
          projectTitle === selected ||
          city === selected ||
          projectType === selected
      );
    }

    return filteredProjects.map(
      ({ img, refLink, projectTitle, city, province, client, projectType }) => (
        <Card
          key={Math.random()}
          img={img}
          refLink={refLink}
          projectTitle={projectTitle}
          city={city}
          province={province}
          client={client}
          projectType={projectType}
        />
      )
    );
  }

  const result = filteredData(projectLists, selectedCategory, query);

  return (
    <>
      <title>Projects | DDA</title>
      <Banner bannerStyle="alt" />
      <div className="navbar-spacer">&nbsp;</div>
      {/* <div className="page-container"> */}
      <div className="page-title">Projects</div>
      <Search query={query} handleInputChange={handleInputChange}>
        Search
      </Search>
      <Filter handleChange={handleChange} />
      <Project result={result} />
      {/* </div> */}
      <Footer />
    </>
  );
}

export default Projects;
