import React from "react";

const Input = ({ id, name, className, type, placeholder, onChange, value }) => {
  return (
    <input
      id={id}
      name={name}
      className={className}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
