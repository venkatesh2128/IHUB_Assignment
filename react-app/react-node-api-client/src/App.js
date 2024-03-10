// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostList from "./components/PostList";
import PostDetails from "./components/PostDetails";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<PostList />} />
          <Route path="/post/:id" element={<PostDetails />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
