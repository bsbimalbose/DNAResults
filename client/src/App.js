import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Report from "./components/Report";
import axios from "axios";
import Loading from "./components/Loading";

class App extends Component {
  state = {
    report: null
  };
  componentDidMount() {
    axios.get("http://localhost:5000/api/getResult").then(result => {
      this.setState({ report: result.data });
    });
  }
  render() {
    const { report } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <span>DNA Results</span>
        </header>
        <div
          style={{
            paddingLeft: 15,
            paddingRight: 15,
            display: "flex",
            justifyContent: "center"
          }}
        >
          {report ? <Report report={report} /> : <Loading />}
        </div>
      </div>
    );
  }
}

export default App;
