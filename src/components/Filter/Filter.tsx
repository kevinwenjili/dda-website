import FilterByServices from "./FilterByServices";
import "./ProjectFilter.css";

interface Props {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Filter = ({ handleChange }: Props) => {
  return (
    <>
      <section className="filter-container">
        <FilterByServices handleChange={handleChange} />
      </section>
    </>
  );
};

export default Filter;
