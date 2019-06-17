import React from 'react';
import './App.scss';
import HomePage from 'components/Home/HomePage';
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
