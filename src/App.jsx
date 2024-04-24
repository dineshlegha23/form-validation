import React, { useState } from "react";
import Input from "./Input";

const App = () => {
  const [data, setData] = useState({ name: "", email: "", password: "" });

  function handleInputChange(name, value) {
    setData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 max-w-52 mx-auto"
    >
      <Input
        type="text"
        name="name"
        label="Enter your name"
        value={data.name}
        onChange={handleInputChange}
        pattern={"^[a-zA-Z]+$"}
        error={"Name must not contain numbers"}
      />
      <Input
        type="email"
        name="email"
        label="Enter your email"
        value={data.email}
        onChange={handleInputChange}
      />
      <Input
        type="password"
        name="password"
        label="Enter your password"
        value={data.password}
        onChange={handleInputChange}
      />
      <button
        type="submit"
        className="bg-black w-fit text-white rounded-full px-8 py-1 mx-auto"
      >
        Submit
      </button>
    </form>
  );
};

export default App;

// import React, { useState } from "react";

// const App = () => {
//   const [data, setData] = useState({ name: "", email: "", password: "" });
//   const [error, setError] = useState({ name: "", email: "", password: "" });

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     for (let val in data) {
//       validate(val, data[val]);
//     }

//     for (let val in data) {
//       if (data[val].length < 1) {
//         return;
//       }
//     }

//     const err = Array.from(Object.values(error));

//     if (err.some((val) => val != "")) {
//       return;
//     }
//     console.log(data);
//   };

//   function handleInputChange(name, value) {
//     setError((prev) => ({ ...prev, [name]: "" }));
//     setData((prev) => ({ ...prev, [name]: value }));
//     validate(name, value);
//   }

//   const validate = (name, value) => {
//     switch (name) {
//       case "name": {
//         if (value.length <= 3 || value.length >= 9) {
//           setError((prev) => ({ ...prev, [name]: "Name must be b/w (4-8)" }));
//           return;
//         }
//         break;
//       }
//       case "email": {
//         if (value < 4) {
//           setError((prev) => ({
//             ...prev,
//             [name]: "Email must be atleast 5 chars",
//           }));
//           return;
//         }

//         if (value.length > 20) {
//           setError((prev) => ({
//             ...prev,
//             [name]: "Email must not be greater than 20",
//           }));
//           return;
//         }
//         if (value.includes("dine")) {
//           setError((prev) => ({
//             ...prev,
//             [name]: "Email must not contain dine",
//           }));
//           return;
//         }
//         break;
//       }

//       case "password":
//         {
//           if (value.length < 6) {
//             setError((prev) => ({
//               ...prev,
//               [name]: "Password must be atleast 6 chars",
//             }));
//             return;
//           }
//         }
//         break;
//     }

//     // if (name === "name") {
//     //   if (value.length <= 3 || value.length >= 9) {
//     //     setError((prev) => ({ ...prev, [name]: "Name must be b/w (4-8)" }));
//     //     return;
//     //   }
//     // }
//     // if (name === "email") {
//     //   if (value < 4) {
//     //     setError((prev) => ({
//     //       ...prev,
//     //       [name]: "Email must be atleast 5 chars",
//     //     }));
//     //     return;
//     //   }

//     //   if (value.length > 20) {
//     //     setError((prev) => ({
//     //       ...prev,
//     //       [name]: "Email must not be greater than 20",
//     //     }));
//     //     return;
//     //   }
//     //   if (value.includes("dine")) {
//     //     setError((prev) => ({
//     //       ...prev,
//     //       [name]: "Email must not contain dine",
//     //     }));
//     //     return;
//     //   }
//     // }
//     // if (name === "password") {
//     //   if (value.length < 6) {
//     //     setError((prev) => ({
//     //       ...prev,
//     //       [name]: "Password must be atleast 6 chars",
//     //     }));
//     //     return;
//     //   }
//     // }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit} className="flex flex-col max-w-64 mx-auto">
//         <label htmlFor="name">Name</label>
//         <input
//           value={data.name}
//           onChange={(e) => handleInputChange("name", e.target.value)}
//           className="border-black border-[1px]"
//           type="text"
//           name="name"
//         />
//         <p className="text-red-500">{error.name}</p>
//         <label htmlFor="email">Email</label>
//         <input
//           value={data.email}
//           onChange={(e) => handleInputChange("email", e.target.value)}
//           className="border-black border-[1px]"
//           type="email"
//           name="email"
//         />
//         <p className="text-red-500">{error.email}</p>
//         <label htmlFor="password">Password</label>
//         <input
//           value={data.password}
//           onChange={(e) => handleInputChange("password", e.target.value)}
//           className="border-black border-[1px]"
//           type="text"
//           name="password"
//         />
//         <p className="text-red-500">{error.password}</p>
//         <button
//           type="submit"
//           className="bg-red-300 rounded-full text-white w-fit mx-auto px-5 py-1 my-5"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default App;
