import React from "react";
import Header from "../components/layouts/header";
import SectionPg from "../components/sectionpage";
import Footer from "../components/layouts/footer";
import TOf from "../assets/image.jpg";
import Images from "../assets/about.jpg";
const About: React.FC = () => {
  const texte =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Someone famous in Source Title. Fusce dapibus, tellus accursus commodo, tortor mauris condimentum nibh, ut fermentum massa justosit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Integer posuere erat a ante. Someone famous in Source TitleLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Someone famous in Source Title. Fusce dapibus, tellus accursus commodo, tortor mauris condimentum nibh, ut fermentum massa justosit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Integer posuere erat a ante. Someone famous in Source TitleLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Someone famous in Source Title. Fusce dapibus, tellus accursus commodo, tortor mauris condimentum nibh, ut fermentum massa justosit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Integer posuere erat a ante. Someone famous in Source TitleLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Someone famous in Source Title. Fusce dapibus, tellus accursus commodo, tortor mauris condimentum nibh, ut fermentum massa justosit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Integer posuere erat a ante. Someone famous in Source Title. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Integer posuere erat a ante. Someone famous in Source TitleLorem ipsum dolor sit amet, consectetur adipiscing elit.Integer posuere erat a ante. Someone famous in Source TitleLorem ipsum dolor sit amet, consectetur adipiscing elit.Integer posuere erat a ante. Someone famous in Source TitleLorem ipsum dolor sit amet, consectetur adipiscing elit.Integer posuere erat a ante. Someone famous in Source TitleLorem ipsum dolor sit amet, consectetur adipiscing elit.Integer posuere erat a ante. Someone famous in Source Title Lorem ipsum dolor sit amet, consectetur adipiscing elit.Integer posuere erat a ante. Someone famous in Source TitleLorem ipsum dolor sit amet, consectetur adipiscing elit.Integer posuere erat a ante. Someone famous in Source TitleLorem ipsum dolor sit amet, consectetur adipiscing elit.Integer posuere erat a ante. Someone famous in Source TitleLorem ipsum dolor sit amet, consectetur adipiscing elit.Integer posuere erat a ante. Someone famous in Source Title";
  return (
    <>
      <Header />
      <SectionPg imageSrc={TOf} title="À propos de moi" />
      <div className="container mx-auto p-4 my-20">
        <img
          src={Images}
          alt="Description"
          className="float-left mr-9 w-1/3 lg:h-72 h-36"
        />

        <p className="text-lg">{texte}</p>
      </div>
      <Footer></Footer>
    </>
  );
};

export default About;
