import { useState } from "react";

import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Input from "./components/Input";

import Card from "./components/Card";
import Filter from "./components/Filter";
import Search from "./components/Search";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import projectLists from "./db/projectList";
import "./components/ProjectCard.css";

function App() {
  // let items = [
  //   "Item 1",
  //   "Item 2",
  //   "Item 3",
  //   "Item 4",
  //   "Item 5",
  //   "Item 6",
  //   "Item 7",
  //   "Item 8",
  //   "Item 9",
  //   "Item 10",
  //   "Item 11",
  // ];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

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
      <Search query={query} handleInputChange={handleInputChange}>Search by Project</Search>
      <Filter handleChange={handleChange} />
      <Projects result={result} />
    </>
  );
}

export default App;

// import { useState } from "react";

// import Navigation from "./Navigation/Nav";
// import Products from "./Products/Products";
// import products from "./db/data";
// import Recommended from "./Recommended/Recommended";
// import Sidebar from "./Sidebar/Sidebar";
// import Card from "./components/Card";
// import "./index.css";

// function App() {
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   // ----------- Input Filter -----------
//   const [query, setQuery] = useState("");

//   const handleInputChange = (event) => {
//     setQuery(event.target.value);
//   };

//   const filteredItems = products.filter(
//     (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
//   );

//   // ----------- Radio Filtering -----------
//   const handleChange = (event) => {
//     setSelectedCategory(event.target.value);
//   };

//   // ------------ Button Filtering -----------
//   const handleClick = (event) => {
//     setSelectedCategory(event.target.value);
//   };

//   function filteredData(products, selected, query) {
//     let filteredProducts = products;

//     // Filtering Input Items
//     if (query) {
//       filteredProducts = filteredItems;
//     }

//     // Applying selected filter
//     if (selected) {
//       filteredProducts = filteredProducts.filter(
//         ({ category, color, company, newPrice, title }) =>
//           category === selected ||
//           color === selected ||
//           company === selected ||
//           newPrice === selected ||
//           title === selected
//       );
//     }

//     return filteredProducts.map(
//       ({ img, title, star, reviews, prevPrice, newPrice }) => (
//         <Card
//           key={Math.random()}
//           img={img}
//           title={title}
//           star={star}
//           reviews={reviews}
//           prevPrice={prevPrice}
//           newPrice={newPrice}
//         />
//       )
//     );
//   }

//   const result = filteredData(products, selectedCategory, query);

//   return (
//     <>
//       <Sidebar handleChange={handleChange} />
//       <Navigation query={query} handleInputChange={handleInputChange} />
//       <Recommended handleClick={handleClick} />
//       <Products result={result} />
//     </>
//   );
// }

// export default App;

/* <div className="row row-cols-1 row-cols-md-3 g-2">
  <div className="col">
    <Card projectTitle="Test Project #1">Toronto, Ontario</Card>
  </div>
  <div className="col">
    <Card projectTitle="Test Project #2">Toronto, Ontario</Card>
  </div>
  <div className="col">
    <Card projectTitle="Test Project #3">Toronto, Ontario</Card>
  </div>
  <div className="col">
    <Card projectTitle="Test Project #4">Toronto, Ontario</Card>
  </div>
</div>; */
