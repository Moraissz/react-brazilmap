import React, { Component } from 'react'
import { findDOMNode } from 'react-dom';
import HighMaps from 'highcharts/highmaps'
import BrazilAll from "./BrazilAll";

class CustomHighMap extends Component {

  
  componentDidMount() {
    // load modules
    //drilldown(Highcharts);

    const data = this.props.selectedData;
     console.log("SFOUHOUPFSH"+data)
    const options = {
      chart: {
        map: 'countries/br/br-all'
      },
      title: {
        text: 'HighMap Test'
      },


      subtitle: {
        text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/br/br-all.js">Brazil</a>'
      },

      mapNavigation: {
        enabled: true,
        buttonOptions: {
          verticalAlign: 'bottom'
        }
      },
      colorAxis: {
        min: 0,
        minColor: '#E6E7E8',
        maxColor: '#D92B10'
      },
      series: [{
        mapData: BrazilAll,
        data: data,
        name: 'Random data',
        states: {
          hover: {
            color: '#BADA55'
          }
        },
        dataLabels: {
          enabled: true,
          format: '{point.name}'
        }
      }],
    };

    this.chart = new HighMaps['Map'](
      findDOMNode(this),
      options
    );
  }

  componentWillReceiveProps(){

  }
  componentWillUnmount() {
    this.chart.destroy();
  }

  render() {
 
    return (
      <div className="in-highchart"></div>
    )
  }
}

export default CustomHighMap;
