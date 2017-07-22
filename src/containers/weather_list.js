import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {

  renderWeather(cityData, i) {
    const convertKelvinToF = k => k * 9/5 - 459.67;
    const temps = cityData.list.map(weather => convertKelvinToF(weather.main.temp));

    return (
      <tr key={i}>
        <td>{cityData.city.name}</td>
        <td>
          <Chart data={temps} color="orange" />
        </td>
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
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

// same as writing
// function mapStateToProps(state) {
//   return { weather: state.weather };
// }

export default connect(mapStateToProps)(WeatherList);
