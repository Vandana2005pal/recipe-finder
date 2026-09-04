function SearchBar({ searchText, onSearchTextChange, onSearch }) {
  return (
    <form className="search-bar" onSubmit={onSearch}>
      <label htmlFor="recipe-search">Search recipes</label>
      <div className="search-controls">
        <input
          id="recipe-search"
          type="search"
          value={searchText}
          onChange={(event) => onSearchTextChange(event.target.value)}
          placeholder="Try pasta, soup, or salad"
        />
        <button type="submit">Search</button>
      </div>
    </form>
  )
}

export default SearchBar
