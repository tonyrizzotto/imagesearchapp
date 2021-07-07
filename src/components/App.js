import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  // Initialize state
  state = { images: [] };

  // To use Async/Await - place async in front of the method name and find whatever is returning and place await in front of it. You can assign that data a variable, like response, and use that variable as needed.
  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: {
        query: term,
      },
    });

    this.setState({ images: response.data.results });
  };

  /**Below is an alternative way to handle API requests utilizing .then */
  // onSearchSubmit(term) {
  //   axios
  //     .get('https://api.unsplash.com/search/photos', {
  //       params: {
  //         query: term,
  //       },
  //       headers: {
  //         Authorization:
  //           'Client-ID PhOGE0noKNZoLD5m3fdYobu_7n7BHpHUC7ksTFUG6gU',
  //       },
  //     })
  //     // axios will return a promise. .then is used to decide what to do after the API request is made.
  //     .then((response) => {
  //       console.log(response.data.results);
  //     });
  // }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        {/* the prop 'onSubmit' is passed down to the SearchBar Component */}
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
