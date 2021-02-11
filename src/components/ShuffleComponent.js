const ShuffleComponent = (props) => {
  const saveAdvice = () => {
    console.log("clicked");
  };

  const shuffleAdvice = props.shuffleAdvice;
  return (
    <div>
      {shuffleAdvice ? (
        <p onClick={saveAdvice}>{shuffleAdvice.data.quotes[0].text}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ShuffleComponent;
