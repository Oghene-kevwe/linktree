import { Link } from "react-router-dom";

export const Links = () => {
  const data = [
    {
      id: "twitter",
      link: "https://twitter.com/PraiseIdise",
      name: "Twitter link",
    },
    { id: "btn__zuri", link: "https://training.zuri.team/", name: "zuri team" },
    {
      id: "books",
      link: "http://books.zuri.team/",
      name: "zuri books",
      title: "this is where you find books about design and coding",
    },
    {
      id: "book__python",
      link: "https://books.zuri.team/python-for-beginners?ref_id=<idise praise>",
      title:
        "The HNG Python Book gives you the tips & guidelines you need to help you grow and advance your tech careers",
      name: " python books",
    },
    {
      id: "pitch",
      link: "https://background.zuri.team/",
      title:
        "Skill2Hire is an online platform that allows you to run background checks on coders and hire a freelancer with the necessary skill set for your job",
      name: " background check for coders",
    },
    {
      id: "book_design",
      link: "https://books.zuri.team/design-rules",
      title:
        "The HNG Design Rules Book gives you the tips & guidelines you need to create truly professional designs, by addressing errors that could you get you disqualified",
      name: "design books",
    },
  ];

  return (
    <section className="links-container">
      {data.map(({ id, link, title, name }) => {
        return (
          <a 
          key={id}
            href={link}
            className="link-btn"
            id={id}
            target="_blank"
            title={title}
          >
            {name}
          </a>
        );
      })}

      {/* contact */}
      <Link to="/contact" className="link-btn" id="contact">
        contact
      </Link>
    </section>
  );
};
