import React from 'react'
import './App.css';
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";


const App = () => {
  return (
    <div className="app">
      <Header/>
      <Nav/>
      <section className="content">
        Контент
      </section>
    </div>
  );
}



export default App;
