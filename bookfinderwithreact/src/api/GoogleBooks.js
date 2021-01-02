import axios from "axios";
import {} from "module";

const GoogleBooks = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/",
});

const getBooksbyTerm = (SearchTerm, setBooks, page_number, setTotalPages) => {
  GoogleBooks.get("/volumes/", {
    params: {
      q: SearchTerm,
      startIndex: page_number,
      maxResults: 20,
    },
  }).then((response) => {
    console.log(response);
    let maxData = 0;
    if (response.data.totalItems > maxData) {
      maxData = response.data.totalItems;
    }
    setBooks(response.data.items);
    setTotalPages(Math.ceil(maxData / 18));
  });
};

const getBookDetails = (bookID, setCurrentBook, setCurrentBookImage) => {
  GoogleBooks.get("/volumes/" + bookID, {}).then((response) => {
    setCurrentBook(response.data.volumeInfo);
    setCurrentBookImage(response.data.volumeInfo.imageLinks.thumbnail);
  });
};

export { getBooksbyTerm, getBookDetails };
