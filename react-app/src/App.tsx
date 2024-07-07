import jo_img from './assets/jo.jpg';
import './App.scss';
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
  const renderEducation = (): JSX.Element[] => {
    const eduEntry = [
      {
        school: 'University of Maryland, College Park',
        major: 'Computer Science',
        degree: 'Computer Science Teaching Assistant',
      },
      {
        school: 'Montgomery College, Rockville',
        major: 'Computer Science and Technologies',
        degree: 'Associate Degree',
      },
      {
        school: 'Immaculate Conception High School',
        major: 'High School Diploma',
        degree: 'Class of 2013',
      },
    ];
    return eduEntry.map((entry) => {
      return (
        <div className="container right">
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
        {/* <div className="jumbotron text-center transparent"></div> */}
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
    </div>
  );
}

export default App;
