import PropTypes from 'prop-types';
import { LoadMore } from './Button.module.css';

export const Button = ({ loadMoreBtn }) => {
  return (
    <LoadMore type="button" onClick={loadMoreBtn}>
      Load More
    </LoadMore>
  );
};

Button.propTypes = {
  loadMoreBtn: PropTypes.func.isRequired,
};
