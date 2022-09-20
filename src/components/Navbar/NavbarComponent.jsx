import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo_new.webp'
import './Navbar.scss'
function NavbarComponent() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light  navbar navbar--health-bg">
        <div className="container-fluid navbar__container">
          <Link className="navbar-brand" href="#">
            <img src={logo} alt='logo'/>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/"><span className="nav-link active" aria-current="page">Home</span></Link>

              </li>
            
              <li className="nav-item dropdown">
                <span className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                About us
                </span>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><span className="dropdown-item" href="#">Action</span></li>
                  <li><span className="dropdown-item" href="#">Another action</span></li>
                  <li><hr className="dropdown-divider"></hr></li>
                  <li><span className="dropdown-item" href="#">Something else here</span></li>
                </ul>
              </li>


              <li className="nav-item">
                <Link to="/services"><span className="nav-link active" aria-current="page">Medical Services</span></Link>
              </li>

              <li className="nav-item">
                <Link to="/services"><span className="nav-link active" aria-current="page"> Departments</span></Link>
              </li>

              <li className="nav-item">
                <Link to="/featurs"><span className="nav-link active" aria-current="page"> Timetable</span></Link>
              </li>

              <li className="nav-item">
                <Link to="/contact us"><span className="nav-link active" aria-current="page"> Contact Us</span></Link>
              </li>
            </ul>
         {/*    <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
          </div>
        </div>
      </nav>

    </>
  )
}

export default NavbarComponent