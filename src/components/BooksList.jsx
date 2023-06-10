import PropTypes from 'prop-types';
import styled from 'styled-components';
import BookItem from './BookItem';

// Styled Unordered List
const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const BooksList = ({ booksProps, delBook }) => (
  <StyledUl>
    {booksProps.map((book) => (
      <BookItem
        key={book.id}
        itemProp={book}
        delBook={delBook}
      />
    ))}
  </StyledUl>
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
