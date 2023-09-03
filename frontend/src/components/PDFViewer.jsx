function PDFViewer({ file }) {
  return (
    <object data={file} type="application/pdf" width="100%" height="1080px">
      <p>
        Unable to display PDF file. <a href={file}>Document</a>
      </p>
    </object>
  );
}
export default PDFViewer;
