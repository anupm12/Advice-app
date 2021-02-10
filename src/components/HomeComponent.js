import { useState, useEffect } from "react";
import axios from "axios";
import SearchComponent from "./SearchComponent";

const HomeComponent = () => {
  const [shuffle, setShuffle] = useState(false);
  const [search, setSearch] = useState(false);
  const [heart, setHeart] = useState(false);
  const [advice, setAdvice] = useState(null);
  const [searchItem, setSearchItem] = useState(null);

  const stateToggle = () => {
    setShuffle(false);
    setSearch(false);
    setHeart(false);
  };

  const fetchAdvice = async () => {
    try {
      setAdvice(
        await axios.get(
          `https://api.adviceslip.com/advice/search/${searchItem}`
        )
      );
    } catch (err) {
      console.error(err);
    }
  };

  const optionsToggle = (option) => {
    stateToggle();
    if (option === "shuffle") {
      fetchAdvice();
      setShuffle(true);
    } else if (option === "search") {
      setSearch(true);
    } else if (option === "heart") setHeart(true);
    else console.log("NA NA");
  };

  return (
    <div>
      <div>
        <button onClick={() => optionsToggle("shuffle")}>Shuffle</button>
        <button onClick={() => optionsToggle("search")}>Search</button>
        <button onClick={() => optionsToggle("heart")}>Heart</button>
      </div>
      <div>{shuffle ? <div>Shuffle</div> : ""}</div>
      <div>
        {search ? (
          <input
            type="text"
            onChange={(e) => {
              setSearchItem(e.target.value);
              fetchAdvice();
            }}
          />
        ) : (
          ""
        )}
      </div>
      <div>{searchItem ? <SearchComponent advice={advice} /> : ""}</div>
      <div>{heart ? <div>Heart</div> : ""}</div>
    </div>
  );
};

export default HomeComponent;
