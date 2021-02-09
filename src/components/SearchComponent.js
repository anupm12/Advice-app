import { useEffect, useState } from "react";
import axios from "axios";

const SearchComponent = () => {
  const [searchAdvice, setSearchAdvice] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => {
        setSearchAdvice(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // console.log(searchAdvice);

  return (
    <div>
      {searchAdvice ? <p>{searchAdvice.slip.advice}</p> : <p>Loading...</p>}
    </div>
  );
};

export default SearchComponent;
