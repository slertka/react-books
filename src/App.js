import React from "react";
import "./App.css";

import SearchForm from "./SearchForm";
import BookResults from "./BookResults";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookResults: []
    };
  }

  updateBookResults(books) {
    this.setState({
      bookResults: books.items
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Google Book Search</h1>
        <SearchForm
          updateBookResults={books => this.updateBookResults(books)}
        />
        <BookResults bookResults={this.state.bookResults} />
      </div>
    );
  }
}

export default App;
