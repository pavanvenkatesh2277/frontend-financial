import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
export default function NavBar() {
  return (
    <div className='container'>
        <nav className="navbar navbar-expand-lg bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#home" ><h3>Future Finance</h3></a>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
    <div className="collapse navbar-collapse" >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Mutual Funds">Mutual Funds</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Thematic Funds">Thematic Funds</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Insurance">Insurance</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
