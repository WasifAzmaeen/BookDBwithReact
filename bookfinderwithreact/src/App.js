import React, { useState } from "react";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";
import { getBooksbyTerm } from "./api/GoogleBooks";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);

  const handleChange = (event) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await getBooksbyTerm(searchTerm, setBooks);
  };

  return (
    <div>
      <NavBar />
      <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
      <BookList books={books} />
    </div>
  );
};

export default App;
