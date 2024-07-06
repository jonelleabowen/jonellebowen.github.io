import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  const renderIntro = (): JSX.Element => {
    return (
      <>
        <span> Hi! </span>
        <p>
          I'm a student at the University of Maryland, College Park. I'm
          studying Computer Science, with a concentration in programming and
          I'll be graduating in May 2018.
        </p>
        <p>
          I decided to get into Computer Science because this major will give me
          the ability to do amazing things that, I thought was only reserved for
          super smart people (before my education in Computer Science).
          Thankfully, the more I succeed through challenging Computer Science
          courses, the more I realize that I fit into the world of tech, and if
          I keep pushing, I, too, can do amazing things. I want to use my
          knowledge of Computer Science to help people.
        </p>
        <p>
          {' '}
          <strong>
            {' '}
            One day, I hope my contribution to the tech industry will better the
            lives of people, especially the less fortunate.
          </strong>
        </p>
      </>
    );
  };

  return (
    <div className="App">
      {<NavBar></NavBar>}
      {/* header/ jumbotron section */}
      <div className="bgimg-1" style={{ color: '#ffffff' }}>
        <div
          className="jumbotron text-center"
          style={{ background: 'transparent' }}
        >
          <h1> </h1>
        </div>
        <div
          className="jumbotron text-center"
          style={{ background: 'transparent !important' }}
        >
          <h1> Welcome to my Page </h1>
        </div>
      </div>
      {/* about me section */}
      <div id="aboutMe" className="container ">
        <div
          className="jumbotron text-center"
          style={{ background: 'transparent !important' }}
        ></div>
        <h1> About Me </h1>
      </div>

      <div className="row">
        <div className="col-sm-8">{renderIntro()}</div>
        <div className="col-sm-4">
          <a href="#demo2" data-toggle="collapse">
            <img
              src="jo.jpg"
              className="img-circle person"
              alt="Jonelle Bowen"
              width="255"
              height="255"
            ></img>
          </a>
          <div id="demo2" className="collapse">
            <p>
              {' '}
              <strong> School: </strong> University of Maryland, College Park
            </p>
            <p>
              {' '}
              <strong> Major: </strong> Computer Science
            </p>
            <p>
              {' '}
              <strong> Currently: </strong> Computer Science Teaching Assistant
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
