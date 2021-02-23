const SearchComponent = (props) => {
  const searchAdvice = props.searchAdvice;

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

  const isAdviceEmpty = () => {
    if (searchAdvice !== "") {
      return (
        <div>
          {searchAdvice.data.slips ? (
            searchAdvice.data.slips.map((val, index) => {
              if (index < 3)
                return (
                  <p
                    className="pb-2"
                    onClick={() => saveAdvice(val.advice)}
                    key={val.id}
                  >
                    {val.advice}
                  </p>
                );
            })
          ) : (
            <p>Nada</p>
          )}
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  return isAdviceEmpty();
};

export default SearchComponent;
