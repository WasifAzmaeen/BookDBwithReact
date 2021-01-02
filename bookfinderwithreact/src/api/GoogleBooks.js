import axios from "axios";
import {} from "module";

const GoogleBooks = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/",
});

const getBooksbyTerm = (SearchTerm, setBooks) => {
  GoogleBooks.get("/volumes/", {
    params: {
      q: SearchTerm,
    },
  }).then((response) => {
    console.log(response);
    setBooks(response.data.items);
  });
};

export { getBooksbyTerm };
