import AHResume from "frontendsrc\filesAlexanderHoResume.pdf";
import PDFViewer from "../components/PDFViewer";

function Resume() {
  return (
    <>
      <section id="resume" className="container">
        <PDFViewer file={AHResume} />
      </section>
      <div id="download-resume">
        <a
          href={AHResume}
          download="AlexanderHoResume.pdf"
          className="btn border m-auto mt-8 px-4 py-2 text-xl rounded bg-gray-500 text-white"
          target="react/jsx-no-target-blank"
        >
          Download
        </a>
      </div>
    </>
  );
}

export default Resume;
