import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./main/Home";
import AboutProduct from "./main/AboutProduct";
import FAQs from "./main/FAQs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<AboutProduct />} />
      <Route path="/faqs" element={<FAQs />} />
    </Routes>
  );
}

export default App;
