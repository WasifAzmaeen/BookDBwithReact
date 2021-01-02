import React from "react";

const Book = (props) => {
  const BookTitle = props.data.volumeInfo.title;
  const BookAuthor = props.data.volumeInfo.authors;
  const ImageSource = props.data.volumeInfo.imageLinks;
  return (
    <div>
      <div className="col s12 m4">
        <div className="card">
          <div className="card-image">
            {ImageSource === undefined ? (
              <img
                src="https://picsum.photos/200/300"
                alt=""
                style={{ width: "100", height: "200" }}
              />
            ) : (
              <img
                src={ImageSource.thumbnail}
                style={{ width: "100", height: "200" }}
                alt=""
              />
            )}
          </div>
          <div style={{ backgroundColor: "black" }}>
            <span className="card-title" style={{ color: "white" }}>
              {BookTitle}
            </span>
          </div>
          <div style={{ backgroundColor: "blue" }}>
            <span
              className="card-title"
              style={{ fontSize: 20, color: "white" }}
            >
              {BookAuthor}
            </span>
          </div>
          <div className="card-action">
            <a href="#!" style={{ color: "black" }}>
              See More!!!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
