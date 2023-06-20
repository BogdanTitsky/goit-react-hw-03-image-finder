import PropTypes from 'prop-types';

export const Button = ({ onLoadMore }) => {
  return (
    <div className="Load-more-wrap">
      <button type="button" className="Button" onClick={onLoadMore}>
        Load more
      </button>
    </div>
  );
};

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
