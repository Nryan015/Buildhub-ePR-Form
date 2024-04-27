import "../../styles/style.css";

function CurrentLocation(props) {
  const { userAddress = "" } = props;

  return (
    <div className="current-location">
      <span className="current-location__hint">Deliver to</span>
      <svg className="current-location__icon btn-icon__svg">
        <use xlinkHref="img/sprite.svg#icon-location_pin"></use>
      </svg>
      <span className="current-location__pinned">{userAddress}</span>
      <button
        className="current-location__btn"
        onClick={(e) => {
          window.location.reload();
        }}
      >
        Change
      </button>
    </div>
  );
}

export default CurrentLocation;
