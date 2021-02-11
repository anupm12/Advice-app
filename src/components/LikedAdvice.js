const LikedAdvice = () => {
    const storedAdvice = localStorage.getItem("advice").split('/');

    return ( 
        <div>
            {
                storedAdvice.map((val, index) => <p key={index}>{val.slice(1, -1)}</p>) 
            }
        </div>
     );
}
 
export default LikedAdvice;
