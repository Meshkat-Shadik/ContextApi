import React, { Component,useState,useContext } from "react";
import ThemeContextProvider, { ThemeContext } from "../contexts/ThemeContext";

// class ThemeToggle extends Component {
//   static contextType = ThemeContext;

//   render() {
//     return (
//       <ThemeContext.Consumer>
//         {(context) => {
//           const { themeChange,isLightTheme } = context;
//           return (
//             <div>
//               <button
//                 type="button"
//                   className="btn btn-warning mx-auto d-block"
//                 onClick={themeChange}
//               >
//                 {isLightTheme?'Light':"Dark"} Theme Running
//               </button>
//             </div>
//           );
//         }}
//       </ThemeContext.Consumer>
//     );
//   }
// }


const ThemeToggle = ()=> {

  const { themeChange,isLightTheme } = useContext(ThemeContext);

  return (
    <div>
    <button
      type="button"
        className="btn btn-warning mx-auto d-block"
      onClick={themeChange}
    >
      {isLightTheme?'Light':"Dark"} Theme Running
    </button>
  </div>
  )
}


export default ThemeToggle;
