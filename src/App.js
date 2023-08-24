import "./App.css";
import Footer from "./components/Footer";
import Form from "./components/Form";

function App() {
  return (
    <>
      <div className="container my-5">
        <Form />
      </div>
      <div className="d-flex flex-column">
        {/* Your main content */}
        <div className="flex-grow-1">{/* Your content here */}</div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
