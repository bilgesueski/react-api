import "./App.css";
import SearchHeader from "./SearchHeader";
import searchImages from "./api";

function App() {
  const handleSubmit = (term) => {
    debugger;
    console.log(term);
    searchImages(term);
  };

  return (
    <div className="App">
      <SearchHeader search={handleSubmit} />
    </div>
  );
}

export default App;
