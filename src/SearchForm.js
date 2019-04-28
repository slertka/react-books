import React from "react";
import "./SearchForm.css";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      printTypeFilter: "all",
      bookTypeFilter: "none"
    };
  }

  handleSearchInputChange(keyword) {
    this.setState({
      keyword
    });
  }

  handlePrintTypeFilterChange(filter) {
    this.setState({
      printTypeFilter: filter
    });
  }

  handleBookTypeFilterChange(filter) {
    this.setState({
      bookTypeFilter: filter
    });
  }

  getBookResults(e) {
    e.preventDefault();
    const { keyword, printTypeFilter, bookTypeFilter } = this.state;
    const keywordQuery = keyword.includes(" ")
      ? keyword.replace(" ", "+")
      : keyword;
    let url = `https://www.googleapis.com/books/v1/volumes?q=${keywordQuery}&printType=${printTypeFilter}&key=AIzaSyDlS_vq-3OlNUERfFIWsv4P9QFT-pIcQUI`;

    if (!bookTypeFilter === "none") {
      url += `&filter=${bookTypeFilter}`;
    }

    fetch(url)
      .then(response => response.json())
      .then(data => this.props.updateBookResults(data));
  }

  render() {
    return (
      <form className="bookSearchForm" onSubmit={e => this.getBookResults(e)}>
        <label htmlFor="search">Search: </label>
        <input
          type="text"
          placeholder="Enter keyword, title, author, etc..."
          name="search"
          value={this.state.keyword}
          onChange={e => this.handleSearchInputChange(e.target.value)}
        />
        <input type="submit" />
        <div className="searchOptions">
          <label htmlFor="print-type">Print Type:</label>
          <select
            name="print-type"
            onChange={e => this.handlePrintTypeFilterChange(e.target.value)}
          >
            <option value="all">All</option>
            <option value="books">Book</option>
            <option value="magazines">Magazine</option>
          </select>
          <label htmlFor="book-type">Book Type:</label>
          <select
            name="book-type"
            onChange={e => this.handleBookTypeFilterChange(e.target.value)}
          >
            <option value="none">No Filter</option>
            <option value="full">Full</option>
            <option value="partial">Partial</option>
            <option value="free-ebooks">Free eBooks</option>
            <option value="paid-ebooks">Paid eBooks</option>
            <option value="ebooks">All eBooks</option>
          </select>
        </div>
      </form>
    );
  }
}

export default SearchForm;
