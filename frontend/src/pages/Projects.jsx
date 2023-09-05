import CSSPenguin from "../components/CSSPenguin";
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
                  href="https://main--ubiquitous-kitsune-15d1b7.netlify.app/"
                  target="react/jsx-no-target-blank"
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
                  href="https://timely-chebakia-c81e3f.netlify.app/"
                  target="react/jsx-no-target-blank"
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
                  href="https://roaring-rugelach-3c14e6.netlify.app/"
                  target="react/jsx-no-target-blank"
                >
                  Boba Counter
                </a>
              </h2>
              <p>Count how many boba scoops you have scooped in a day.</p>
            </div>
            <div className="project-item">
              <h2>Image Resizer</h2>
              <p>
                Desktop app to resize your images. Tutorial by Traversy Media
              </p>
            </div>
            <div className="project-item">
              <h2>
                <a
                  href="https://benevolent-kleicha-e081fe.netlify.app/"
                  target="react/jsx-no-target-blank"
                >
                  Breakout
                </a>
              </h2>
              <p>Simple Javscript Breakout game based on Mozilla's tutorial.</p>
            </div>
            <div className="project-item">
              <h2>Netflix Landing Clone</h2>
              <p>
                Clone of the Netflix landing page, tutorial by Traversy Media
              </p>
            </div>
            <div className="project-item">
              <h2>Random Joke Generator</h2>
              <p>Generate a random joke from an API</p>
            </div>
            <div className="project-item">
              <h2>Chrome Extension</h2>
              <p>Save links to any website you visit.</p>
            </div>
            <div className="project-item">
              <h2>CSS Art</h2>
              <p>Playing around with CSS</p>
              <CSSPenguin />
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
