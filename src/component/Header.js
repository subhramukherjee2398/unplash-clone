import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import "./header.css";

const Heading = styled.header`
  max-width: 70rem;
  margin: 2rem auto;
  text-align: center;
`;

const H1 = styled.h1`
  font-family: "Oswald", sans-serif;
  margin-bottom: 1em;
`;

const Input = styled.input`
  height: 2.5rem;
  width: 20rem;
  margin-top: 1em;
  outline: none;
  text-indent: 1em;
  font-size: 1em;

  ::placeholder {
    font-size: 0.8em;
  }
`;

const Button = styled.button`
  height: 2.5rem;
  padding: 0 1em;
  outline: none;
  cursor: pointer;
  background: #222;
  border: none;
  color: #fff;
  font-size: 1em;
`;

const Header = ({ getSearchImages }) => {
  const [value, setValue] = useState("");

  const SearchForPhotos = (count = 20) => {
    setValue("");
    const apiRoot = "https://api.unsplash.com";
    // given accesskey inside it just to be secure.
    const accessKey =
      process.env.REACT_APP_ACCESSKEY ||
      "ePcTCgIAyVUZ37EkcWZZWG-_XoSrmitDdaaNXodFG7E";

    axios
      .get(
        `${apiRoot}/search/photos?client_id=${accessKey}&query=${value}&count=${count}`
      )
      .then((res) => {
        getSearchImages(res.data.results);
      });
  };

  return (
    <div className="container">
      <img
        src="https://files.oyebesmartest.com/uploads/large/hill-hd-wallpapersrie8e.png"
        alt="Snow"
        className="contianer-image"
      />
      <div className="centered">
        <Heading>
          <H1 style={{fontWeight:'bold'}}>Unsplash Clone</H1>
          <div>
            <p style={{fontWeight:'bold'}}>The internet’s source of freely usable images.</p>
            <p style={{fontWeight:'bold'}}>Powered by creators everywhere.</p>
          </div>

          <Input
            type="text"
            placeholder="Search photos"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button onClick={() => SearchForPhotos()} className='search'>Search</Button>
        </Heading>
      </div>
    </div>
  );
};

export default Header;
