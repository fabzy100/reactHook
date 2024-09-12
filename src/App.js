import React, { Component } from 'react';
import Filter from './components/Filter'
import MovieList from './components/MovieList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          title: "Inception",
          description: "A thief who steals corporate secrets through dream-sharing technology.",
          posterURL: "https://example.com/inception.jpg",
          rating: 8.8
        },
        {
          title: "The Matrix",
          description: "A computer hacker learns about the true nature of reality and his role in the war against its controllers.",
          posterURL: "https://example.com/matrix.jpg",
          rating: 8.7
        },
        {
          title: "Interstellar",
          description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
          posterURL: "https://example.com/interstellar.jpg",
          rating: 8.6
        }
      ],
      filterTitle: '',
      filterRating: '',
      newMovie: {
        title: '',
        description: '',
        posterURL: '',
        rating: ''
      }
    };
  }

  // Filter methods
  handleTitleChange = (value) => {
    this.setState({ filterTitle: value });
  };

  handleRatingChange = (value) => {
    this.setState({ filterRating: value });
  };

  // Add new movie method
  handleAddMovie = () => {
    const { newMovie, movies } = this.state;
    this.setState({
      movies: [...movies, newMovie],
      newMovie: { title: '', description: '', posterURL: '', rating: '' } // reset input fields
    });
  };

  // Handle new movie input change
  handleNewMovieChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      newMovie: { ...this.state.newMovie, [name]: value }
    });
  };

  render() {
    const { movies, filterTitle, filterRating, newMovie } = this.state;
    const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      (filterRating === '' || movie.rating >= parseFloat(filterRating))
    );

    return (
      <div className="App">
        <h1>Movie List App</h1>
        <Filter
          filterTitle={filterTitle}
          filterRating={filterRating}
          onTitleChange={this.handleTitleChange}
          onRatingChange={this.handleRatingChange}
        />
        <MovieList movies={filteredMovies} />

        {/* Add new movie form */}
        <div style={{ marginTop: '20px' }}>
          <h2>Add a New Movie</h2>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newMovie.title}
            onChange={this.handleNewMovieChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={newMovie.description}
            onChange={this.handleNewMovieChange}
          />
          <input
            type="text"
            name="posterURL"
            placeholder="Poster URL"
            value={newMovie.posterURL}
            onChange={this.handleNewMovieChange}
          />
          <input
            type="number"
            name="rating"
            placeholder="Rating"
            value={newMovie.rating}
            onChange={this.handleNewMovieChange}
          />
          <button onClick={this.handleAddMovie}>Add Movie</button>
        </div>
      </div>
    );
  }
}

export default App;
