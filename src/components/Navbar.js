import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Navbar() {
  return (
    
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
                <Link className="navbar-brand" to ="/">Telos Game</Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/Test1">Test1</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Test2">Test2</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/RockPaper">RockPaper</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/Color">Color</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/LuckyDraw">Lucky Draw</Link>
                </li>
            </ul>

            </div>
        </div>
        </nav>
    </>
  )
}
