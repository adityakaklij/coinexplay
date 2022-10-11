import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import "../App.css"

export default function Navbar() {
  return (
    
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
                <Link className="navbar-brand" to ="/">CETT Games</Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                

                <li className="nav-item">
                    <Link className="nav-link" to="/RockPaper">RockPaper</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/Color">Color</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/LuckyDraw">Lucky Draw</Link>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="https://adityakaklij11.gitbook.io/cett-play-to-earn" target="_blank">How to Play</a>
                </li>
            </ul>

            </div>
        </div>
        </nav>
    </>
  )
}
