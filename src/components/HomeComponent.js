import { useState } from "react";

const HomeComponent = () => {
  const [shuffle, setShuffle] = useState(false);
  const [search, setSearch] = useState(false);
  const [heart, setHeart] = useState(false);

  const stateToggle = () => {
    setShuffle(false);
    setSearch(false);
    setHeart(false);
  };

  const optionsToggle = (option) => {
    stateToggle();
    if (option === "shuffle") setShuffle(true);
    else if (option === "search") setSearch(true);
    else if (option === "heart") setHeart(true);
  };

  return (
    <div>
      <div>
        <button onClick={() => optionsToggle("shuffle")}>Shuffle</button>
        <button onClick={() => optionsToggle("search")}>Search</button>
        <button onClick={() => optionsToggle("heart")}>Heart</button>
      </div>
      <div>{shuffle ? <div>shuffle</div> : console.log("No")}</div>
      <div>{search ? <div>search</div> : console.log("No")}</div>
      <div>{heart ? <div>heart</div> : console.log("No")}</div>
    </div>
  );
};

export default HomeComponent;
