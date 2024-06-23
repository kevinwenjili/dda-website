import Input from "./Input";

interface Props {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FilterByServices = ({ handleChange }: Props) => {
  let services = ["Design", "Evaluation", "Inspection", "Construction", "Specialty", "Emergency"];

  return (
    <>
      <div className="filter-title">Project Type:</div>
      <div className="filter-options">
        <label className="filter-label-container">
          <input onChange={handleChange} type="radio" value="" name="test"/>
          <span className="filter-check"></span>
          <span>All Projects</span>
        </label>
        {services.map((service, index) => (
          <Input
            handleChange={handleChange}
            value={service.toLowerCase()}
            title={service}
            name="test"
            key={index}
          />
        ))}
      </div>
    </>
  );
};

export default FilterByServices;

/* <Input
handleChange={handleChange}
value="sneakers"
title="Sneakers"
name="test"
/> */
