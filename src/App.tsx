import jo_img from './assets/jb.jpg';
import NavBar from './components/NavBar/NavBar';
import { eduEntry, tools } from './constants';
import Footer from './components/Footer/Footer';
import { NavItem } from './components/NavBar/NavBar.interface';
import resume from './assets/Resume_2024.pdf';
import './App.scss';

export default function App() {
  const navItems: NavItem[] = [
    { name: 'About Me', path: 'aboutMe' },
    { name: 'Education', path: 'education' },
    { name: 'Skills', path: 'portfolio' },
    { name: 'Resume', path: resume },
    { name: 'Contact', path: 'contact' },
  ];

  const renderIntro = (): JSX.Element => {
    return (
      <>
        <p>
          Hi! <br />
          I'm Jonelle Bowen, a software engineer with a passion for front-end
          development. My first introduction to programming happened while I was
          in high school back in <span>Kingston, Jamaica</span>. With this prior
          exposure, I was confident enough to study Computer Science for my
          undergrad when I moved to Maryland, USA for university.
        </p>
        <p>
          There, I studied Java and Object-oriented programming. After earning
          my CS degree, I moved to
          <span> New York</span> to begin my career in software engineering,
          where I was quickly thrust into the world of front-end development.
          This space gave me the opportunity to combine my technical skills with
          my creative side. I now have the privilege of working on a User
          Experience-centered team where we endeavour to create scalable and
          maintainable experiences that are a joy to use.
        </p>
        <p>
          After 3 years in New York, I moved to <span>London</span>, where I'm
          currrently based and continue to work as a front-end engineer in the
          asset management industry.
        </p>
        <p>
          Outside of work, I have an array of hobbies I try to juggle. I enjoy
          drawing in my free time, and my art is heavily influenced by the anime
          I grew up with and still continue to watch. I also enjoy playing the
          piano, ballroom dancing, reading and cooking. I also love to play
          video games, one of my childhood staples.
        </p>
      </>
    );
  };
  const renderEducation = (): JSX.Element[] => {
    return eduEntry.map((entry) => {
      return (
        <div key={entry.school} className="education-container">
          <div>
            <img src={entry.logo} style={{ width: '60px' }} />
          </div>
          <div className="education-details-section">
            <span style={{ fontWeight: '900' }}> {entry.school} </span>
            <div>
              <span>
                {entry.degree} | {entry.major}
              </span>
            </div>
            <div className="container-row-flex">
              <span>{entry.tenure} | </span> <span>{entry.location}</span>
            </div>
          </div>
        </div>
      );
    });
  };

  const renderTools = (): JSX.Element => {
    const toolList = tools.map((tool) => {
      return (
        <li key={tool.name}>
          <div className="skill-badge">
            <a href={tool.link} target="_blank">
              {tool.name}
            </a>
            {tool.name === 'single-spa' ? (
              <img
                className="skill_logo"
                src={
                  'https://single-spa.js.org/img/single-spa-mark-magenta.svg'
                }
              ></img>
            ) : (
              <img className="skill_logo" src={tool.icon}></img>
            )}
          </div>
        </li>
      );
    });
    return <ul>{toolList}</ul>;
  };

  const navItemClickedHandler = (event: MouseEvent, sectionId: string) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      {
        <NavBar
          navItems={navItems}
          onNavItemClicked={navItemClickedHandler}
        ></NavBar>
      }
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
      {/* skills section */}
      <div id="skills" className="skills-section">
        <div className="container">
          <h3 className="text-left"> Skills </h3>
          <hr></hr>
          <div>{renderTools()}</div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
