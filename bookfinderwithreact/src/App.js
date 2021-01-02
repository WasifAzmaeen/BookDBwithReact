import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";
import { getBooksbyTerm } from "./api/GoogleBooks";
import Pagination from "./components/Pagination";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handleChange = (event) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await getBooksbyTerm(searchTerm, setBooks, currentPage, setTotalPages);
  };

  const nextPage = async (page_number) => {
    let startIndex = 20 * (page_number - 1);
    setCurrentPage(page_number);
    await getBooksbyTerm(searchTerm, setBooks, startIndex, setTotalPages);
  };

  return (
    <div>
      <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
      <BookList books={books} />
      {totalPages > 1 ? (
        <Pagination
          nextPage={nextPage}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
