import { Fragment, useState } from "react";
import { MouseEvent } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // State Hook
  //   const arr = useState(-1)
  //   arr[0] // variable (selectedIndex)
  //   arr[1] // updater function
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // Example of a name state
  //   const [name, setName] = useState('');

  const getList = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  };

  // Event Handeler
  const handleClick = (event: React.MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>
      {getList()}
      {/* Alternative methods: */}
      {/* {items.length === 0 ? <p>No item found</p> : null} */}
      {/* {items.length === 0 && <p>No item found</p>} */}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
