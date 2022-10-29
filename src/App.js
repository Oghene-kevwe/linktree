import { ReactDOM } from "react";
import { Profile } from "./profile";
import { Link } from "./link";
import { SocialIcons } from "./social-icons";
import { Footer } from "./footer";

// CSS
import "./index.css";

export const App = () => {
  return (
    <main>
      <Profile />
      <Link />
      <SocialIcons />
      <Footer/>
    </main>
  );
};
