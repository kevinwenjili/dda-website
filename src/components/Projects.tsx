import { ReactNode } from "react";

interface Props {
    result: ReactNode;
}

const Projects = ({ result }:Props) => {
    return (
      <>
        <section className="card-container">{result}</section>
      </>
    );
  };
  
  export default Projects;