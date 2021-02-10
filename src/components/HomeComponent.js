import { useState, useEffect } from "react";
import axios from "axios";
import SearchComponent from "./SearchComponent";
import ShuffleComponent from "./ShuffleComponent";

const HomeComponent = () => {
  const [shuffle, setShuffle] = useState(false);
  const [shuffleAdvice, setshuffleAdvice] = useState(null);

  const [search, setSearch] = useState(false);
  const [searchItem, setsearchItem] = useState();
  const [searchAdvice, setsearchAdvice] = useState(null);

  const [heart, setHeart] = useState(false);

  const stateToggle = () => {
    setShuffle(false);
    setSearch(false);
    setHeart(false);
  };

  const fetchSearchAdvice = async () => {
    try {
      setsearchAdvice(
        await axios.get(
          `https://api.adviceslip.com/advice/search/${searchItem}`
        )
      );
    } catch (err) {
      console.error(err);
    }
  };

  const fetchShuffleAdvice = async () => {
    try {
      setshuffleAdvice(
        await axios.get(
          "https://goquotes-api.herokuapp.com/api/v1/random?count=1"
        )
      );
    } catch (err) {
      console.error(err);
    }
  };

  const optionsToggle = (option) => {
    stateToggle();
    if (option === "shuffle") {
      fetchShuffleAdvice();
      setShuffle(true);
    } else if (option === "search") {
      setSearch(true);
    } else if (option === "heart") setHeart(true);
    else console.log("NA NA");
  };

  useEffect(() => {
    fetchSearchAdvice();
  }, [searchItem]);

  return (
    <div>
      <div>
        <button onClick={() => optionsToggle("shuffle")}>Shuffle</button>
        <button onClick={() => optionsToggle("search")}>Search</button>
        <button onClick={() => optionsToggle("heart")}>Heart</button>
      </div>
      <div>
        {shuffle ? <ShuffleComponent shuffleAdvice={shuffleAdvice} /> : ""}
      </div>
      <div>
        {search ? (
          <input
            type="text"
            onChange={(e) => {
              if (e.target.value.length !== 0) setsearchItem(e.target.value);
            }}
          />
        ) : (
          ""
        )}
      </div>
      <div>
        {searchItem ? <SearchComponent searchAdvice={searchAdvice} /> : ""}
      </div>
      <div>{heart ? <div>Heart</div> : ""}</div>
    </div>
  );
};

export default HomeComponent;
