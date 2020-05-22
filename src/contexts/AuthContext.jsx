import React, { Component, createContext } from "react";

export const AuthContext = React.createContext();

class AuthContextProvider extends Component {
  state = {
    isAuthenticated: false,
  };

  toggleAuth = () => {
    this.setState({ isAuthenticated: !this.state.isAuthenticated });
  };
  render() {
    return (
      <AuthContext.Provider
        value={{ ...this.state, toggleFunc: this.toggleAuth }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
export default AuthContextProvider;
