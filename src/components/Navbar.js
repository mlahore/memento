import React from 'react'


export const Navbar = () => {

  return (
    <nav className="navbar navbar-light">
      <div className="container-fluid">
        <div className="navbar-header">
          <div className="row justify-content-md-center">
            <div className="col">
              <div className="circle back-circle">
                <div className="circle front-circle"/>
              </div>
            </div>
            <div className="col">
              <a className="navbar-brand" href="/">
                <h2 className="navbar-brand-text">Memento</h2>
              </a>
            </div>
          </div>
        </div>
        <form className="form-inline">
          <div className="navbar-buttons">
            <span className="icon icon-user"/>
            <span className="icon icon-settings"/>
          </div>
        </form>
      </div>
    </nav>
  )
}
