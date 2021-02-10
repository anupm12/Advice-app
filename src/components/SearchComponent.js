const SearchComponent = (props) => {
  const searchAdvice = props.searchAdvice;
  return (
    <div>
      {searchAdvice.data.slips ? (
        searchAdvice.data.slips.map((val) => <p key={val.id}>{val.advice}</p>)
      ) : (
        <p>Nada</p>
      )}
    </div>
  );
};

export default SearchComponent;
