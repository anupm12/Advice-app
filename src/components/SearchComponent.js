const SearchComponent = (props) => {
  const saveAdvice = (advice) => {
    let storedAdvice = localStorage.getItem("advice");
    localStorage.setItem("advice", storedAdvice + JSON.stringify(advice));
    storedAdvice = localStorage.getItem("advice");
    
    // console.log(storedAdvice);
  };

  const searchAdvice = props.searchAdvice;
  return (
    <div>
      {searchAdvice.data.slips ? (
        searchAdvice.data.slips.map((val) => (
          <p onClick={() => saveAdvice(val.advice)} key={val.id}>
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
