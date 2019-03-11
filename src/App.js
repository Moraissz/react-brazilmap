import React, { Component } from 'react';
import BrazilMap from './BrazilMap/BrazilMap'
import Options from './Options/Options'
import './App.css';

class App extends Component {
  state = {
    data1: [
      ['br-sp', 10],
      ['br-ma', 1],
      ['br-pa', 2],
      ['br-sc', 3],
      ['br-ba', 4],
      ['br-ap', 5],
      ['br-ms', 6],
      ['br-mg', 7],
      ['br-go', 8],
      ['br-rs', 9],
      ['br-to', 10],
      ['br-pi', 11],
      ['br-al', 12],
      ['br-pb', 13],
      ['br-ce', 14],
      ['br-se', 15],
      ['br-rr', 16],
      ['br-pe', 17],
      ['br-pr', 18],
      ['br-es', 19],
      ['br-rj', 20],
      ['br-rn', 21],
      ['br-am', 22],
      ['br-mt', 23],
      ['br-df', 24],
      ['br-ac', 25],
      ['br-ro', 26]
    ],
    data2: [
      ['br-sp', 34],
      ['br-ma', 1],
      ['br-pa', 2],
      ['br-sc', 3],
      ['br-ba', 4],
      ['br-ap', 5],
      ['br-ms', 6],
      ['br-mg', 7],
      ['br-go', 8],
      ['br-rs', 9],
      ['br-to', 10],
      ['br-pi', 11],
      ['br-al', 12],
      ['br-pb', 13],
      ['br-ce', 14],
      ['br-se', 15],
      ['br-rr', 16],
      ['br-pe', 17],
      ['br-pr', 18],
      ['br-es', 19],
      ['br-rj', 20],
      ['br-rn', 21],
      ['br-am', 22],
      ['br-mt', 23],
      ['br-df', 24],
      ['br-ac', 25],
      ['br-ro', 26]
    ],
    data3: [
      ['br-sp', 17],
      ['br-ma', 1],
      ['br-pa', 2],
      ['br-sc', 3],
      ['br-ba', 4],
      ['br-ap', 5],
      ['br-ms', 6],
      ['br-mg', 7],
      ['br-go', 8],
      ['br-rs', 9],
      ['br-to', 10],
      ['br-pi', 11],
      ['br-al', 12],
      ['br-pb', 13],
      ['br-ce', 14],
      ['br-se', 15],
      ['br-rr', 16],
      ['br-pe', 17],
      ['br-pr', 18],
      ['br-es', 19],
      ['br-rj', 20],
      ['br-rn', 21],
      ['br-am', 22],
      ['br-mt', 23],
      ['br-df', 24],
      ['br-ac', 25],
      ['br-ro', 26]
    ],

    selectedData: [
      ['br-sp', 10],
      ['br-ma', 1],
      ['br-pa', 2],
      ['br-sc', 3],
      ['br-ba', 4],
      ['br-ap', 5],
      ['br-ms', 6],
      ['br-mg', 7],
      ['br-go', 8],
      ['br-rs', 9],
      ['br-to', 10],
      ['br-pi', 11],
      ['br-al', 12],
      ['br-pb', 13],
      ['br-ce', 14],
      ['br-se', 15],
      ['br-rr', 16],
      ['br-pe', 17],
      ['br-pr', 18],
      ['br-es', 19],
      ['br-rj', 20],
      ['br-rn', 21],
      ['br-am', 22],
      ['br-mt', 23],
      ['br-df', 24],
      ['br-ac', 25],
      ['br-ro', 26]
    ],
    selectedOption: 'Livro'
  }

  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
    if(changeEvent.target.value === 'Livro')
    {
      this.setState({
        selectedData:this.state.data1
      })
    }
    if(changeEvent.target.value === 'Artigo')
    {
      this.setState({
        selectedData:[
          ['br-sp', 12],
          ['br-ma', 1],
          ['br-pa', 2],
          ['br-sc', 3],
          ['br-ba', 4],
          ['br-ap', 5],
          ['br-ms', 6],
          ['br-mg', 7],
          ['br-go', 8],
          ['br-rs', 9],
          ['br-to', 10],
          ['br-pi', 11],
          ['br-al', 12],
          ['br-pb', 13],
          ['br-ce', 14],
          ['br-se', 15],
          ['br-rr', 16],
          ['br-pe', 17],
          ['br-pr', 18],
          ['br-es', 19],
          ['br-rj', 20],
          ['br-rn', 21],
          ['br-am', 22],
          ['br-mt', 23],
          ['br-df', 24],
          ['br-ac', 25],
          ['br-ro', 26]
        ],
      })
    }
    if(changeEvent.target.value === 'Palestra')
    {
      this.setState({
        selectedData:[
          ['br-sp', 17],
          ['br-ma', 1],
          ['br-pa', 2],
          ['br-sc', 3],
          ['br-ba', 4],
          ['br-ap', 5],
          ['br-ms', 6],
          ['br-mg', 7],
          ['br-go', 8],
          ['br-rs', 9],
          ['br-to', 10],
          ['br-pi', 11],
          ['br-al', 12],
          ['br-pb', 13],
          ['br-ce', 14],
          ['br-se', 15],
          ['br-rr', 16],
          ['br-pe', 17],
          ['br-pr', 18],
          ['br-es', 19],
          ['br-rj', 20],
          ['br-rn', 21],
          ['br-am', 22],
          ['br-mt', 23],
          ['br-df', 24],
          ['br-ac', 25],
          ['br-ro', 26]
        ],
      })
      console.log('PALESTRA');
      
    }
    console.log(this.state.selectedData);
  };

  render() {
    return (
      <div>
       <Options selectedOption={this.state.selectedOption} handleOptionChange={this.handleOptionChange.bind(this)}></Options>

        <BrazilMap key={this.state.selectedData} selectedData={this.state.selectedData}></BrazilMap>


      </div>

    );
  }
}

export default App;
