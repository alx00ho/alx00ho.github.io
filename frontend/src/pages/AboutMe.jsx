import TeaHillImg from "../images/Tea-Hill.jpeg";

function AboutMe() {
  return (
    <>
      <section id="about-me-landing">
        <section className="about-me flex items-center justify-center space-x-16">
          <div className="w-96">
            <img
              src={TeaHillImg}
              id="about-me-photo"
              className="rounded border"
              alt="View of Tea Hill from the front"
            />
          </div>
          <div
            id="about-me-info"
            className="border w-96 rounded px-16 py-8 bg-white text-xl"
          >
            <h1>Alexander Ho</h1>
            <p>University of North Carolina Alumni</p>
            <p>B.S. Computer Science</p>
            <p>Music Minor</p>
          </div>
        </section>
      </section>
      <section id="about-me-paragraphs" className="mt-8 text-left leading-3">
        <p className="p-4">
          Growing up, I was always captivated by creating projects with my
          hands. Puzzles, K'nex building sets, and the like caught my attention.
          I would spend hours working with a detailed eye placing pieces
          together. Puzzles are still one of my favorite pastimes, where I can
          listen to enticing albums or podcasts while at work.
        </p>
        <p className="p-4">
          I discovered software development in high school where it fascinated
          my logical and creative sides. Thus I pursued and achieved a
          Bachelor's of Science in Computer Science with a minor in Music from
          the University of North Carolina in 2022. During my undergraduate
          career, I learned that time is very precious and to use it between my
          peers, family, friends, and myself. Quickly learning my development
          skills allowed to me an active contributor to group projects.
        </p>
        <p className="p-4">
          One of my favorite projects was Rocket League Statistics. My team and
          I leveraged the ballchasing API to compile data from both professional
          and collegiate Rocket League matches into a table. Users were able to
          search the dynamic table for their favorite players and teams to
          compare various statistics. We added user authentication and the
          option for them to favorite players and teams and pool them into a
          personalized list. Players and teams also had pop-up info cards that
          held their nationality and team history.
        </p>
        <p className="p-4">
          Another project that I enjoyed was a web application for Promised Land
          Journey, a game developed by Ancient Path Adventures (APA). We
          developed a platform where APA could create modules stored in a
          database. These example modules consisted of quizzes, videos, and
          readings. After paying subscription to use APA's services, teachers
          could use these modules or they wanted make their own. Teachers could
          then set up classes and assigned the modules for students to take.
          Students could then join the classes through randomly generated access
          codes.
        </p>
        <p className="p-4">
          Outside of my technical skills, I enjoy dabbling in other creative
          avenues. Being a former percussionist, I maintain and grow my musical
          skills with drumming and playing handbells with the nearby church.
          I've also been developing my listening and composition skills on the
          side. Cooking helps me connect with my Vietnamese heritage and is
          something I want to share with my friends and future family. The
          newest of my hobbies is 3D rendering, where I've followed the Blender
          Guru's tutorial on a donut animation and plan on bringing places I've
          been into the digital world.
        </p>
      </section>
    </>
  );
}
export default AboutMe;
