import CSSPenguin from "../components/CSSPenguin";
import CSSCity from "../components/CSSCity";
import VideoPlayer from "../components/VideoPlayer";

const donutAnimationSource =
  "https://user-images.githubusercontent.com/46589739/246997278-7f9a242d-7bb7-4790-84e7-cfe6c424e5d1.mp4";

function Projects() {
  return (
    <>
      <section id="projects-info">
        <div className="container">
          <section id="projects-past">
            <h1 className="text-4xl underline mb-8">Past Projects</h1>
            <div className="project-item">
              <h2>
                <a
                  href="https://timely-chebakia-c81e3f.netlify.app/"
                  target="react/jsx-no-target-blank"
                  rel="noopener noreferrer"
                >
                  Guess the Country
                </a>
              </h2>
              <p>
                Fill in the blank of what country the flag is. Used
                RestCountries API for list of countries.
              </p>
            </div>
            <div className="project-item">
              <h2>
                <a
                  href="https://github.com/alx00ho/mern-stack"
                  target="react/jsx-no-target-blank"
                  rel="noopener noreferrer"
                >
                  Goal Mern Stack Application
                </a>
              </h2>
              <p>
                Full stack application for setting goals from{" "}
                <a
                  className="underline"
                  href="https://www.youtube.com/watch?v=-0exw-9YJBo&list=PLillGF-RfqbbQeVSccR9PGKHzPJSWqcsm&index=1"
                  target="react/jsx-no-target-blank"
                  rel="noopener noreferrer"
                >
                  Travery Media's Tutorial
                </a>
              </p>
            </div>
            <div className="project-item">
              <h2>
                <a
                  href="https://roaring-rugelach-3c14e6.netlify.app/"
                  target="react/jsx-no-target-blank"
                  rel="noopener noreferrer"
                >
                  Boba Counter
                </a>
              </h2>
              <p>Count how many boba scoops you have scooped in a day.</p>
            </div>
            <div className="project-item">
              <h2>
                <a
                  href="https://main--ubiquitous-kitsune-15d1b7.netlify.app/"
                  target="react/jsx-no-target-blank"
                  rel="noopener noreferrer"
                >
                  React/Angular Task Tracker
                </a>
              </h2>
              <p>
                Task Tracker developed in both React and Angular based on
                Traversy Media's tutorial
              </p>
            </div>
            <div className="project-item">
              <h2>
                <a
                  href="https://github.com/alx00ho/image-resizer-electron"
                  target="react/jsx-no-target-blank"
                  rel="noopener noreferrer"
                >
                  Image Resizer
                </a>
              </h2>
              <p>
                Desktop app to resize your images. Tutorial by Traversy Media
              </p>
            </div>
            <div className="project-item">
              <h2>
                <a
                  href="https://benevolent-kleicha-e081fe.netlify.app/"
                  target="react/jsx-no-target-blank"
                  rel="noopener noreferrer"
                >
                  Breakout
                </a>
              </h2>
              <p>Simple Javscript Breakout game based on Mozilla's tutorial.</p>
            </div>
            <div className="project-item">
              <h2>
                <a
                  href="https://github.com/alx00ho/Netflix-Landing-Page-Clone"
                  target="react/jsx-no-target-blank"
                  rel="noopener noreferrer"
                >
                  Netflix Landing Clone
                </a>
              </h2>
              <p>
                Clone of the Netflix landing page, tutorial by Traversy Media
              </p>
            </div>
            <div className="project-item">
              <h2>
                <a
                  href="https://github.com/alx00ho/Random-Joke-GeneratorRandom"
                  target="react/jsx-no-target-blank"
                  rel="noopener noreferrer"
                >
                  Joke Generator
                </a>
              </h2>
              <p>Generate a random joke from an API</p>
            </div>
            <div className="project-item">
              <h2>
                <a
                  href="https://github.com/alx00ho/chrome-extensionChrome"
                  target="react/jsx-no-target-blank"
                  rel="noopener noreferrer"
                >
                  Chrome Extension
                </a>
              </h2>
              <p>Save links to any website you visit.</p>
            </div>
            <div className="project-item">
              <h2>CSS Art</h2>
              <p>
                Playing around with CSS on{" "}
                <a
                  className="underline"
                  href="http://freecodecamp.org"
                  target="react/jsx-no-target-blank"
                  rel="noopener noreferrer"
                >
                  freeCodeCamp.org
                </a>
              </p>
              <div id="css-art" className="flex">
                <CSSCity />
                <CSSPenguin />
              </div>
            </div>
            <div id="3d-projects" className="project-item">
              <h2>3D Donut Render on Blender</h2>
              <p className="mb-2">
                My version of a 3D Donut from the
                <span> </span>
                <a
                  className="underline"
                  target="react/jsx-no-target-blank"
                  href="https://www.youtube.com/watch?v=nIoXOplUvAw&list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD&index=1"
                  rel="noopener noreferrer"
                >
                  Blender Guru's tutorial
                </a>
                <span> </span>
                on Youtube
              </p>
              <VideoPlayer></VideoPlayer>
            </div>
          </section>
          <section id="projects-upcoming" className="text-right">
            <h1 className="text-4xl underline mb-8">Upcoming Projects</h1>
            <ul>
              <li>Lobster and Tofu Website</li>
              <li>Musical Soundtracks</li>
              <li>Vietnamese Translator</li>
              <li>Headline Generator for Rocket League Players</li>
              <li>Cooking Recipes Generator</li>
              <li>Map of Places I've Traveled To</li>
              <li>100 "_____" Generator</li>
              <li>Boba Training Game</li>
            </ul>
          </section>
        </div>
      </section>
    </>
  );
}
export default Projects;
