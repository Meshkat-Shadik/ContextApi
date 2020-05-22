import React,{createContext,useState} from 'react'

export const BookContext = createContext();

const BookContextProvider= (props)=> {

    const[books,setBooks] =  useState([
        {title:'হাজার বছর ধরে',id:1},
        {title:'শঙ্খনীল কারাগার',id:2},
        {title:'আগুনের পরশমণি',id:3},
        {title:'বরফ গলা নদী',id:4},
        {title:'সেই সময়',id:5}
    ])

    return (
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
    )
}
export default BookContextProvider