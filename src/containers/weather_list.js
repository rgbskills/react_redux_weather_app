import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {

  // cityData could be anything - its just what this.props.weather.map returns
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map((weather) => weather.main.temp);

    console.log(temps);
    return (
      <tr key={ name } >
        <td>{ name }</td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Presure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          { this.props.weather.map(this.renderWeather) }
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }){
  return { weather } // { weather: weather } = { weather }
}

// Export the connected version of weather list
export default connect(mapStateToProps)(WeatherList);