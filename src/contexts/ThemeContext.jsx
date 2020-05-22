import React, { createContext, Component } from "react";

export const ThemeContext = React.createContext();

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: false,
    light: {
      name: "Light ",
      text: "text-dark",
      bg: "bg-danger",
      bgsec: "bg-light rounded-0 text-dark",
    },
    dark: {
      name: "Dark ",
      text: "text-light",
      bg: "bg-dark",
      bgsec: "bg-secondary rounded-0 text-light",
    },
  };

  toggleTheme = () => {
    this.setState((prevState, props) => {
      return { isLightTheme: !prevState.isLightTheme };
    });
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{ themeChange: this.toggleTheme, ...this.state }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
export default ThemeContextProvider;

//{setTimeout(()=>
