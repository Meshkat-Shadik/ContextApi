import React, { Component,useContext,useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import { ThemeContext } from "../contexts/ThemeContext";
import ThemeToggle from "./themeToggle";
import { AuthContext } from "../contexts/AuthContext";

// class myNavbar extends Component {
//   //static contextType = ThemeContext;    (for previous example)

//   state = {
//     isOpen: false,
//   };

//   toggle = () => {
//     this.setState({ isOpen: !this.state.isOpen });
//   };

//   render() {
//     //console.log((this.context.isLightTheme))

//     // const { isLightTheme, light, dark } = this.context;    (for previous)
//     // const theme = isLightTheme ? light : dark;
//     //   console.log(theme)   (for previous)
//     return (
//       <AuthContext.Consumer>
//         {(authContext) => (
//           <ThemeContext.Consumer>
//             {(themeContext) => {
//               const { isLightTheme, light, dark } = themeContext;
//               const { isAuthenticated, toggleFunc } = authContext;
//               const theme = isLightTheme ? light : dark;

//               const session = isAuthenticated ? "Logged In" : "Logged Out";
//               // this.props.grabText(theme.name);

//               console.log(session);

//               return (
//                 <div className="text-center">
//                   <Navbar className={theme.bg} expand="md">
//                     <NavbarBrand href="/" className={theme.text}>
//                       বই তালিকা
//                     </NavbarBrand>
//                     <NavbarToggler
//                       className="navbar-toggler"
//                       onClick={this.toggle}
//                     />
//                     <Collapse isOpen={this.state.isOpen} navbar>
//                       <Nav className="mr-auto" navbar>
//                         <NavItem>
//                           <NavLink href="" className={theme.text}>
//                             হোম
//                           </NavLink>
//                         </NavItem>
//                         <NavItem>
//                           <NavLink href="" className={theme.text}>
//                             এবাউট
//                           </NavLink>
//                         </NavItem>
//                         <NavItem>
//                           <NavLink href="" className={theme.text}>
//                             কন্ট্যাক্ট
//                           </NavLink>
//                         </NavItem>
//                       </Nav>
//                       <NavbarText className={theme.text}>
//                         <button
//                           type="button"
//                           className="btn btn-outline-warning mx-auto d-block"
//                           onClick={toggleFunc}
//                         >
//                           {session}
//                         </button>
//                       </NavbarText>
//                     </Collapse>
//                   </Navbar>
//                 </div>
//               );
//             }}
//           </ThemeContext.Consumer>
//         )}
//       </AuthContext.Consumer>
//     );
//   }
// }

const MyNavbar = () =>
{
  const [isOpen,setIsOpen] = useState(false);

  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { isAuthenticated, toggleFunc } = useContext(AuthContext);
  const theme = isLightTheme ? light : dark;
  const session = isAuthenticated ? "Logged In" : "Logged Out";

  const toggle = ()=>
  {
    setIsOpen(isOpen(true));
  }
  return(
    <div className="text-center">
    <Navbar className={theme.bg} expand="md">
      <NavbarBrand href="/" className={theme.text}>
        বই তালিকা
      </NavbarBrand>
      <NavbarToggler
        className="navbar-toggler"
        onClick={toggle}
      />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="" className={theme.text}>
              হোম
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="" className={theme.text}>
              এবাউট
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="" className={theme.text}>
              কন্ট্যাক্ট
            </NavLink>
          </NavItem>
        </Nav>
        <NavbarText className={theme.text}>
          <button
            type="button"
            className="btn btn-outline-warning mx-auto d-block"
            onClick={toggleFunc}
          >
            {session}
          </button>
        </NavbarText>
      </Collapse>
    </Navbar>
  </div>
  );
}


export default MyNavbar;
