import { useState, useEffect } from "react";
import axios from "axios";
import SearchComponent from "./SearchComponent";
import ShuffleComponent from "./ShuffleComponent";
import LikedAdvice from "./LikedAdvice";
import shuffleIcon from "../resources/svg/shuffleIcon.svg";
import searchIcon from "../resources/svg/searchIcon.svg";
import heartIcon from "../resources/svg/heartIcon.svg";

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
      setsearchAdvice("");
      fetchShuffleAdvice();
      setShuffle(true);
    } else if (option === "search") {
      setSearch(true);
    } else if (option === "heart") {
      setsearchAdvice("");
      setHeart(true);
    } else console.log("NA NA");
  };

  useEffect(() => {
    fetchSearchAdvice();
  }, [searchItem]);

  return (
    <div className="flex flex-col justify-center items-center rounded-lg shadow-2xl bg-gradient-to-r from-gradGray to-gradBlue h-full lg:h-3/4 w-full lg:w-4/5">
      <div className="flex justify-between rounded-t-lg bg-lghtBlack w-4/5 lg:w-2/5 px-5 py-4 mb-3">
        <button
          className="px-5 transition transform hover:scale-125"
          onClick={() => optionsToggle("shuffle")}
        >
          <img className="h-5" src={shuffleIcon} alt="shuffle" />
        </button>
        <button
          className="px-5 transition transform hover:scale-125"
          onClick={() => optionsToggle("search")}
        >
          <img className="h-5" src={searchIcon} alt="search" />
        </button>
        <button
          className="px-5 transition transform hover:scale-125"
          onClick={() => optionsToggle("heart")}
        >
          <img className="h-5" src={heartIcon} alt="liked" />
        </button>
      </div>
      {(shuffle || search || heart) && (
        <div className="bg-lghtBlack w-4/5 lg:w-2/5 text-gray-200 p-3 text-md rounded-b-lg">
          <div className="">
            {shuffle ? <ShuffleComponent shuffleAdvice={shuffleAdvice} /> : ""}
          </div>
          <div>
            {search ? (
              <>
                <input
                  className="w-full rounded-sm px-2 py-1 placeholder-gray-300"
                  style={{ background: "#545353" }}
                  placeholder="Type here"
                  type="text"
                  onChange={(e) => {
                    if (e.target.value.length !== 0)
                      setsearchItem(e.target.value);
                  }}
                />
                <div>
                  {searchItem ? (
                    <SearchComponent searchAdvice={searchAdvice} />
                  ) : (
                    ""
                  )}
                </div>
              </>
            ) : (
              ""
            )}
          </div>
          <div>{heart ? <LikedAdvice /> : ""}</div>
        </div>
      )}
    </div>
  );
};

export default HomeComponent;
