import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mars</title>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
  <link rel="stylesheet" href="css/style.css" />
  <span className="bg-img" />
  <img src="/.images/mars.png" alt="Mars" className="mars" />
  <div className="container">
    <header>
      <a href="#">Mars</a>
      <ol>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Info</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Launch Schedule</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ol>
    </header>
    <main>
      <h1>
        Humans live on Mars <br />
        is it possible?
      </h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae,
        labore. Placeat neque odit sequi ex commodi, itaque quae! Pariatur neque
        nostrum eligendi saepe tempora excepturi maxime impedit quisquam dolorum
        porro?
      </p>
      <div className="d-flex">
        <a href="#">
          <span>
            <i className="fas fa-arrow-right" />
          </span>
          Explore Mars
        </a>
        <a href="#">
          <span>
            <i className="fas fa-play" />
          </span>
          Watch video
        </a>
      </div>
      <ol className="info">
        <li className="item">
          <h5>01</h5>
          <h4>China started the exploration of Mars</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus,
            voluptatum.
          </p>
        </li>
        <li className="item">
          <h5>02</h5>
          <h4>7 facts of mars</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus,
            voluptatum.
          </p>
        </li>
      </ol>
    </main>
    <footer>
      
    </footer>
  </div>
</>

    </>
  )
}

export default App
