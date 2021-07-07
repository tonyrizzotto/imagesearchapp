import React from 'react';

class SearchBar extends React.Component {
  //  Callback function that runs any time the input is change. Name specific
  // onInputChange(e) {
  //   console.log(e.target.value);
  // }

  state = { term: '' };

  // Prevent default form action. Arrow functions will automatically bind the keyward 'this' to the component. Otherwise it leads to 'undefined'
  onFormSubmit = (e) => {
    e.preventDefault();

    // This is pulled in as a property from App.js
    this.props.onSubmit(this.state.term);
  };
  v;
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            {/* Turns the input into a controlled component */}
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
