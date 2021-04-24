import React from 'react';

function Nav(props) {

  const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];

// For mobile nav initialization
  const M =window.M;

// Initializes the mobile nav
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
  });

  return (
    <div>

        <nav>
            
            <div className="blue nav-wrapper">
                <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>  
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                {tabs.map(tab => (
                    <li className="nav-item" key={tab}>
                    <a
                        href={'#' + tab.toLowerCase()}
                        onClick={() => props.handlePageChange(tab)}
                        className={
                        props.currentPage === tab ? 'nav-link active' : 'nav-link'
                        }
                    >
                        {tab}
                    </a>
                    </li>
                ))}
                </ul>

            </div>
            
        </nav>
        
        {/* Mobile Nav */}
        <ul id="mobile-demo" className="sidenav">
                {tabs.map(tab => (
                    <li className="nav-item" key={tab}>
                    <a
                        href={'#' + tab.toLowerCase()}
                        onClick={() => props.handlePageChange(tab)}
                        className={
                        props.currentPage === tab ? 'nav-link active' : 'nav-link'
                        }
                    >
                        {tab}
                    </a>
                    </li>
                ))}
        </ul>
        

    </div>

  );
}

export default Nav;
