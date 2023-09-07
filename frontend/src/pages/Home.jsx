import ReceptionImg from "../images/Reception.png";

function Home() {
  return (
    <>
      <section id="home-top">
        <div className="container space-y-8 flex flex-col items-center justify-center md:flex-row md:space-x-16">
          <div className="w-3/4 md:w-96">
            <img
              src={ReceptionImg}
              alt="Img of Alexander and his significant other"
              id="home-photo"
              className="w-96 rounded"
            />
          </div>
          <div
            id="home-intro"
            className="border w-15/16 md:w-96 rounded px-8 md:px-16 py-8 bg-white"
          >
            <h1 className="text-2xl md:text-3xl">Hello!</h1>
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
