

interface SearchProps {
  children?: string;
  handleInputChange: React.ChangeEventHandler<HTMLInputElement>;
  query: string;
}

const Search = ({ children, handleInputChange, query }: SearchProps) => {
  return (
    <nav>
      <div className="search-container">
        <div className="display-option">
          <input
            className="search-input"
            type="text"
            onChange={handleInputChange}
            value={query}
            placeholder={children}
          />
        </div>
        {/* <div className="display-option">
          <a className="search-btn" href="#">
            Search
          </a>
        </div> */}
      </div>
    </nav>
  );
};

export default Search;
