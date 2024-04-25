import React, { useState } from "react";
import "./input.css";

const Input = ({ name, label, type, value, onChange, error, pattern }) => {
  const [touched, setTouched] = useState(false);
  return (
    <div className="flex flex-col div-container" data-author="hello">
      <label htmlFor={name}>{label}</label>
      <input
        required
        onBlur={() => setTouched(true)}
        focused={touched.toString()}
        type={type}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        pattern={pattern}
        className="border-[1px] border-black pl-1"
      />
      <p className="msg text-red-500">{error}</p>
    </div>
  );
};

export default Input;
