export const Searchbar = () => {
  return (
    <header className="searchbar">
      <form className="form">
        <button type="submit" class="button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="input"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
