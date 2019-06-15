import React from 'react';
import logo from './logo.svg';
import './App.scss';
import HomePage from 'components/Home/homePage';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer'


const App = () => {
  return (<div className="App">
    <div>
      <Header />
      <div className="content">
        <HomePage />
      </div>
      <Footer />
    </div>


  </div>);

};


export default App;
