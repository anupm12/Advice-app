import { useState } from "react";

const LikedAdvice = () => {
  let [storedAdvice, setstoredAdvice] = useState(
    localStorage.getItem("advice").split("/")
  );

  const deleteAdvice = (currentAdvice) => {
    let updatedData = [];
    let temp = "";

    storedAdvice.map((val) => {
      if (val !== "" && val !== currentAdvice) updatedData.push(val + "/");
    });

    updatedData.map((val) => (temp += val));

    localStorage.setItem("advice", temp);
    setstoredAdvice(localStorage.getItem("advice").split("/"));
  };

  return (
    <div>
      {storedAdvice.map((val, index) => (
        <p onClick={() => deleteAdvice(val)} key={index}>
          {val.slice(1, -1)}
        </p>
      ))}
    </div>
  );
};

export default LikedAdvice;
