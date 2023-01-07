import "./App.css";
import { useEffect, useState } from "react";
import { Images } from "./component/Images";
import Loader from "./component/Loader";
import Header from "./component/Header";
import axios from "axios";
import { createGlobalStyle } from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';

import styled from 'styled-components';

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
  const [images, setImage] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);


  const fetchImages = (count=20) => {
    const apiRoot = "https://api.unsplash.com";
    // given accesskey inside it just to be secure.
    const accessKey = process.env.REACT_APP_ACCESSKEY || '6FJ-08sw_QAgTJ84pOrXO6Kx13gGJpXvYfB4SPsvgnQ';

    axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`)
      .then((res) => {
        console.log(res.data,'res')
        setImage([...images, ...res.data]);
      }); 
  };

  const getSearchImages  = (searchImages) =>{
    console.log(searchImages,'search');
    setImage(searchImages);
  }

  return (
    <div className="App">
      <Header getSearchImages={getSearchImages}/>
      <GlobalStyle />
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
      >
        <WrapperImages>
          {images.map(image => (
            <Images url={image.urls.thumb} key={image.id} />
          ))}
        </WrapperImages>
      </InfiniteScroll>
    </div>
  );
}

export default App;
