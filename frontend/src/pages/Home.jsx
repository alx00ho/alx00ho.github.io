import ReceptionImg from "../images/Reception.png";

function Home() {
  return (
    <>
      <section id="home-top">
        <div className="container flex items-center justify-center space-x-16">
          <div className="w-96">
            <img
              src={ReceptionImg}
              alt="Img of Alexander and his significant other"
              id="home-photo"
              className="w-96 rounded flex-initial"
            />
          </div>
          <div
            id="home-intro"
            className="border w-96 rounded px-16 py-8 bg-white"
          >
            <h1 className="text-3xl">Hello!</h1>
            <p className="text-xl">
              I'm Alex, a Vietnamese-American developer based in Chapel Hill,
              North Carolina.
            </p>
          </div>
        </div>
      </section>
      <section id="home-gallery"></section>
    </>
  );
}
export default Home;
