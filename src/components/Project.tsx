import { ReactNode } from "react";

interface Props {
    result: ReactNode;
}

const Project = ({ result }:Props) => {
    return (
      <>
        <section className="card-container">{result}</section>
      </>
    );
  };
  
  export default Project;