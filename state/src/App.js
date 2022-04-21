import "./App.css";
import image from "./12.jpg" ; 

import React, { Component } from "react";
import Counter from "./Counter";


export class App extends Component {
  state = {
    fullName: "Khenissi Salwa",
    bio: "I'm a futur developer",
    imgSrc: image,
    profession: "Digital Marketing Officer",
    show: false,
  };

  toggleShow = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <>
        <div className="App">
          <div className="profile">
            {this.state.show ? (
              <div>
                <div >
                  <img
                      src={this.state.imgSrc}
                    alt="img"
                    className="img"
                  />
                  
                </div>
                <h1>{this.state.fullName}</h1>
                <p>Bio: {this.state.bio}</p>
                <p>Profession : {this.state.profession}</p>
                <div className="counter">
                  <h3>
                    <Counter />
                  </h3>
                </div>
              </div>
            ) : (
              <div>
             
                <h1>Click here To View Profile </h1>
              </div>
            )}
          </div>
          <button
            onClick={this.toggleShow}
            className={!this.state.show ? "btnShow" : "btnHide"}
          >
            {!this.state.show ? "Show Profile" : "Hide Profile"}
          </button>
        </div>
      </>
    );
  }
}

export default App