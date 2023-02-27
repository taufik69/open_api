import React from "react";

const Input = ({ id, name, type, placeholder, onChange, value }) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
