import "../../styles/style.css";

function FormSearch() {
  return (
    <div className="form-search">
      <input
        type="text"
        className="form-search__input"
        placeholder="Search products..."
      />
      <button className="form-search__btn" type="button">
        <svg className="btn-icon__svg">
          <use xlinkHref="img/sprite.svg#icon-search"></use>
        </svg>
      </button>
    </div>
  );
}

export default FormSearch;
