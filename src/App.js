import React, { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Porfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    switch (currentPage) {
      case "About": 
        return <About />
      case "Portfolio": 
        return <Porfolio />
      case "Contact": 
        return <Contact />
      case "Resume": 
        return <Resume />
    }
  };

  return (
    <div>
      <Header>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        <div>
          {renderPage(currentPage) }
        </div>
      </Header>
      <br />
      <div>
      <Footer/>
      </div>
    </div>
  );
}

export default App;