function PDFViewer({ file }) {
  return (
    <div className="pdf w-full h-3/4 md:h-screen">
      <object
        data={file}
        type="application/pdf"
        width={"80%"}
        height={"100%"}
        className="m-auto"
      >
        <p>
          Unable to display PDF file. <a href={file}>Document</a>
        </p>
      </object>
    </div>
  );
}
export default PDFViewer;
