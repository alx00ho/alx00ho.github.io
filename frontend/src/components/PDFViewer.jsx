import { pdfjs, Document, Page } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

function PDFViewer({ file }) {
  return (
    <Document file={file} className="m-auto">
      <Page
        pageNumber={1}
        renderAnnotationLayer={false}
        renderTextLayer={false}
        canvasBackground="transparent"
      />
    </Document>
  );
}
export default PDFViewer;
