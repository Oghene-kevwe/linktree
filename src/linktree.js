import { Home } from "./homepage";
import { Footer } from "./components/footer";
import { Contact } from "./components/contacts";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// CSS
import "./index.css";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact/>} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
};
