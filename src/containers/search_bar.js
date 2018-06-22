import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {term: ''};


    // Binds this this, because onInputChange has diferent this
    this.onInputChange = this.onInputChange.bind(this);
    this.onFrormSubmit = this.onFrormSubmit.bind(this);
  }

  onInputChange(event){
    this.setState({ term: event.target.value });
  }

  onFrormSubmit(event){
    event.preventDefault();

    // We need to go and fetch weather data
    this.props.fetchWeather(this.state.term);
    // clear search
    this.setState({term: ''});
  }

  render() {
    return (
      <form onSubmit={this.onFrormSubmit} className="input-group">
        <input
          placeholder="Get a five day forcast in your favorite cities."
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWeather }, dispatch);
}

// connect fetchWeather to component props
export default connect(null, mapDispatchToProps)(SearchBar);