import PropTypes from 'prop-types';
import BookItem from './BookItem';

const BooksList = ({ booksProps, delBook }) => (
  <ul>
    {booksProps.map((book) => (
      <BookItem
        key={book.id}
        itemProp={book}
        delBook={delBook}
      />
    ))}
  </ul>
);

BooksList.propTypes = {
  booksProps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  delBook: PropTypes.func.isRequired,
};

export default BooksList;
