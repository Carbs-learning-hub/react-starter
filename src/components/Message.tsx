import React from "react";

const Message = () => {
  const name = "Jan";
  return (
    <div>
      <h1>Hello {name ? name : "World"}</h1>
    </div>
  );
};

export default Message;
