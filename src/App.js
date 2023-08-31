// import "./App.css";
import Footer from "./components/Footer.js";
import Form from "./components/Form.js";
import Index from "./components/Index.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shrandhanjali from "./components/Shrandhanjali.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container mt-5">
          <Routes>
            <Route path="/" exact element={<Index />} />
          </Routes>
          <Routes>
            <Route
              path="/shradhanjali-poster"
              exact
              element={<Shrandhanjali />}
            />
          </Routes>
        </div>
        <Routes>
          <Route path="/besana-poster" exact element={<Form />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
