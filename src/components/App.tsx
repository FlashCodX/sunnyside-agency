import { AiOutlineInstagram } from "react-icons/ai";
import styles from "./styles/app.module.css";

import gallery_milk from "../assets/desktop/image-gallery-milkbottles.jpg";
import gallery_orange from "../assets/desktop/image-gallery-orange.jpg";
import gallery_cone from "../assets/desktop/image-gallery-cone.jpg";
import gallery_sugarcubes from "../assets/desktop/image-gallery-suggarcubes.jpg";
import milk from "../assets/desktop/image-gallery-milkbottles.jpg";
import milk from "../assets/desktop/image-gallery-milkbottles.jpg";

function App() {
  const {
    container,
    socials,
    bannerCard,
    cardsContainer,
    card,
    cardAM,
    testimonials,
    testimonial,
    author,
    galery,
    footerContent,
    links,
  } = styles;
  return (
    <main className={container}>
      <div className={bannerCard}>
        <h1>We are Creatives</h1>
        <img src={orange} alt="orange" />
      </div>
      <div className={cardsContainer}>
        <div className={card}>
          <h1>Transfor yout brand</h1>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a href="/">Learn More</a>
        </div>

        <div className={card}>
          <img src={egg} alt="egg" />
        </div>

        <div className={card}>
          <img src={lamp} alt="lamp" />
        </div>

        <div className={card}>
          <h1>Stand out to the right audience</h1>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <a href="/">Learn More</a>
        </div>

        <div className={cardAM}>
          <h1>Stand out to the right audience</h1>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <a href="/">Learn More</a>
        </div>

        <div className={cardAM}>
          <h1>Stand out to the right audience</h1>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <img src={lamp} alt="lamp" />
        </div>
        <div className={cardAM}>
          <h1>Stand out to the right audience</h1>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <img src={lamp} alt="lamp" />
        </div>
      </div>

      <div className={testimonials}>
        <h1>Client Testimonials</h1>
        <div className={testimonial}>
          <img src={user} alt="userImage" />
          <p></p>
          <div className={author}>
            <h1></h1>
            <p></p>
          </div>
        </div>

        <div className={testimonial}>
          <img src={user} alt="userImage" />
          <p></p>
          <div className={author}>
            <h1></h1>
            <p></p>
          </div>
        </div>

        <div className={testimonial}>
          <img src={user} alt="userImage" />
          <p></p>
          <div className={author}>
            <h1></h1>
            <p></p>
          </div>
        </div>
      </div>

      <div className={galery}>
        <img src={} alt="galeryPhoto" />
        <img src={} alt="galeryPhoto" />
        <img src={} alt="galeryPhoto" />
        <img src={} alt="galeryPhoto" />
      </div>

      <div className={footerContent}>
        <h1>sunnyside</h1>
        <div className={links}>
          <a href="/">About</a>
          <a href="/">Services</a>
          <a href="/">Projects</a>
        </div>

        <div className={socials}>
          <AiOutlineInstagram />
          <AiOutlineInstagram />
          <AiOutlineInstagram />
          <AiOutlineInstagram />
        </div>
      </div>
    </main>
  );
}

export default App;
