import React from "react";

export function InputForm({
  handleChange,
  config: {  name, placeholder, minLength, maxLength, type },
  value,
}) {
  return (
    <>
      <label>
        {name}
        <input
          style={{ width: 280 }}
          name={name}
          placeholder={placeholder}
          minLength={minLength}
          maxLength={maxLength}
          type={type}
          value={value}
          onChange={handleChange}
        />
      </label>
    </>
  );
}

//---------------------------------------------------

// import config from "./config.json";
// const {
//   inputName: { name, placeholder, minLength, maxLength, type },
// } = config;
// const { inputPassword } = config;

// export function InputForm({ handleChange, config={config:{inputName}}}) {

// export function InputForm({ handleChange }) {
//   return (
//     <>
//       <input
//         style={{ width: 280 }}
//         name={name}
//         placeholder={placeholder}
//         minLength={minLength}
//         maxLength={maxLength}
//         type={type}
//         // value={nickName}
//         onChange={handleChange}
//       />
//       <input
//         style={{ width: 280 }}
//         name={inputPassword.name}
//         placeholder={inputPassword.placeholder}
//         minLength={inputPassword.minLength}
//         maxLength={inputPassword.maxLength}
//         type={inputPassword.type}
//         name={inputPassword.name}
//         // value={inputPassword.nickName}

//         onChange={handleChange}
//       />
//     </>
//   );
// }
