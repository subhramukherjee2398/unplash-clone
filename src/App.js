import "./App.css";
import { useEffect} from "react";
import { Images } from "./component/Images";
import Loader from "./component/Loader";
import Header from "./component/Header";
import axios from "axios";
import { createGlobalStyle } from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";

import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setRecommand, setSearch } from "./redux/actions/recommandAction";
import { useSelector } from "react-redux";
const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
}
`;

const WrapperImages = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`;

function App() {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.all);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = (count = 20) => {
    const apiRoot = "https://api.unsplash.com";
    // given accesskey inside it just to be secure.
    const accessKey =
      process.env.REACT_APP_ACCESSKEY ||
      "ePcTCgIAyVUZ37EkcWZZWG-_XoSrmitDdaaNXodFG7E";

    axios
      .get(
        `${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`
      )
      .then((res) => {
        console.log(res.data, "res");
        dispatch(setRecommand(res.data));
      });
  };

  const getSearchImages = (searchImages) => {
    console.log(searchImages, "search");
    if (searchImages.length !== 0) {
      dispatch(setSearch(searchImages));
    } else {
      fetchImages();
    }
  };

  return (
    <div className="App">
      <Header getSearchImages={getSearchImages} />
      <GlobalStyle />
      <InfiniteScroll
        dataLength={images && images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
      >
        <WrapperImages>
          {images &&
            images.map((image) => (
              <Images url={image.urls.thumb} key={image.id} />
            ))}
        </WrapperImages>
      </InfiniteScroll>
    </div>
  );
}

export default App;
