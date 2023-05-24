import React from "react";

const Input = ({ id, name, className, type, placeholder, onChange, value }) => {
  console.log("hello just checking");
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
