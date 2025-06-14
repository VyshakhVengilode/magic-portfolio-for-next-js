"use client";
import styles from "./PersonalFavorites.module.css";

const favorites = [
  {
    category: "Movie",
    title: "നരിവേട്ട (Narivetta)",
    img: "https://assetscdn1.paytm.com/images/cinema/Naviretta-e011a720-2a57-11f0-bd90-d94369f6f4ca.jpg?format=webp",
    description: "ഭൂമിയുടെ അവകാശികളെ കുറിച്ച് ചിന്തിപ്പിക്കുന്ന സിനിമ. മുത്തങ്ങ സംഭവം ആരും മറക്കുന്ന ഒന്നല്ല. നിരന്തരം ആദിവാസി സമൂഹം നേരിടേണ്ടി വരുന്ന നീതി നിഷേധത്തെ കുറിച്ച് ചർച്ച ചെയ്യാൻ പ്രേരിപ്പിച്ച കലാസൃഷ്ട്ടി. കാട് സർക്കാരെടുത്തപ്പോൾ കയ്യേറ്റക്കാരായി മാറിയ കാടിന്റെ താളം അറിയുന്ന കുറേ മനുഷ്യർ ഇന്നുമിവിടെ ഉണ്ടെന്ന അടയാളപ്പെടുത്തൽ. അയ്യങ്കാളി പടയെ ചിത്രീകരിച്ച 'പട' എന്ന സിനിമയ്‌ക്കൊപ്പം വെക്കാവുന്ന ഒന്ന്.",
    link: "https://en.wikipedia.org/wiki/Narivetta"
  },
  {
    category: "Movie",
    title: "കുമ്പളങ്ങി നൈറ്റ്സ് (Kumbalangi Nights)",
    img: "https://m3db.com/sites/default/files/styles/poster_node_copy/public/posters/kumbalangi%20nights_0.jpg?itok=lkEKl5sc",
    description: "Kumbalangi Nightsന്റെ ഹൃദയസ്പർശിയായ കഥയും ദൃശ്യഭംഗിയും എന്നെ എപ്പോഴും പ്രചോദിപ്പിക്കുന്നു!",
    link: "https://letterboxd.com/film/kumbalangi-nights/"
  },
  {
    category: "Movie",
    title: "All We Imagine as Light",
    img: "https://upload.wikimedia.org/wikipedia/en/1/1c/All_We_Imagine_as_Light_film_poster.jpg",
    description: "Not strictly Malayalam, but featuring Kani Kusruti and Divya Prabha—beautifully connects with my love for nuanced cinema.",
    link: "https://letterboxd.com/film/all-we-imagine-as-light/"
  },
  {
    category: "Book",
    title: "രണ്ടാമൂഴം (Randamoozham)",
    img: "https://images-na.ssl-images-amazon.com/images/I/81J6jwhjE0L.jpg",
    description: "Randamoozham reimagines the Mahabharata with such depth—it’s a storytelling masterpiece.",
    link: "https://www.goodreads.com/book/show/1792052.Randamoozham"
  },
  {
    category: "Book",
    title: "ആരാച്ചാര്‍ (Aarachaar)",
    img: "https://images-na.ssl-images-amazon.com/images/I/81wXw0V1Y6L.jpg",
    description: "Aarachaar portrays strong women and social realities—K.R. Meera’s writing is powerful and moving.",
    link: "https://www.goodreads.com/book/show/23360715-aarachaar"
  },
  {
    category: "Book",
    title: "ചെമ്മീൻ (Chemmeen)",
    img: "https://images-na.ssl-images-amazon.com/images/I/81h1Qv4OQ8L.jpg",
    description: "A classic love story set against Kerala’s coastal life—its poetic style is unforgettable.",
    link: "https://www.goodreads.com/book/show/1144869.Chemmeen"
  },
  {
    category: "TV",
    title: "ഉപ്പും മുളക്‌ (Uppum Mulakum)",
    img: "https://m.media-amazon.com/images/I/61zV3SA6yNL._AC_SY679_.jpg",
    description: "A lighthearted sitcom that captures Malayali family life with humor and warmth.",
    link: "https://www.hotstar.com/in/tv/uppum-mulakum/1000095125"
  },
  {
    category: "TV",
    title: "Bigg Boss Malayalam",
    img: "https://m.media-amazon.com/images/I/71Kzv6gD2cL._AC_SY679_.jpg",
    description: "Reality TV at its best—full of drama, surprises, and a window into diverse personalities.",
    link: "https://www.hotstar.com/in/tv/bigg-boss-malayalam/1260014874"
  },
  {
    category: "TV",
    title: "Kerala Crime Files",
    img: "https://assets.gadgets360cdn.com/pricee/assets/product/202306/Kerala-Crime-Files_1687342611.jpg",
    description: "A gripping OTT series that explores crime in Kerala with realistic storytelling.",
    link: "https://www.hotstar.com/in/shows/kerala-crime-files/1260149721"
  }
];

const nowEnjoying = [
  favorites[1], // Kumbalangi Nights
  favorites[3], // Randamoozham
  favorites[8], // Kerala Crime Files
];

const SectionIntro = () => (
  <div className={styles.sectionIntro}>
    <h2 className={styles.malayalamTitle}>
      എന്റെ പ്രിയപ്പെട്ട മലയാള സിനിമകളും പുസ്തകങ്ങളും ടിവി ഷോകളും
    </h2>
    <p className={styles.introEn}>
      These Malayalam movies, books, and TV shows inspire my creativity and reflect my cultural roots.
    </p>
  </div>
);

const NowEnjoyingCarousel = () => {
  const [index, setIndex] = (typeof window !== "undefined" && require('react').useState) ? require('react').useState(0) : [0, () => {}];
  const next = () => setIndex((index + 1) % nowEnjoying.length);
  const prev = () => setIndex((index - 1 + nowEnjoying.length) % nowEnjoying.length);

  return (
    <div className={styles.carouselContainer}>
      <h3 className={styles.carouselTitle}>ഇപ്പോൾ ആസ്വദിക്കുന്നു (Now Enjoying)</h3>
      <div>
        <img
          src={nowEnjoying[index].img}
          alt={nowEnjoying[index].title}
          className={styles.carouselImg}
        />
        <div className={styles.carouselItemTitle}>
          {nowEnjoying[index].title}
        </div>
        <div className={styles.carouselDesc}>
          {nowEnjoying[index].description}
        </div>
        <a
          href={nowEnjoying[index].link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.carouselLink}
        >
          See more
        </a>
      </div>
      <div className={styles.carouselNav}>
        <button onClick={prev} className={styles.carouselBtn}>‹</button>
        <button onClick={next} className={styles.carouselBtn}>›</button>
      </div>
    </div>
  );
};

const Card = ({item}: {item: typeof favorites[0]}) => (
  <div className={styles.card}>
    <img
      src={item.img}
      alt={item.title}
      className={styles.cardImg}
    />
    <div className={styles.cardTitle}>{item.title}</div>
    <div className={styles.cardDesc}>{item.description}</div>
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.cardLink}
    >
      More info
    </a>
  </div>
);

const PersonalFavorites = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <SectionIntro />
      <NowEnjoyingCarousel />
      <div className={styles.grid}>
        {favorites.map((item, idx) => (
          <Card item={item} key={item.title + idx} />
        ))}
      </div>
      <div className={styles.seeMore}>
        <a href="/favorites" className={styles.seeMoreLink}>
          കൂടുതൽ കാണുക (See More)
        </a>
      </div>
    </div>
  </section>
);

export default PersonalFavorites;
