function SearchHeader({ search }) {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    search("bilgesu");
  };
  return (
    <div className="searchDiv">
      <form onSubmit={handleFormSubmit}>
        <label>Ne Arıyorsunuz?</label>
      </form>
      <input type="text" placeholder="" />
      <button className="searchButton">Search</button>
    </div>
  );
}
export default SearchHeader;
