import "./App.css";
import { useEffect, useState } from "react";
import { SiThemoviedatabase } from "react-icons/si";
import { RiSlideshow4Fill } from "react-icons/ri";
import { IoSearchCircle } from "react-icons/io5";


function App() {
  let rawData = [
    {
      title: "Siren",
      censor: "U/A",
      lang: "Tamil",
      likeperct: "91",
      format: "3D",
      genres: "Thriller",
      img: "https://tamil.filmibeat.com/img/2023/09/newproject-2023-09-10t123612-397-1694329576.jpg",
      desc: "A gripping Tamil thriller set in the backdrop of a coastal town, where a mysterious siren's call leads to a series of unsettling events.",
    },
    {
      title: "Lal Salam",
      censor: "U/A",
      lang: "Tamil",
      likeperct: "91",
      format: "3D",
      genres: "Comedy",
      img: "https://m.media-amazon.com/images/M/MV5BNmFlYzYzZWEtZjZlNy00ZDIyLTljMTMtMTY3YWI0MmVkODQ1XkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_FMjpg_UX1000_.jpg",
      desc: "A rib-tickling Tamil comedy that follows the misadventures of a group of friends as they navigate through love, laughter, and chaos.",
    },
    {
      title: "Mystery Island",
      censor: "U",
      lang: "English",
      likeperct: "85",
      format: "2D",
      genres: "Mystery",
      img: "https://m.media-amazon.com/images/M/MV5BNzczMzE5MzUtZWU5MS00MDc2LTgxYWYtMWVkM2Q3ZTQzZTQyXkEyXkFqcGdeQXVyMTU4MzQzNDkx._V1_FMjpg_UX1000_.jpg",
      desc: "An intriguing English mystery that unfolds on a remote island, where a group of strangers find themselves entangled in a web of secrets and deception.",
    },
    {
      title: "The Secret Code",
      censor: "A",
      lang: "English",
      likeperct: "78",
      format: "2D",
      genres: "Action",
      img: "https://www.themoviedb.org/t/p/w500/3xutijME8Emqau69NRUjxVE6rmK.jpg",
      desc: "An adrenaline-pumping English action film that follows a skilled operative as he races against time to decipher a deadly code and prevent catastrophe.",
    },
    {
      title: "Lost in Time",
      censor: "U",
      lang: "French",
      likeperct: "90",
      format: "3D",
      genres: "Adventure",
      img: "https://vhscollector.com/sites/default/files/vhsimages/16671_lostintime-1%2520%2528VHSCollector.com%2529%2520.jpg",
      desc: "A captivating French adventure that transports viewers through time and space, as a courageous explorer embarks on a quest to unlock the mysteries of a lost civilization.",
    },
    {
      title: "Laugh Riot",
      censor: "U/A",
      lang: "English",
      likeperct: "88",
      format: "2D",
      genres: "Comedy",
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/77d54633947006.56bdd3b335438.jpg",
      desc: "An uproarious English comedy that delivers non-stop laughs, as a group of eccentric characters find themselves in hilariously absurd situations.",
    },
    {
      title: "Midnight Madness",
      censor: "U/A",
      lang: "English",
      likeperct: "83",
      format: "3D",
      genres: "Horror",
      img: "https://haphazardstuff.com/wp-content/uploads/2017/03/Midnight-Madness-1980-movie-poster.jpg",
      desc: "A spine-chilling English horror film set in the eerie confines of a haunted mansion, where unsuspecting victims become prey to supernatural forces.",
    },
    {
      title: "Spy Games",
      censor: "A",
      lang: "English",
      likeperct: "82",
      format: "2D",
      genres: "Thriller",
      img: "https://image.tmdb.org/t/p/original/6y8M1rxjKofQCRKKe6xeV91K2Fc.jpg",
      desc: "An intense English thriller that delves into the world of espionage, betrayal, and high-stakes espionage as spies play a dangerous game of cat and mouse.",
    },
    {
      title: "Funny Business",
      censor: "U",
      lang: "English",
      likeperct: "87",
      format: "2D",
      genres: "Comedy",
      img: "https://summerhillfilms.com/wp-content/uploads/2014/10/Funny-Business-poster.jpg",
      desc: "A side-splitting English comedy that follows the zany antics of a group of aspiring comedians as they navigate the unpredictable world of showbiz.",
    },
    {
      title: "Underwater",
      censor: "U/A",
      lang: "English",
      likeperct: "89",
      format: "3D",
      genres: "Sci-Fi",
      img: "https://www.themoviedb.org/t/p/w440_and_h660_face/kRffPXPAD1tvWLMrqQJ0GVj8jKj.jpg",
      desc: "An immersive English sci-fi adventure that plunges viewers into the depths of the ocean, where a team of researchers must fight for survival against unknown terrors lurking beneath.",
    },
    {
      title: "Desert Adventure",
      censor: "U",
      lang: "English",
      likeperct: "80",
      format: "2D",
      genres: "Adventure",
      img: "https://i.pinimg.com/736x/94/7a/e3/947ae3c581111a5b4848100cf239e6ee--film-review-documentaries.jpg",
      desc: "An action-packed English adventure that follows a daring expedition across the unforgiving desert sands, where danger lurks at every turn and ancient secrets await discovery.",
    },
    {
      title: "Love in Paris",
      censor: "U/A",
      lang: "French",
      likeperct: "92",
      format: "3D",
      genres: "Romance",
      img: "https://fr.web.img3.acsta.net/medias/nmedia/18/67/83/15/18999091.jpg",
      desc: "A heartwarming French romance that blossoms amidst the enchanting streets of Paris, where love transcends cultural barriers and sweeps two souls into a whirlwind of passion.",
    },
    {
      title: "The Great Heist",
      censor: "A",
      lang: "English",
      likeperct: "79",
      format: "2D",
      genres: "Action",
      img: "https://www.themoviedb.org/t/p/original/j52EFofX8hCoenmvDC4AOppoPWu.jpg",
      desc: "An electrifying English action thriller that unfolds in the heart of a bustling metropolis, where a band of skilled criminals execute a daring heist that could change everything.",
    },
    {
      title: "Mind Games",
      censor: "A",
      lang: "English",
      likeperct: "84",
      format: "3D",
      genres: "Thriller",
      img: "https://flxt.tmsimg.com/assets/p9976815_b_v8_ad.jpg",
      desc: "A mind-bending English thriller that challenges perception and reality, as a brilliant but tormented detective delves into the depths of the human psyche to solve a series of baffling crimes.",
    },
    {
      title: "Dreamland",
      censor: "U",
      lang: "English",
      likeperct: "86",
      format: "2D",
      genres: "Fantasy",
      img: "https://fr.web.img6.acsta.net/pictures/20/11/06/09/04/1263894.jpg",
      desc: "An enchanting English fantasy that transports viewers to a realm of dreams and magic, where anything is possible and the boundaries between reality and imagination blur.",
    },
    {
      title: "Hollywood Nights",
      censor: "U/A",
      lang: "English",
      likeperct: "90",
      format: "3D",
      genres: "Drama",
      img: "https://tse3.explicit.bing.net/th?id=OIP.RSxVZZR3gl-x5u3Q3GLavwHaKj&pid=Api&P=0&h=180",
      desc: "A captivating English drama that unfolds under the dazzling lights of Hollywood, where dreams are made and shattered amidst the glitz and glamour of the entertainment industry.",
    },
    {
      title: "Haunted Mansion",
      censor: "A",
      lang: "English",
      likeperct: "81",
      format: "2D",
      genres: "Horror",
      img: "https://www.themoviedb.org/t/p/original/hzhIk8oQUZAOR6vNb6DEDPBOseR.jpg",
      desc: "A chilling English horror that beckons brave souls to explore the eerie corridors of a haunted mansion, where vengeful spirits and malevolent forces lurk in the shadows.",
    },
    {
      title: "City of Lights",
      censor: "U/A",
      lang: "English",
      likeperct: "88",
      format: "3D",
      genres: "Romance",
      img: "https://i.pinimg.com/originals/df/76/12/df7612420008a57380f3b84ba429a702.jpg",
      desc: "A romantic English drama that unfolds against the mesmerizing backdrop of a vibrant city, where love blossoms amidst the hustle and bustle of urban life.",
    },
    {
      title: "Gangster's Paradise",
      censor: "A",
      lang: "English",
      likeperct: "77",
      format: "2D",
      genres: "Action",
      img: "https://collider.com/wp-content/uploads/gangster_paradise_jerusalema_movie_poster.jpg",
      desc: "A gritty English action thriller that takes viewers on a pulse-pounding journey through the criminal underworld, where alliances are forged and betrayals run deep.",
    },
    {
      title: "Chaos Theory",
      censor: "U",
      lang: "English",
      likeperct: "82",
      format: "2D",
      genres: "Sci-Fi",
      img: "https://www.themoviedb.org/t/p/original/iP4DJqTeMMQJ3J0eyt2RjRH6NZH.jpg",
      desc: "A mind-bending English sci-fi that explores the chaos of alternate realities, where the fabric of space and time is torn asunder by the whims of fate and the machinations of science.",
    },
    {
      title: "Pirate's Cove",
      censor: "U/A",
      lang: "English",
      likeperct: "85",
      format: "3D",
      genres: "Adventure",
      img: "https://www.themoviedb.org/t/p/original/id767v9yjqsFFdFcp3NirfvlsdP.jpg",
      desc: "A thrilling English adventure that sets sail on the high seas, where swashbuckling pirates and treacherous waters await brave souls seeking fortune and glory.",
    },
    {
      title: "Comedy Central",
      censor: "U",
      lang: "English",
      likeperct: "87",
      format: "2D",
      genres: "Comedy",
      img: "https://artworks.thetvdb.com/banners/posters/82186-1.jpg",
      desc: "A riotous English comedy extravaganza that brings together the funniest comedians for a laugh-out-loud spectacle that's guaranteed to tickle your funny bone.",
    },
    {
      title: "Ice Age",
      censor: "U",
      lang: "English",
      likeperct: "83",
      format: "3D",
      genres: "Animation",
      img: "https://picfiles.alphacoders.com/363/363448.jpg",
      desc: "A delightful English animated adventure that takes audiences on a journey through prehistory, where unlikely heroes must band together to survive the icy grip of the last Ice Age.",
    },
    {
      title: "Kingdom of Dreams",
      censor: "U/A",
      lang: "English",
      likeperct: "91",
      format: "2D",
      genres: "Fantasy",
      img: "https://tse4.mm.bing.net/th?id=OIP.8Td5nD_ItkGMlI77JAbDTgAAAA&pid=Api&P=0&h=180",
      desc: "An enchanting English fantasy that transports viewers to a magical kingdom where dreams come to life, and every corner is filled with wonder and adventure.",
    },
    {
      title: "Futuristic City",
      censor: "A",
      lang: "English",
      likeperct: "80",
      format: "3D",
      genres: "Sci-Fi",
      img: "https://i.pinimg.com/originals/6e/d4/c7/6ed4c7a468f89099e3dda7bf5180a512.jpg",
      desc: "A visionary English sci-fi epic that paints a vivid portrait of a future metropolis, where technology and humanity collide in a dazzling display of innovation and imagination.",
    },
    {
      title: "Murder Mystery",
      censor: "A",
      lang: "English",
      likeperct: "79",
      format: "2D",
      genres: "Mystery",
      img: "https://www.themoviedb.org/t/p/original/bNd2pMXr0ziBpH6Rv8TLxqtsAuB.jpg",
      desc: "A gripping English mystery that unfolds in the shadowy alleys of a city gripped by fear, where a relentless detective must unravel the clues to solve a series of grisly murders.",
    },
    {
      title: "The Last Samurai",
      censor: "U/A",
      lang: "English",
      likeperct: "88",
      format: "3D",
      genres: "Action",
      img: "https://i.pinimg.com/originals/cd/d4/1f/cdd41fe60ffb4c361fa657e2b47acf0f.jpg",
      desc: "A breathtaking English action epic set against the backdrop of feudal Japan, where honor and duty collide in a clash of swords and souls in the twilight of an era.",
    },
    {
      title: "Space Odyssey",
      censor: "U",
      lang: "English",
      likeperct: "85",
      format: "2D",
      genres: "Sci-Fi",
      img: "https://cdn.shopify.com/s/files/1/1057/4964/products/2001-a-space-odyssey-vintage-movie-poster-original-1-sheet-27x41-8025_1800x.progressive.jpg?v=1535853422",
      desc: "A groundbreaking English sci-fi odyssey that ventures into the far reaches of the cosmos, where humanity's destiny awaits amidst the stars and the unknown wonders of the universe.",
    },
    {
      title: "Fantasy Island",
      censor: "U",
      lang: "English",
      likeperct: "84",
      format: "3D",
      genres: "Fantasy",
      img: "https://picfiles.alphacoders.com/351/thumb-1920-351483.jpg",
      desc: "An enchanting English fantasy that transports viewers to a mystical island where dreams become reality and the line between fantasy and truth blurs into a magical tapestry of wonder.",
    },
  ];

  const [movieData, setMovieData] = useState(rawData);

  const [dupData, setDupData] = useState(rawData);

  const [searchInput, setSearchInput] = useState("");

  let langList = movieData.map((item) => item.lang);
  langList = [...new Set(langList)];

  let genreList = movieData.map((item) => item.genres);
  genreList = [...new Set(genreList)];

  let formatList = movieData.map((item) => item.format);
  formatList = [...new Set(formatList)];

  useEffect(() => {
    setDupData(movieData);
  }, movieData);

  //random bg on evry reload
  const backgrounds = rawData.map((item) => item.img);

  const [backgroundImage, setBackgroundImage] = useState("");

  const selectRandomBackground = () => {
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    return backgrounds[randomIndex];
  };
  useEffect(() => {
    const randomBackground = selectRandomBackground();
    setBackgroundImage(randomBackground);
  }, []);

  const onSearch = (e) => {
    setDupData(
      movieData.filter(
        (item) =>
          item.title.toLowerCase().includes(e.toLowerCase()) ||
          item.lang.toLowerCase().includes(e.toLowerCase()) ||
          item.genres.toLowerCase().includes(e.toLowerCase())
      )
    );
  };

  const onSort = (e) => {
    let newList = [];

    let val = e.target.value;

    if (val === "asc") {
      newList = [...movieData].sort((a, b) => a.likeperct - b.likeperct);
    } else if (val === "desc") {
      newList = [...movieData].sort((b, a) => a.likeperct - b.likeperct);
    } else {
      setDupData(movieData);
      return;
    }

    setDupData(newList);
  };

  const onLangSelect = (item) => {
    setDupData(movieData.filter((a) => a.lang === item));
  };

  const onGenreSelect = (item) => {
    if (item === "none"){
      setDupData(movieData);
    }
    setDupData(movieData.filter((a) => a.genres === item));
  };

  const onFormatSelect = (item) => {
    setDupData(movieData.filter((a) => a.format === item));
  };
  const resetDisplay = ()=>{
    setDupData(movieData);
  }
  

  // style={{
  //   backgroundImage: `url(${backgroundImage})`,
  //   backgroundSize: 'cover',
  //   backgroundRepeat: 'no-repeat'
  //   }}

  return (
    <div className="container-fluid p-0 ">
      {/* navbar */}
      <div className="p-0 mt-2 col-12 px-2 fixed-top">
        <nav className="navbar nav-rounder navbar-expand-lg navbar-light  p-2">
          <a className="navbar-brand ml-4 nav-name" href="#">
            <SiThemoviedatabase size="44" color="white"  className="mr-3 p-0" />
            Movie Book
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active ml-1">
                <a className="nav-link" href="#">
                  Home{" "}
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link " href="#">
                  <RiSlideshow4Fill />
                </a>
              </li>
            </ul>
          </div>
          <IoSearchCircle size="38" className="mr-2" color="#0b75cc" />
          <input
            className="search-bar mr-3"
            placeholder="Find Movies..."
            onChange={(e) => onSearch(e.target.value)}
          />
        </nav>
      </div>
      {/* end of navbar */}

      {/* mainDisplay */}
      <div className="d-flex justify-content-between mt-3 col-12 main-display">
        <div className="d-flex flex-column justify-content-start col-12 col-lg-9 ml-4">
          <h3 className="headings">UpComing World Special</h3>
          {/* banner section */}
          <div className=" banner-img "></div>
          {/* movie display */}
          <h3 className="headings mt-3">Book Recent Shows and Movies </h3>
          <div className="row ">
            {dupData.map((item) => (
              <MovieCard props={item} />
            ))}
          </div>
        </div>
        <div className="py-4 d-flex flex-column justify-content-start d-none d-lg-block position-fixed col-lg-3 side-bar shadow-lg">
          {/* sort */}
          <div>
            <p className="sort-head">Find Top Rated Movies </p>
            <select className="search-bar" onChange={onSort}>
              <option value="none">All Movies</option>
              <option value="asc">Top Ratings </option>
              <option value="desc">Low Ratings</option>
            </select>
          </div>

          {/* filter with genre */}
          <div>
            <p className="sort-head">Favourite Genres</p>
            <select
              className="search-bar"
              onChange={(e) => onGenreSelect(e.target.value)}
            >
              <option value="none">Select Genre</option>
              {genreList.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          {/* filter with lang */}
          <div>
            <p className="sort-head mt-3">Movies in your Language</p>
            {langList.map((item) => (
              <div
                className="search-bar mb-1 mt-0"
                onClick={() => onLangSelect(item)}
              >
                {item}
              </div>
            ))}
          </div>
          {/* filter with format */}
          <div>
            <p className="sort-head">Experience </p>
            {formatList.map((item) => (
              <div className="search-bar mb-1 mt-0"  onClick={() => onFormatSelect(item)}>{item}</div>
            ))}
          </div>
          <div className="text-center  reset search-bar" onClick={resetDisplay}>Reset</div>
        </div>
      </div>
    </div>
  );
}
export default App;

const MovieCard = (keyObj) => {
  return (
    <div className="col-11 col-md-5   d-flex movie-card text-center m-3 shadow-lg p-2">
      <div className="card-img mr-3 w-25">
        <img className=" img-fluid" src={keyObj.props.img} />
      </div>

      <div className="mt-0 text-left card-text mt-0 rounded shadow-md">
        <p className="title mt-1">{keyObj.props.title}</p>
        <div className="line1 d-flex justify-content-between w-50">
          <p>{keyObj.props.censor}</p>
          <p>{keyObj.props.format}</p>
          <p>{keyObj.props.lang} </p>
        </div>
        <div className="line2 d-flex justify-content-between w-75">
          <p>{"Liked by: " + keyObj.props.likeperct}</p>
          <p>{keyObj.props.genres}</p>
        </div>
        
        <p className="movie-desc">{keyObj.props.desc}</p>
          
        
        <button className="btn book-btn">Book ticket</button>
      </div>
    </div>
  );
};
