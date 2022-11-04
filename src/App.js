import { Home } from "./homepage";
import { Profile } from "./components/profile";
import { SocialIcons } from "./components/social-icons";
import { Footer } from "./components/footer";
import { Links } from "./components/links";
import { Contact } from "./components/contacts";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// CSS
import "./index.css";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
        </Route>
          <Route path="contact" element={<Contact/>} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
};
