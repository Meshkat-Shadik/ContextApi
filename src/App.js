import React from "react";
import MyNavbar from "./components/myNavbar";
import Booklist from "./components/Booklist";
import ThemeContextProvider from "./contexts/ThemeContext";
import ThemeToggle from './components/themeToggle'
import AuthContextProvider from './contexts/AuthContext'
import BookContextProvider from "./contexts/BookContext";


  class App extends React.Component {

    render() {
      return (
        <div className="App">
          
          <ThemeContextProvider>
            <AuthContextProvider>
              <MyNavbar/>
                <BookContextProvider>
                  <Booklist/>
                </BookContextProvider>
              <ThemeToggle/>
            </AuthContextProvider>
          </ThemeContextProvider>
        </div>
      );
    }
    }
  
  

export default App;
