import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {SharedComponents} from "./components/SharedComponents";
import {ContentA} from "./components/ContentA";
import {ContentB} from "./components/ContentB";
import React from "react";

function App() {
  return (
      <div className="App">
          <Header/>
          <br/><br/>
          <ContentA/>
          <ContentB/>
          <Footer/>
      </div>
  );
}

export default App;
