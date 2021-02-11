const SearchComponent = (props) => {
  const saveAdvice = (id) => {
    console.log("clicked" + id);
  };

  const searchAdvice = props.searchAdvice;
  return (
    <div>
      {searchAdvice.data.slips ? (
        searchAdvice.data.slips.map((val) => (
          <p onClick={() => saveAdvice(val.id)} key={val.id}>
            {val.advice}
          </p>
        ))
      ) : (
        <p>Nada</p>
      )}
    </div>
  );
};

export default SearchComponent;
