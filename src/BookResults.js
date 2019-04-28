import React from "react";
import "./BookResults.css";

class BookResults extends React.Component {
  static defaultProps = {
    bookResults: []
  };

  render() {
    const results = this.props.bookResults.map((book, index) => {
      const author = book.volumeInfo.authors
        ? `Author: ${book.volumeInfo.authors.join(", ")}`
        : "";
      return (
        <li className="bookResult" key={index}>
          <h2 className="bookResult__title">
            <a href={book.volumeInfo.infoLink}>{book.volumeInfo.title}</a>
          </h2>
          <img
            src={book.volumeInfo.imageLinks.thumbnail}
            alt="bookResult thumbnail image"
          />
          <p className="bookResult__author">{author}</p>
          <p className="bookResult__subtitle">{book.volumeInfo.subtitle}</p>
        </li>
      );
    });

    return (
      <div className="bookResults">
        <ul> {results}</ul>
      </div>
    );
  }
}

export default BookResults;
