import React from "react";

const ListGroup = () => {
  const cities = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "San Antonio",
    "San Francisco",
  ];
  //Event Handler
  const handleClick = (event: React.MouseEvent) => {
    console.log(event);
  };

  return (
    <>
      <h1>List Group</h1>
      {cities.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {cities.map((city) => (
          <li key={city} className="list-group-item" onClick={handleClick}>
            {city}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
