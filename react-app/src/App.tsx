import jo_img from './assets/jo.jpg';
import NavBar from './components/NavBar/NavBar';
import { eduEntry, tools } from './constants';
import Footer from './components/Footer/Footer';
import './App.scss';
import { useCountries } from './hooks/useCountries';

export default function App() {
  const renderIntro = (): JSX.Element => {
    return (
      <>
        <p>
          {' '}
          Hi! <br />
          I'm Jonelle Bowen, a software engineer with a passion for front-end
          development. Originally from Jamaica, I'm currrently based in the
          vibrant city of London. My journey in tech began out of curiosity and
          quickly grew into a passion for web development, particularly in the
          frontend realm where design meets code. Over the years, I've had the
          privilege of working with talented engineers and designers to build
          modern user experiences that are a joy to use.
        </p>
        <p>
          I'm a self-taught artist, and I enjoy drawing in my free time. I also
          enjoy playing the piano, ballroom dancing, and cooking. I'm a lover of
          travel, and I enjoy exploring new places. I'm a lover of learning, and
          I enjoy reading. I'm a lover of life, and I enjoy living.
        </p>
      </>
    );
  };
  const renderEducation = (): JSX.Element[] => {
    return eduEntry.map((entry) => {
      return (
        <div key={entry.school}>
          <div>
            <h3> {entry.school} </h3>
          </div>
          <div>
            <strong> Major: </strong> {entry.major}
          </div>
          <div>
            <strong> Currently: </strong> {entry.degree}
          </div>
        </div>
      );
    });
  };

  const renderTools = (): JSX.Element => {
    const toolList = tools.map((tool) => {
      return (
        <li key={tool.name}>
          {/* {tool.icon} */}
          <a href={tool.link} target="_blank">
            {tool.name}
          </a>
        </li>
      );
    });
    return <ul>{toolList}</ul>;
  };

  return (
    <div className="App">
      {<NavBar></NavBar>}
      {/* header/ jumbotron section */}
      <div className="bgimg-1" style={{ color: '#ffffff' }}>
        <div
          className="jumbotron text-center transparent"
          style={{ height: '300px' }}
        >
          <h1> Welcome </h1>
        </div>
      </div>
      {/* about me section */}
      <div id="aboutMe" className="container">
        {/* <h1> About Me </h1> */}
        <div className="row">
          <div className="col-sm-8">{renderIntro()}</div>
          <div className="col-sm-4">
            <a href="#demo2" data-toggle="collapse">
              <img
                src={jo_img}
                className="headshot"
                alt="Jonelle Bowen"
                width="255"
                height="255"
              ></img>
            </a>
            <div id="demo2" className="collapse">
              {/* {renderEducation()} */}
            </div>
          </div>
        </div>
      </div>
      {/* purple spacer */}
      <div className="bgimg-3">
        <div className="caption"></div>
      </div>
      <div id="education">
        <div className="container left">
          <h3 className="text-left"> Education </h3>
          <hr></hr>
          {renderEducation()}
        </div>
      </div>
      {/* portfolio section */}
      <div id="portfolio" className="portfolio-section">
        <div className="container">
          <h3 className="text-left"> Tech Stack </h3>
          <hr></hr>
          <div>{renderTools()}</div>
        </div>
      </div>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}
