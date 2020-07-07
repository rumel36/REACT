import React from "react";

const Input = ({ name, label, error, value, onChange }) => {
  //we can destrsture ( props) and use {name } instead. Same as label, value and onChange
  //These are the interface of our input compoment
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        name={name}
        autoFocus
        id={name}
        type="text"
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  ); //error is true then expression is returned
};

export default Input;
