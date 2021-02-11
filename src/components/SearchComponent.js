const SearchComponent = (props) => {

  const saveAdvice = (advice) => {
    if(localStorage.getItem("advice") !== null){
      const storedAdvice = localStorage.getItem("advice");
      localStorage.setItem("advice", storedAdvice + JSON.stringify(advice) + "/");
    } else{
      localStorage.setItem("advice", JSON.stringify(advice) + "/");
    }
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
