import { useState } from "react";
import React from "react";

import Card from "../Card";
import Filter from "../Filter";
import Search from "../Search";
import Project from "../Project";
import Banner from "../Banner/Banner";
import projectLists from "../../db/projectList";
import "../ProjectCard.css";

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Search Filtger
  const [query, setQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const filteredItems = projectLists.filter(
    (projectLists) =>
      projectLists.projectTitle.toLowerCase().indexOf(query.toLowerCase()) !==
      -1
  );

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
      ({ img, refLink, projectTitle, city, province, projectType }) => (
        <Card
          key={Math.random()}
          img={img}
          refLink={refLink}
          projectTitle={projectTitle}
          city={city}
          province={province}
          projectType={projectType}
        />
      )
    );
  }

  const result = filteredData(projectLists, selectedCategory, query);

  return (
    <>
      <div className="navbar-spacer">&nbsp;</div>
      <Banner bannerStyle="alt"/>
      <Search query={query} handleInputChange={handleInputChange}>
        Search by Project
      </Search>
      <Filter handleChange={handleChange} />
      <Project result={result} />
    </>
  );
}

export default Projects;
