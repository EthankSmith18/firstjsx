import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";

export class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
        <Header />
        </div>
        <div className="container">
        <List />
        </div>
      </div>
    );
  }
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello Dojo!</h1>
//       <h2>Things I need to do:</h2>
//       <ul>
//         <li>Learn React</li>
//         <li>Climb Mt. Everest</li>
//         <li>Run a marathon</li>
//         <li>Feed the dogs</li>
//       </ul>
//     </div>
//   );
// }

// export default App;
