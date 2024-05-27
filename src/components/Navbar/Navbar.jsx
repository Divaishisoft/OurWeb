/* eslint-disable no-unused-vars */
import * as React from 'react';

function ResponsiveAppBar() {

  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > window.innerHeight * 0.2) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'scrolled' : ''}`} style={{ background: scrolled ? '#000' : 'transparent' }}>
        <div className="container">
          <a className="navbar-brand text-white" href="#"><img src="/logo.png" style={{ height: '65px' }} alt="/logo.png" /></a>
          <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link text-white" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#clients">Clients</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#latest_projects">Latest Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#contact_us">Contact Us</a>
              </li>
              {/* <li className="nav-item dropdown">
                <a className="nav-link text-white dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown link
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default ResponsiveAppBar;
