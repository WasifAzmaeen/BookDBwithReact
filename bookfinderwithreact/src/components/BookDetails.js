import React, { useEffect, useState } from "react";
import { getBookDetails } from "./../api/GoogleBooks";
import { Link } from "react-router-dom";

const BookDetails = (props) => {
  const [currentBook, setCurrentBook] = useState({});
  const [currentBookImage, setCurrentBookImage] = useState("");
  console.log(currentBook);
  useEffect(() => {
    getBookDetails(props.location.bookId, setCurrentBook, setCurrentBookImage);
  }, []);

  return (
    <div>
      <div className="row" style={{ marginLeft: "50%" }}>
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              {currentBookImage == undefined || null ? (
                <img
                  src="https://picsum.photos/300/600"
                  alt=""
                  style={{ width: "40", height: "60" }}
                />
              ) : (
                <img
                  src={currentBookImage}
                  alt=""
                  style={{ width: "40", height: "60" }}
                />
              )}
            </div>
            <div className="card-content">
              <b>{currentBook.title}</b>
            </div>
            <div className="card-content">
              <b>{currentBook.authors}</b>
            </div>
            <div className="card-action">
              <Link to="/">Go to Home Page!</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
