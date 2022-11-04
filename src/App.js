import { Profile } from "./pages/profile";
import { Link } from "./pages/link";
import { SocialIcons } from "./social-icons";
import { Footer } from "./pages/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// CSS
import "./index.css";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="link" element={<Link />} />
        <Route path=" " element={<SocialIcons />} />
        <Route path="/" element={<Footer />} />
        {/* <main>
      <Profile />
      <Link />
      <SocialIcons />
      <Footer/>
    </main> */}
      </Routes>
    </BrowserRouter>
  );
};
