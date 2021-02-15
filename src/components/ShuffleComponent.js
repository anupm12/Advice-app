const ShuffleComponent = (props) => {
  const saveAdvice = (advice) => {
    if (localStorage.getItem("advice") !== null) {
      const storedAdvice = localStorage.getItem("advice");
      localStorage.setItem(
        "advice",
        storedAdvice + JSON.stringify(advice) + "/"
      );
    } else {
      localStorage.setItem("advice", JSON.stringify(advice) + "/");
    }
  };

  const shuffleAdvice = props.shuffleAdvice;
  return (
    <div>
      {shuffleAdvice ? (
        <p onClick={() => saveAdvice(shuffleAdvice.data.quotes[0].text)}>
          {shuffleAdvice.data.quotes[0].text}
        </p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ShuffleComponent;
