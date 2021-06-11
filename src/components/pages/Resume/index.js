import './style.css';

function Resume() {
  return (
    <div id="resume" className="container">
      <div className="column columns is-vcentered">
        <div className="column is-half">
          <h1 className="title is-1">Resume</h1>
        </div>
        <div className="column is-half">
          <a className="download" target="_blank" rel="noreferrer" href="./assets/webResume.pdf">
            <div className="icon-text">
              <span className="icon">
                <i className="fas fa-file-pdf"></i>
              </span>
              <span>Downloadable</span>
            </div>
          </a>
        </div>
      </div>


      <div className="columns is-multiline box">

        <div className="column is-full"><h2 className="title is-2">Matthew Torcellini</h2></div>

        <div className="column is-half link">
          <a href="https://www.linkedin.com/in/matt-torcellini/" target="_blank" rel="noreferrer">
            <div className="icon-text">
              <span className="icon">
                <i className="fab fa-linkedin-in"></i>
              </span>
              <span>LinkedIn</span>
            </div>
          </a>
        </div>
        <div className="column is-half link">
          <a href="https://github.com/mtorcellini" target="_blank" rel="noreferrer">
            <div className="icon-text">
              <span className="icon">
                <i className="fab fa-github-alt"></i>
              </span>
              <span>GitHub</span>
            </div>
          </a>
        </div>
      

        <div className="column is-full">
          
          {/* SUMMARY */}
          <div className="column is-full">
            <h3 className="title is-3">Summary</h3>
            <div className="column is-full">
              <div className="content">
                <p>Musician-educator turned creative developer. Experienced in working with teams and iterating through designs to deliver intelligent solutions. Recognized as a clear and effective communicator and educator who tackles challenges with enthusiasm and precision. Impassioned to continually learn and keep up with the cutting edge.</p>
              </div>
            </div>
          </div>

          {/* SKILLS */}
          <div className="column is-full">
            <h3 className="title is-3">Skills</h3>
            <div className="column is-full">
              <div className="tile is-ancestor">
            <div className="tile is-parent">
              <article className="tile is-child notification is-info is-light">
                <div className="content">
                  <p>JavaScript / PHP / HTML5 / CSS3</p>
                </div>
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification is-danger is-light">
                <div className="content">
                  <p>Node.js / React.js / jQuery / Express / Handlebars</p>
                </div>
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification is-primary is-light">
                <div className="content">
                  <p>Bootstrap / Bulma</p>
                </div>
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification is-success is-light">
                <div className="content">
                  <p>MySQL / MongoDB</p>
                </div>
              </article>
            </div>
          </div>
              <div className="tile is-ancestor">
            <div className="tile is-parent">
              <article className="tile is-child notification is-primary is-light">
                <div className="content">
                  <p>Git / Heroku</p>
                </div>
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification is-link is-light">
                <div className="content">
                  <p>WordPress / Custom Themes</p>
                </div>
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification is-warning is-light">
                <div className="content">
                  <p>Visual Studio Code / Final Cut Pro / Adobe Photoshop / Adobe Illustrator / Adobe XD</p>
                </div>
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification is-light">
                <div className="content">
                  <p>Test Driven Development (TDD) / Progressive Web Applications (PWA) / RESTful APIs / Agile Methodology</p>
                </div>
              </article>
            </div>
          </div>
            </div>
          </div>

          {/* EXPERIENCE */}
          <div className="column is-full">
            <h3 className="title is-3">Experience</h3>

            <div className="column is-full">
              <p className="employer">Trilogy Education Services | University of Connecticut</p>
              <p className="job-title">Teaching Assistant | Full Stack Web Development</p>
              <ul className="details">
                <li>Teach review sessions, assess student performance, encourage participation and create learning opportunities</li>
                <li>Guide students to success with critical-thinking questions and targeted resources, lead daily stand-ups during project development</li>
              </ul>
            </div>

            <div className="column is-full">
              <p className="employer">Henrys Fork Wildlife Alliance</p>
              <p className="job-title">WordPress Developer</p>
              <ul className="details">
                <li>Increased nonprofit organizations productivity by leading the transition to and training team members in the WordPress platform</li>
                <li>Performed full stack site redesign, implementing a custom theme for a media-rich user experience</li>
              </ul>
            </div>

          </div>
          
          {/* EDUCATION */}
          <div className="column is-full">
            <h3 className="title is-3">Education</h3>

            <div className="column columns is-full">
              <div className="column is-half">
                <p className="employer">Skillcrush Web Development Course</p>
                <p className="major">Full Stack Web Development &amp; Design</p>
              </div>

              <div className="column is-half">
                <p className="employer">The Hartt School, University of Hartford</p>
                <p className="major">Bachelor of Music (B.M.)</p>
                <p className="major">Percussion Performance, Music Education</p>
              </div>
            </div>

          </div>
        </div>


      </div>
    </div>
  )
}

export default Resume;