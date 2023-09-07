import CSSPenguin from "../components/CSSPenguin";
import CSSCity from "../components/CSSCity";
import VideoPlayer from "../components/VideoPlayer";
import ProjectItem from "../components/ProjectItem";

const donutAnimationSource =
  "https://user-images.githubusercontent.com/46589739/265579853-1ad18d5e-3383-4d42-919c-da2ab7facce1.mp4";

function Projects() {
  return (
    <>
      <section id="projects-info">
        <div className="container">
          <section id="projects-past">
            <h1 className="text-4xl underline mb-8">Past Projects</h1>
            <ProjectItem
              title={"Guess the Country"}
              link={"https://timely-chebakia-c81e3f.netlify.app/"}
              desc={
                "Fill in the blank of what country the flag is. Used RestCountries API for list of countries."
              }
            />
            <ProjectItem
              title={"Goal Mern Stack Application"}
              link={"https://github.com/alx00ho/mern-stack"}
              desc={[
                "Full stack application for setting goals from ",
                <a
                  className="underline"
                  href="https://www.youtube.com/watch?v=-0exw-9YJBo&list=PLillGF-RfqbbQeVSccR9PGKHzPJSWqcsm&index=1"
                  target="react/jsx-no-target-blank"
                  rel="noopener noreferrer"
                >
                  Travery Media's Tutorial
                </a>,
              ]}
            />
            <ProjectItem
              title={"Boba Counter"}
              link={"https://roaring-rugelach-3c14e6.netlify.app/"}
              desc={"Count how many boba scoops you have scooped in a day."}
            />
            <ProjectItem
              title={"React/Angular Task Tracker"}
              link={"https://main--ubiquitous-kitsune-15d1b7.netlify.app/"}
              desc={
                "Task Tracker developed in both React and Angular based on Traversy Media's tutorial"
              }
            />
            <ProjectItem
              title={"Image Resizer"}
              link={"https://github.com/alx00ho/image-resizer-electron"}
              desc={
                "Desktop app to resize your images. Tutorial by Traversy Media"
              }
            />
            <ProjectItem
              title={"Breakout"}
              link={"https://benevolent-kleicha-e081fe.netlify.app/"}
              desc={
                "Simple Javscript Breakout game based on Mozilla's tutorial."
              }
            />
            <ProjectItem
              title={"Netflix Landing Clone"}
              link={"https://github.com/alx00ho/Netflix-Landing-Page-Clone"}
              desc={
                "Clone of the Netflix landing page, tutorial by Traversy Media"
              }
            />
            <ProjectItem
              title={"Joke Generator"}
              link={"https://github.com/alx00ho/Random-Joke-Generator"}
              desc={"Generate a random joke from an API"}
            />
            <ProjectItem
              title={"Chrome Extension"}
              link={"https://github.com/alx00ho/chrome-extension"}
              desc={"Save links to any website you visit."}
            />
            <ProjectItem
              title={"CSS Art"}
              link={""}
              desc={[
                "Playing around with CSS on ",
                <a
                  className="underline"
                  href="http://freecodecamp.org"
                  target="react/jsx-no-target-blank"
                  rel="noopener noreferrer"
                >
                  freeCodeCamp.org
                </a>,
                <div id="css-art" className="flex">
                  <CSSCity />
                  <CSSPenguin />
                </div>,
              ]}
            />
            <ProjectItem
              title={"3D Donut Render on Blender"}
              link={""}
              desc={[
                "My version of a 3D Donut from the ",
                <a
                  className="underline"
                  target="react/jsx-no-target-blank"
                  href="https://www.youtube.com/watch?v=nIoXOplUvAw&list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD&index=1"
                  rel="noopener noreferrer"
                >
                  Blender Guru's tutorial
                </a>,
                " on Youtube",
                <VideoPlayer link={donutAnimationSource}></VideoPlayer>,
              ]}
            />
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
