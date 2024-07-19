import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./main/Home";
import AboutProduct from "./main/AboutProduct";
// import About from "./main/About";
import FAQs from "./main/FAQs";
import ErrorPage from "./main/ErrorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<AboutProduct />} />
      {/* <Route path="/about" element={<About />} /> */}
      <Route path="/faqs" element={<FAQs />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
