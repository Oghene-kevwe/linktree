import { Link } from "react-router-dom";

export const Links = () => {
  return (
    <section className="links-container">
      {/* twitter */}
      <a href="#" className="link-btn" >
        <span>Twitter link</span>
      </a>
      {/* zuri team */}
      <a
        href="https://training.zuri.team/"
        className="link-btn"
        id="btn__zuri"
        target="_blank"
      >
        zuri team
      </a>
      {/* zuri books */}
      <a
        href="http://books.zuri.team/"
        className="link-btn"
        id="books"
        target="_blank"
        title="this is where you find books about design and coding"
      >
        zuri books
      </a>
      {/* python books */}
      <a
        href="https://books.zuri.team/python-for-beginners?ref_id=<idise praise> "
        className="link-btn"
        id="book__python"
        title="The HNG Python Book gives you the tips & guidelines you need to help you grow and advance your tech careers"
        target="_blank"
      >
        python books
      </a>
      {/* background check */}
      <a
        href="https://background.zuri.team/"
        className="link-btn"
        id="pitch"
        title="Skill2Hire is an online platform that allows you to run background checks on coders and hire a freelancer with the necessary skill set for your job"
        target="_blank"
      >
        background check for coders
      </a>
      {/* book design */}
      <a
        href="https://books.zuri.team/design-rules"
        className="link-btn"
        id="book_design"
        title="The HNG Design Rules Book gives you the tips & guidelines you need to create truly professional designs, by addressing errors that could you get you disqualified"
        target="_blank"
      >
        design books
      </a>
      {/* contact */}
      <Link to='/contact'  className="link-btn" id="contact">contact</Link>
    </section>
  );
};
