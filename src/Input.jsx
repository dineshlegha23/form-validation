import React, { useState } from "react";

const Input = ({ name, label, type, value, onChange, error, pattern }) => {
  const [touched, setTouched] = useState(false);
  const [blur, setBlur] = useState(false);

  console.log(touched, blur);

  return (
    <div className="flex flex-col">
      <label htmlFor={name}>{label}</label>
      <input
        onBlur={() => setBlur(true)}
        onFocus={() => setTouched(true)}
        type={type}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        pattern={pattern}
        className="border-[1px] border-black pl-1"
      />
      <p className="text-red-500">{error}</p>
    </div>
  );
};

export default Input;
