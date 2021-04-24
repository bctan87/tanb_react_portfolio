import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Porfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

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
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>
        {renderPage(currentPage) }
      </div>
    </div>
  );
}

export default App;