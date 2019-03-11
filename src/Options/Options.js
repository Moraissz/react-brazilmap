import React, { Component } from "react";

class App extends Component {


  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-12">
              <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="Option"
                    value="Livro"
                    checked={this.props.selectedOption === "Livro"}
                    onChange={this.props.handleOptionChange}
                    className="form-check-input"
                  />
                  Livro
                </label>
              </div>
              <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="Option"
                    value="Artigo"
                    checked={this.props.selectedOption === "Artigo"}
                    onChange={this.props.handleOptionChange}
                    className="form-check-input"
                  />
                  Artigo
                </label>
              </div>
              <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="Option"
                    value="Palestra"
                    checked={this.props.selectedOption === "Palestra"}
                    onChange={this.props.handleOptionChange}
                    className="form-check-input"
                  />
                  Palestra
                </label>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;