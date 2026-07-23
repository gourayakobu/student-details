import React, { useState } from "react";

const Forms = () => {
  const [input, setInput] = useState("");
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = () => {
    setName(input);
  };

  return (
    <div className="form-container">
      <h1>Hello, {name}</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={input}
        onChange={handleChange}
      />

      <br />
      <br />

      <button className="button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Forms;