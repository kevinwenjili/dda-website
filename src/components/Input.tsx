type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

interface InputProps {
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    name?: string;
    color?: RGB | RGBA | HEX;
    title?: string;
}

const Input = ({ handleChange, value, title, name, color }: InputProps) => {
    return (
      <label className="filter-label-container">
        <input onChange={handleChange} type="radio" value={value} name={name} />
        <span className="filter-check" style={{ backgroundColor: color }}></span>
        <span>{title}</span>
      </label>
    );
  };
  
  export default Input;