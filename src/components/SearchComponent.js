const SearchComponent = (props) => {
  const searchAdvice = props.advice;
  // console.log(searchAdvice);
  return (
    <div>
      {searchAdvice ? (
        searchAdvice.data.slips ? (
          searchAdvice.data.slips.map((val) => <p>{val.advice}</p>)
        ) : (
          <p>Nada</p>
        )
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SearchComponent;
