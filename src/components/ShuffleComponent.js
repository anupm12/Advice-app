const ShuffleComponent = (props) => {
  const shuffleAdvice = props.shuffleAdvice;
  return (
    <div>
      {shuffleAdvice ? (
        <p>{shuffleAdvice.data.quotes[0].text}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ShuffleComponent;
