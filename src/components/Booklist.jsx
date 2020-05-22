import React, { Component, useContext } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { ThemeContext } from "../contexts/ThemeContext";
import { BookContext } from "../contexts/BookContext";

// class Booklist extends Component {
//    static contextType = ThemeContext;
//   render() {
//      const {isLightTheme,light,dark} = this.context;
//      const theme = isLightTheme?light:dark;

//     return (
//      // <ThemeContext.Consumer>
//        // {(context) => {
//         //  const { isLightTheme, light, dark } = context;
//          // const theme = isLightTheme ? light : dark;

//           // console.log('Booklist',theme.bgsec, isLightTheme)
//   //        return (
//             <div>
//               <ListGroup>
//                 <ListGroupItem className={theme.bgsec}>
//                   হাজার বছর ধরে
//                 </ListGroupItem>
//                 <ListGroupItem className={theme.bgsec}>
//                   শঙ্খনীল কারাগার
//                 </ListGroupItem>
//                 <ListGroupItem className={theme.bgsec}>
//                   আগুনের পরশমণি
//                 </ListGroupItem>
//                 <ListGroupItem className={theme.bgsec}>
//                   বরফ গলা নদী
//                 </ListGroupItem>
//                 <ListGroupItem className={theme.bgsec}>সেই সময়</ListGroupItem>
//               </ListGroup>
//             </div>
//     //      );
//       //  }}
//       // </ThemeContext.Consumer>
//     );
//   }
// }

const Booklist = () => {
  const {isLightTheme,light,dark} = useContext(ThemeContext);
  const {books} = useContext(BookContext);
  const theme = isLightTheme?light:dark;
  return (
    <div>
      <ListGroup>

        {books.map(book=>{
          return(
            <ListGroupItem className={theme.bgsec} key={book.id}>{book.title}</ListGroupItem>
          )
        })}
      </ListGroup>
    </div>
  );
};

export default Booklist;
